
//! Autogenerated weights for `collator_selection`
//!
//! THIS FILE WAS AUTO-GENERATED USING THE SUBSTRATE BENCHMARK CLI VERSION 4.0.0-dev
//! DATE: 2022-05-31, STEPS: `50`, REPEAT: 20, LOW RANGE: `[]`, HIGH RANGE: `[]`
//! EXECUTION: Some(Wasm), WASM-EXECUTION: Compiled, CHAIN: Some("picasso-dev"), DB CACHE: 1024

// Executed Command:
// ./target/release/composable
// benchmark
// pallet
// --chain=picasso-dev
// --execution=wasm
// --wasm-execution=compiled
// --pallet=*
// --extrinsic=*
// --steps=50
// --repeat=20
// --output=runtime/picasso/src/weights
// --log
// error

#![cfg_attr(rustfmt, rustfmt_skip)]
#![allow(unused_parens)]
#![allow(unused_imports)]

use frame_support::{traits::Get, weights::Weight};
use sp_std::marker::PhantomData;

/// Weight functions for `collator_selection`.
pub struct WeightInfo<T>(PhantomData<T>);
impl<T: frame_system::Config> collator_selection::WeightInfo for WeightInfo<T> {
	// Storage: Session NextKeys (r:1 w:0)
	// Storage: CollatorSelection Invulnerables (r:0 w:1)
	fn set_invulnerables(b: u32, ) -> Weight {
		(17_772_000 as Weight)
			// Standard Error: 7_000
			.saturating_add((6_993_000 as Weight).saturating_mul(b as Weight))
			.saturating_add(T::DbWeight::get().reads((1 as Weight).saturating_mul(b as Weight)))
			.saturating_add(T::DbWeight::get().writes(1 as Weight))
	}
	// Storage: CollatorSelection DesiredCandidates (r:0 w:1)
	fn set_desired_candidates() -> Weight {
		(19_248_000 as Weight)
			.saturating_add(T::DbWeight::get().writes(1 as Weight))
	}
	// Storage: CollatorSelection CandidacyBond (r:0 w:1)
	fn set_candidacy_bond() -> Weight {
		(19_350_000 as Weight)
			.saturating_add(T::DbWeight::get().writes(1 as Weight))
	}
	// Storage: CollatorSelection Candidates (r:1 w:1)
	// Storage: CollatorSelection DesiredCandidates (r:1 w:0)
	// Storage: CollatorSelection Invulnerables (r:1 w:0)
	// Storage: Session NextKeys (r:1 w:0)
	// Storage: CollatorSelection CandidacyBond (r:1 w:0)
	// Storage: CollatorSelection LastAuthoredBlock (r:0 w:1)
	fn register_as_candidate(c: u32, ) -> Weight {
		(118_442_000 as Weight)
			// Standard Error: 2_000
			.saturating_add((238_000 as Weight).saturating_mul(c as Weight))
			.saturating_add(T::DbWeight::get().reads(5 as Weight))
			.saturating_add(T::DbWeight::get().writes(2 as Weight))
	}
	// Storage: CollatorSelection Candidates (r:1 w:1)
	// Storage: CollatorSelection LastAuthoredBlock (r:0 w:1)
	fn leave_intent(c: u32, ) -> Weight {
		(130_096_000 as Weight)
			// Standard Error: 3_000
			.saturating_add((225_000 as Weight).saturating_mul(c as Weight))
			.saturating_add(T::DbWeight::get().reads(1 as Weight))
			.saturating_add(T::DbWeight::get().writes(2 as Weight))
	}
	// Storage: System Account (r:2 w:2)
	// Storage: System BlockWeight (r:1 w:1)
	// Storage: CollatorSelection LastAuthoredBlock (r:0 w:1)
	fn note_author() -> Weight {
		(75_094_000 as Weight)
			.saturating_add(T::DbWeight::get().reads(3 as Weight))
			.saturating_add(T::DbWeight::get().writes(4 as Weight))
	}
	// Storage: CollatorSelection Candidates (r:1 w:1)
	// Storage: CollatorSelection LastAuthoredBlock (r:1000 w:1)
	// Storage: System Account (r:1 w:1)
	// Storage: CollatorSelection Invulnerables (r:1 w:0)
	// Storage: System BlockWeight (r:1 w:1)
	fn new_session(r: u32, c: u32, ) -> Weight {
		(0 as Weight)
			// Standard Error: 3_225_000
			.saturating_add((18_835_000 as Weight).saturating_mul(r as Weight))
			// Standard Error: 3_225_000
			.saturating_add((88_658_000 as Weight).saturating_mul(c as Weight))
			.saturating_add(T::DbWeight::get().reads((2 as Weight).saturating_mul(c as Weight)))
			.saturating_add(T::DbWeight::get().writes((1 as Weight).saturating_mul(r as Weight)))
			.saturating_add(T::DbWeight::get().writes((1 as Weight).saturating_mul(c as Weight)))
	}
}
