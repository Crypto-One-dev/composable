import { StakingRewardPool } from "@/defi/types/stakingRewards";
import BigNumber from "bignumber.js";
import create from "zustand";

export interface StakingRewardsSlice {
  rewardPools: Record<string, StakingRewardPool>;
  rewardPoolStakedPositionIds: Record<string, Array<string>>;
  pabloStaking: {
    totalPBLOLocked: BigNumber;
    totalFnftMinted: BigNumber;
    averageLockMultiplier: BigNumber;
    averageLockTime: BigNumber;
  }
}

export const useStakingRewardsSlice = create<StakingRewardsSlice>(() => ({
  rewardPools: {},
  rewardPoolStakedPositionIds: {},
  pabloStaking: {
    totalPBLOLocked: new BigNumber(0),
    totalFnftMinted: new BigNumber(0),
    averageLockMultiplier: new BigNumber(0),
    averageLockTime: new BigNumber(0),
  }
}));

export const putStakingRewardPool = (stakingRewardPool: StakingRewardPool) =>
  useStakingRewardsSlice.setState((state) => ({
    ...state,
    rewardPools: {
      ...state.rewardPools,
      [stakingRewardPool.assetId.toString()]: {
        ...stakingRewardPool,
      },
    },
  }));

export const putStakingRewardPools = (
  stakingRewardPools: StakingRewardPool[]
) =>
  useStakingRewardsSlice.setState((state) => ({
    ...state,
    rewardPools: stakingRewardPools.reduce(function (acc, curr) {
      return {
        ...acc,
        [curr.assetId.toString()]: curr,
      };
    }, {} as Record<string, StakingRewardPool>),
  }));

export const putStakingRewardPoolStakedPositionIds = (
    stakingRewardPoolId: string,
    stakedPositionIds: Array<string>
  ) =>
    useStakingRewardsSlice.setState((state) => ({
      ...state,
      rewardPoolStakedPositionIds: {
        ...state.rewardPoolStakedPositionIds,
        [stakingRewardPoolId]: stakedPositionIds
      },
    }));

export const useStakingRewardPool = (
  principalAssetId: string
): StakingRewardPool | null =>
  useStakingRewardsSlice().rewardPools[principalAssetId] ?? null;