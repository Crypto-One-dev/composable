import { TokenId } from "tokens";
import { SUBSTRATE_NETWORKS } from "./defi/constants";

export const SubstrateNetworks = ["kusama", "picasso", "karura", "statemine"] as const;
export type SubstrateNetworkId = typeof SubstrateNetworks[number];
export type SubstrateNetwork = {
  relayChain: "polkadot" | "kusama";
  parachainId: number | 0;
  name: string;
  wsUrl: string;
  tokenId: TokenId;
  ss58Format: number;
  subscanUrl: string;
  decimals: number;
  color?: string;
  symbol: string;
  logo: string;
};

export const getSubstrateNetwork = (
  networkId: SubstrateNetworkId
): SubstrateNetwork => SUBSTRATE_NETWORKS[networkId];

/**
 * TODO: move to utils or substrate-react
 * @param network picasso, karura or kusama
 * @param extrinsicHash extrinsic hash generated by polkadot js
 * @returns link to subscan
 */
export function subscanExtrinsicLink(
  network: SubstrateNetworkId,
  extrinsicHash: string
): string {
  return SUBSTRATE_NETWORKS[network].subscanUrl + "extrinsic/" + extrinsicHash;
}
