
//! Autogenerated weights for `pablo`
//!
//! THIS FILE WAS AUTO-GENERATED USING THE SUBSTRATE BENCHMARK CLI VERSION 4.0.0-dev
//! DATE: 2022-05-02, STEPS: `50`, REPEAT: 20, LOW RANGE: `[]`, HIGH RANGE: `[]`
//! EXECUTION: Some(Wasm), WASM-EXECUTION: Compiled, CHAIN: Some("dali-dev"), DB CACHE: 1024

// Executed Command:
// ./target/release/composable
// benchmark
// --chain=dali-dev
// --execution=wasm
// --wasm-execution=compiled
// --pallet=*
// --extrinsic=*
// --steps=50
// --repeat=20
// --output=runtime/dali/src/weights
// --log
// error

#![cfg_attr(rustfmt, rustfmt_skip)]
#![allow(unused_parens)]
#![allow(unused_imports)]

use frame_support::{traits::Get, weights::Weight};
use sp_std::marker::PhantomData;

/// Weight functions for `pablo`.
pub struct WeightInfo<T>(PhantomData<T>);
impl<T: frame_system::Config> pablo::WeightInfo for WeightInfo<T> {
	// Storage: CurrencyFactory AssetIdRanges (r:1 w:1)
	// Storage: Pablo PoolCount (r:1 w:1)
	// Storage: CurrencyFactory AssetEd (r:0 w:1)
	// Storage: Pablo Pools (r:0 w:1)
	fn create() -> Weight {
		(38_427_000 as Weight)
			.saturating_add(T::DbWeight::get().reads(2 as Weight))
			.saturating_add(T::DbWeight::get().writes(4 as Weight))
	}
	// Storage: Pablo PoolCount (r:1 w:1)
	// Storage: Pablo Pools (r:0 w:1)
	fn create_lbp() -> Weight {
		(29_202_000 as Weight)
			.saturating_add(T::DbWeight::get().reads(1 as Weight))
			.saturating_add(T::DbWeight::get().writes(2 as Weight))
	}
	// Storage: Pablo Pools (r:1 w:0)
	// Storage: Tokens Accounts (r:5 w:5)
	// Storage: Tokens TotalIssuance (r:1 w:1)
	// Storage: System Account (r:1 w:1)
	// Storage: Pablo PriceCumulativeState (r:1 w:1)
	fn add_liquidity() -> Weight {
		(186_683_000 as Weight)
			.saturating_add(T::DbWeight::get().reads(9 as Weight))
			.saturating_add(T::DbWeight::get().writes(8 as Weight))
	}
	// Storage: Pablo Pools (r:1 w:0)
	// Storage: Tokens Accounts (r:2 w:2)
	// Storage: System Account (r:1 w:1)
	// Storage: Pablo PriceCumulativeState (r:1 w:1)
	fn add_liquidity_lbp() -> Weight {
		(129_056_000 as Weight)
			.saturating_add(T::DbWeight::get().reads(5 as Weight))
			.saturating_add(T::DbWeight::get().writes(4 as Weight))
	}
	// Storage: Pablo Pools (r:1 w:0)
	// Storage: Tokens Accounts (r:5 w:5)
	// Storage: Tokens TotalIssuance (r:1 w:1)
	// Storage: System Account (r:1 w:0)
	// Storage: Pablo PriceCumulativeState (r:1 w:1)
	fn remove_liquidity() -> Weight {
		(131_039_000 as Weight)
			.saturating_add(T::DbWeight::get().reads(9 as Weight))
			.saturating_add(T::DbWeight::get().writes(7 as Weight))
	}
	// Storage: Pablo Pools (r:1 w:1)
	// Storage: Tokens Accounts (r:2 w:2)
	// Storage: System Account (r:1 w:1)
	// Storage: Pablo PriceCumulativeState (r:1 w:1)
	fn remove_liquidity_lbp() -> Weight {
		(129_204_000 as Weight)
			.saturating_add(T::DbWeight::get().reads(5 as Weight))
			.saturating_add(T::DbWeight::get().writes(5 as Weight))
	}
	// Storage: Pablo Pools (r:1 w:0)
	// Storage: Tokens Accounts (r:5 w:5)
	// Storage: System Account (r:2 w:1)
	// Storage: Pablo PriceCumulativeState (r:1 w:1)
	fn buy() -> Weight {
		(331_783_000 as Weight)
			.saturating_add(T::DbWeight::get().reads(9 as Weight))
			.saturating_add(T::DbWeight::get().writes(7 as Weight))
	}
	// Storage: Pablo Pools (r:1 w:0)
	// Storage: Tokens Accounts (r:5 w:5)
	// Storage: System Account (r:2 w:1)
	// Storage: Pablo PriceCumulativeState (r:1 w:1)
	fn sell() -> Weight {
		(233_323_000 as Weight)
			.saturating_add(T::DbWeight::get().reads(9 as Weight))
			.saturating_add(T::DbWeight::get().writes(7 as Weight))
	}
	// Storage: Pablo Pools (r:1 w:0)
	// Storage: Tokens Accounts (r:5 w:5)
	// Storage: System Account (r:2 w:1)
	// Storage: Pablo PriceCumulativeState (r:1 w:1)
	fn swap() -> Weight {
		(227_321_000 as Weight)
			.saturating_add(T::DbWeight::get().reads(9 as Weight))
			.saturating_add(T::DbWeight::get().writes(7 as Weight))
	}
}
