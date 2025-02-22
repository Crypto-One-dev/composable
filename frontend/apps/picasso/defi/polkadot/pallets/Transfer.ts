import { SUBSTRATE_NETWORKS } from "@/defi/polkadot/Networks";
import { SubstrateNetworkId } from "@/defi/polkadot/types";
import { TokenMetadata } from "@/stores/defi/polkadot/tokens/slice";
import { ApiPromise } from "@polkadot/api";
import { u128 } from "@polkadot/types-codec";
import BigNumber from "bignumber.js";
import { fromChainIdUnit, toChainIdUnit } from "shared";
import { ParachainId, RelayChainId } from "substrate-react";
import { TokenId } from "tokens";

export function getAmountToTransfer({
  balance,
  amount,
  existentialDeposit,
  keepAlive,
  api,
  sourceChain,
  targetChain,
  token,
}: {
  balance: BigNumber;
  amount: BigNumber;
  existentialDeposit: BigNumber;
  keepAlive: boolean;
  api: ApiPromise;
  sourceChain: SubstrateNetworkId;
  targetChain: SubstrateNetworkId;
  token: TokenMetadata;
}): u128 {
  const isExistentialDepositImportant = balance
    .minus(amount)
    .lte(existentialDeposit);
  const isZeroAmount =
    keepAlive &&
    isExistentialDepositImportant &&
    amount.minus(existentialDeposit).lte(0);
  const calculatedAmount =
    keepAlive && isExistentialDepositImportant && !isZeroAmount
      ? amount.minus(existentialDeposit)
      : amount;

  return api.createType(
    "u128",
    toChainIdUnit(
      calculatedAmount,
      token.decimals[sourceChain] || SUBSTRATE_NETWORKS[sourceChain].decimals
    )
      .toFixed(0)
      .toString()
  );
}

export type CalculateTransferAmount = {
  sourceGas: {
    fee: BigNumber;
    token: TokenId;
  };
  amountToTransfer: BigNumber;
  balance: BigNumber;
  selectedToken: TokenId;
  keepAlive: boolean;
  sourceExistentialDeposit: BigNumber;
  decimals: number;
};

export function calculateTransferAmount({
  sourceGas,
  amountToTransfer,
  balance,
  selectedToken,
  keepAlive,
  sourceExistentialDeposit,
  decimals,
}: CalculateTransferAmount) {
  const ZERO = new BigNumber(0);
  const gasTokenEqSelected = selectedToken === sourceGas.token;
  // If the remainder is not enough to pay the gas fee, deduct the gas fee from amount.
  // NOTE: This should happen only if transfer token and gas token are the same.
  const gasPrice = gasTokenEqSelected ? sourceGas.fee : ZERO;

  // Is account going to be removed after transfer?
  const willReap = balance.lte(amountToTransfer)
    ? true
    : balance
        .minus(gasPrice)
        .minus(amountToTransfer)
        .minus(sourceExistentialDeposit)
        .lt(sourceExistentialDeposit);

  // If we should keep alive, deduct existential deposit from the amount to transfer
  // NOTE: This should happen only if amount is MAX balance.
  const requiredKeepAliveValue =
    keepAlive && willReap ? sourceExistentialDeposit : ZERO;

  const output = fromChainIdUnit(
    toChainIdUnit(
      amountToTransfer.minus(gasPrice).minus(requiredKeepAliveValue),
      decimals
    ).integerValue(),
    decimals
  );

  // Don't send values less than zero.
  return output.lte(ZERO) ? ZERO : output;
}

/**
 * @param sourceChain
 * @param targetChain
 * @param tokens
 * @param {TokenId} selectedToken
 */
export function getDestChainFee(
  sourceChain: ParachainId | RelayChainId,
  targetChain: ParachainId | RelayChainId,
  tokens: Record<TokenId, TokenMetadata>,
  selectedToken: TokenId
) {
  switch (`${sourceChain}=>${targetChain}`) {
    case "kusama=>picasso":
      if (selectedToken === "ksm") {
        return {
          fee: fromChainIdUnit(new BigNumber("7536750")),
          token: tokens.ksm,
        };
      }
      break;
    case "karura=>picasso":
      const fee: BigNumber | undefined = {
        kusd: fromChainIdUnit(new BigNumber("927020325")),
        kar: fromChainIdUnit(new BigNumber("927020325")),
        ksm: fromChainIdUnit(new BigNumber("927020325")),
      }[selectedToken as string];

      return {
        fee: fee ?? null,
        token: fee ? tokens[selectedToken] : null,
      };
    case "picasso=>karura":
      if (selectedToken === "kusd") {
        return {
          fee: fromChainIdUnit(new BigNumber("74592000000")),
          token: tokens.kusd,
        };
      }
      break;
    case "picasso=>kusama":
      if (selectedToken === "ksm") {
        return {
          fee: fromChainIdUnit(new BigNumber("51105801784")),
          token: tokens.ksm,
        };
      }
      break;
    case "statemine=>picasso":
      if (selectedToken === "usdt") {
        return {
          fee: fromChainIdUnit(
            new BigNumber(13),
            tokens.usdt.decimals.statemine
          ),
          token: tokens.usdt,
        };
      }

      if (selectedToken === "ksm") {
        return {
          fee: fromChainIdUnit(
            new BigNumber(347632),
            tokens.ksm.decimals.statemine
          ),
          token: tokens.ksm,
        };
      }
      break;
    case "picasso=>statemine":
      if (selectedToken === "usdt") {
        return {
          fee: fromChainIdUnit(
            new BigNumber(600000000),
            tokens.ksm.decimals.statemine
          ),
          token: tokens.ksm,
        };
      }

      if (selectedToken === "ksm") {
        return {
          fee: fromChainIdUnit(
            new BigNumber(15450332),
            tokens.ksm.decimals.statemine
          ),
          token: tokens.ksm,
        };
      }
      break;
    default:
      return {
        fee: new BigNumber(0),
        token: tokens.pica,
      };
  }
}
