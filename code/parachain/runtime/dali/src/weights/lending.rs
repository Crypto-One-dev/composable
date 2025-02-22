
//! Autogenerated weights for `lending`
//!
//! THIS FILE WAS AUTO-GENERATED USING THE SUBSTRATE BENCHMARK CLI VERSION 4.0.0-dev
//! DATE: 2022-11-11, STEPS: `50`, REPEAT: 20, LOW RANGE: `[]`, HIGH RANGE: `[]`
//! HOSTNAME: `20dcb8f4ced6`, CPU: `Intel(R) Xeon(R) CPU @ 2.20GHz`
//! EXECUTION: Some(Wasm), WASM-EXECUTION: Compiled, CHAIN: Some("dali-dev"), DB CACHE: 1024

// Executed Command:
// ./target/release/composable
// benchmark
// pallet
// --chain=dali-dev
// --execution=wasm
// --wasm-execution=compiled
// --wasm-instantiation-strategy=legacy-instance-reuse
// --pallet=*
// --extrinsic=*
// --steps=50
// --repeat=20
// --output=parachain/runtime/dali/src/weights
// --log
// error

#![cfg_attr(rustfmt, rustfmt_skip)]
#![allow(unused_parens)]
#![allow(unused_imports)]

use frame_support::{traits::Get, weights::Weight};
use sp_std::marker::PhantomData;

/// Weight functions for `lending`.
pub struct WeightInfo<T>(PhantomData<T>);
impl<T: frame_system::Config> lending::WeightInfo for WeightInfo<T> {
	// Storage: Oracle Prices (r:2 w:0)
	// Storage: Lending LendingCount (r:1 w:1)
	// Storage: Vault VaultCount (r:1 w:1)
	// Storage: CurrencyFactory AssetIdRanges (r:1 w:1)
	// Storage: Tokens Accounts (r:2 w:2)
	// Storage: System Account (r:1 w:1)
	// Storage: CurrencyFactory AssetEd (r:0 w:2)
	// Storage: Vault LpTokensToVaults (r:0 w:1)
	// Storage: Vault Vaults (r:0 w:1)
	// Storage: Vault CapitalStructure (r:0 w:1)
	// Storage: Lending DebtTokenForMarket (r:0 w:1)
	// Storage: Lending BorrowIndex (r:0 w:1)
	// Storage: Lending Markets (r:0 w:1)
	fn create_market() -> Weight {
		(218_122_000 as Weight)
			.saturating_add(T::DbWeight::get().reads(8 as Weight))
			.saturating_add(T::DbWeight::get().writes(14 as Weight))
	}
	// Storage: Lending Markets (r:1 w:0)
	// Storage: Lending AccountCollateral (r:1 w:1)
	// Storage: Tokens Accounts (r:2 w:2)
	// Storage: System Account (r:1 w:1)
	fn deposit_collateral() -> Weight {
		(125_340_000 as Weight)
			.saturating_add(T::DbWeight::get().reads(5 as Weight))
			.saturating_add(T::DbWeight::get().writes(4 as Weight))
	}
	// Storage: Lending Markets (r:1 w:0)
	// Storage: Lending AccountCollateral (r:1 w:1)
	// Storage: Vault Vaults (r:1 w:0)
	// Storage: Lending DebtTokenForMarket (r:1 w:0)
	// Storage: Lending DebtIndex (r:1 w:0)
	// Storage: Oracle PriceHistory (r:2 w:0)
	// Storage: Oracle Prices (r:2 w:0)
	// Storage: Tokens Accounts (r:2 w:2)
	fn withdraw_collateral() -> Weight {
		(157_304_000 as Weight)
			.saturating_add(T::DbWeight::get().reads(11 as Weight))
			.saturating_add(T::DbWeight::get().writes(3 as Weight))
	}
	// Storage: Lending Markets (r:1 w:0)
	// Storage: Vault Vaults (r:1 w:0)
	// Storage: Oracle Prices (r:2 w:0)
	// Storage: Lending DebtTokenForMarket (r:1 w:0)
	// Storage: Lending BorrowTimestamp (r:1 w:1)
	// Storage: Lending AccountCollateral (r:1 w:0)
	// Storage: Oracle PriceHistory (r:2 w:0)
	// Storage: Lending DebtIndex (r:1 w:1)
	// Storage: Vault CapitalStructure (r:2 w:0)
	// Storage: Tokens Accounts (r:4 w:3)
	// Storage: Lending BorrowIndex (r:1 w:0)
	// Storage: Tokens TotalIssuance (r:1 w:1)
	// Storage: System Account (r:1 w:1)
	// Storage: Lending LastBlockTimestamp (r:1 w:0)
	// Storage: Lending BorrowRent (r:1 w:1)
	fn borrow() -> Weight {
		(381_614_000 as Weight)
			.saturating_add(T::DbWeight::get().reads(21 as Weight))
			.saturating_add(T::DbWeight::get().writes(8 as Weight))
	}
	// Storage: Lending BorrowTimestamp (r:1 w:1)
	// Storage: Lending LastBlockTimestamp (r:1 w:0)
	// Storage: Lending DebtTokenForMarket (r:1 w:0)
	// Storage: Lending DebtIndex (r:1 w:1)
	// Storage: Lending BorrowIndex (r:1 w:0)
	// Storage: Tokens Accounts (r:4 w:3)
	// Storage: Lending Markets (r:1 w:0)
	// Storage: Vault Vaults (r:1 w:0)
	// Storage: Tokens TotalIssuance (r:1 w:1)
	// Storage: Lending BorrowRent (r:1 w:0)
	// Storage: System Account (r:1 w:1)
	fn repay_borrow() -> Weight {
		(276_109_000 as Weight)
			.saturating_add(T::DbWeight::get().reads(14 as Weight))
			.saturating_add(T::DbWeight::get().writes(7 as Weight))
	}
	// Storage: Lending Markets (r:1 w:0)
	// Storage: Vault Vaults (r:1 w:0)
	// Storage: Lending AccountCollateral (r:1 w:0)
	// Storage: Oracle PriceHistory (r:2 w:0)
	// Storage: Oracle Prices (r:2 w:0)
	// Storage: Lending DebtTokenForMarket (r:1 w:0)
	// Storage: Lending DebtIndex (r:1 w:0)
	/// The range of component `b` is `[1, 1000]`.
	fn liquidate(b: u32, ) -> Weight {
		(92_813_000 as Weight)
			// Standard Error: 16_000
			.saturating_add((30_525_000 as Weight).saturating_mul(b as Weight))
			.saturating_add(T::DbWeight::get().reads(9 as Weight))
	}
	// Storage: Timestamp Now (r:1 w:0)
	fn now() -> Weight {
		(4_065_000 as Weight)
			.saturating_add(T::DbWeight::get().reads(1 as Weight))
	}
	// Storage: Lending DebtTokenForMarket (r:1 w:0)
	// Storage: Tokens Accounts (r:2 w:0)
	// Storage: Tokens TotalIssuance (r:1 w:0)
	// Storage: Lending Markets (r:1 w:1)
	// Storage: Vault Vaults (r:1 w:0)
	// Storage: Lending LastBlockTimestamp (r:1 w:0)
	// Storage: Lending BorrowIndex (r:1 w:1)
	/// The range of component `x` is `[1, 1000]`.
	fn accrue_interest(x: u32, ) -> Weight {
		(87_576_000 as Weight)
			// Standard Error: 0
			.saturating_add((9_000 as Weight).saturating_mul(x as Weight))
			.saturating_add(T::DbWeight::get().reads(8 as Weight))
			.saturating_add(T::DbWeight::get().writes(2 as Weight))
	}
	fn account_id() -> Weight {
		(1_692_000 as Weight)
	}
	// Storage: Vault Vaults (r:1 w:0)
	// Storage: Vault CapitalStructure (r:1 w:0)
	fn available_funds() -> Weight {
		(18_486_000 as Weight)
			.saturating_add(T::DbWeight::get().reads(2 as Weight))
	}
	// Storage: Vault Vaults (r:1 w:0)
	// Storage: Vault CapitalStructure (r:1 w:1)
	// Storage: Tokens Accounts (r:2 w:2)
	fn handle_withdrawable() -> Weight {
		(72_904_000 as Weight)
			.saturating_add(T::DbWeight::get().reads(4 as Weight))
			.saturating_add(T::DbWeight::get().writes(3 as Weight))
	}
	// Storage: Vault Vaults (r:1 w:0)
	// Storage: Tokens Accounts (r:2 w:2)
	// Storage: Vault CapitalStructure (r:1 w:1)
	// Storage: System Account (r:1 w:1)
	fn handle_depositable() -> Weight {
		(112_990_000 as Weight)
			.saturating_add(T::DbWeight::get().reads(5 as Weight))
			.saturating_add(T::DbWeight::get().writes(4 as Weight))
	}
	// Storage: Vault Vaults (r:1 w:0)
	// Storage: Tokens Accounts (r:2 w:2)
	// Storage: Vault CapitalStructure (r:1 w:1)
	// Storage: System Account (r:1 w:1)
	fn handle_must_liquidate() -> Weight {
		(112_867_000 as Weight)
			.saturating_add(T::DbWeight::get().reads(5 as Weight))
			.saturating_add(T::DbWeight::get().writes(4 as Weight))
	}
}
