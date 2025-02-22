module.exports = class Data1669722557314 {
  name = 'Data1669722557314'

  async up(db) {
    await db.query(`CREATE TABLE "account" ("id" character varying NOT NULL, "event_id" text NOT NULL, CONSTRAINT "PK_54115ee388cdb6d86bb4bf5b2ea" PRIMARY KEY ("id"))`)
    await db.query(`CREATE TABLE "pablo_pool_asset" ("id" character varying NOT NULL, "asset_id" text NOT NULL, "total_liquidity" numeric NOT NULL, "total_volume" numeric NOT NULL, "block_number" numeric NOT NULL, "calculated_timestamp" numeric NOT NULL, "pool_id" character varying, CONSTRAINT "PK_fc75f8a8a8a0ac8408eef787237" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_7fd4cdb45620476d1de745a265" ON "pablo_pool_asset" ("pool_id") `)
    await db.query(`CREATE INDEX "IDX_a301dd5382a96bccef136a0c14" ON "pablo_pool_asset" ("block_number") `)
    await db.query(`CREATE TABLE "activity" ("id" character varying NOT NULL, "account_id" text NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "event_id" character varying, CONSTRAINT "PK_24625a1d6b1b089c8ae206fe467" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_c2c1e9fdda754a6bf7f664d7e0" ON "activity" ("event_id") `)
    await db.query(`CREATE INDEX "IDX_96c7c848eec1feba0bc66b4519" ON "activity" ("account_id") `)
    await db.query(`CREATE INDEX "IDX_1ed07d94b85322141135c8de3e" ON "activity" ("timestamp") `)
    await db.query(`CREATE TABLE "event" ("id" character varying NOT NULL, "account_id" text, "event_type" character varying(43) NOT NULL, "block_number" numeric NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "PK_30c2f3bbaf6d34a55f8ae6e4614" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_77b76886d64fa0304db94dd4d9" ON "event" ("account_id") `)
    await db.query(`CREATE INDEX "IDX_a8a7fbbbb0d8305cd81eda6ac8" ON "event" ("block_number") `)
    await db.query(`CREATE INDEX "IDX_2c15918ff289396205521c5f3c" ON "event" ("timestamp") `)
    await db.query(`CREATE TABLE "pablo_transaction" ("id" character varying NOT NULL, "base_asset_id" text NOT NULL, "base_asset_amount" numeric NOT NULL, "quote_asset_id" text NOT NULL, "quote_asset_amount" numeric NOT NULL, "spot_price" text NOT NULL, "fee" text NOT NULL, "event_id" character varying NOT NULL, "pool_id" character varying, CONSTRAINT "REL_0118a010cf1571fc5cb70b90a7" UNIQUE ("event_id"), CONSTRAINT "PK_8b040ecc6da14a71ef547ae2ae6" PRIMARY KEY ("id"))`)
    await db.query(`CREATE UNIQUE INDEX "IDX_0118a010cf1571fc5cb70b90a7" ON "pablo_transaction" ("event_id") `)
    await db.query(`CREATE INDEX "IDX_969a927080f5b6c81b79b40cd8" ON "pablo_transaction" ("pool_id") `)
    await db.query(`CREATE TABLE "pablo_pool" ("id" character varying NOT NULL, "event_id" text NOT NULL, "pool_id" numeric NOT NULL, "owner" text NOT NULL, "lp_issued" numeric NOT NULL, "transaction_count" integer NOT NULL, "total_liquidity" text NOT NULL, "total_volume" text NOT NULL, "total_fees" text NOT NULL, "base_asset_id" text NOT NULL, "quote_asset_id" text NOT NULL, "block_number" numeric NOT NULL, "calculated_timestamp" numeric NOT NULL, CONSTRAINT "PK_28d674c3fdadf69d19745e5343a" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_4d2423a367d09f67e16c06a746" ON "pablo_pool" ("block_number") `)
    await db.query(`CREATE TABLE "bonded_finance_bond_offer" ("id" character varying NOT NULL, "event_id" text NOT NULL, "offer_id" text NOT NULL, "total_purchased" numeric NOT NULL, "beneficiary" text NOT NULL, "cancelled" boolean NOT NULL, CONSTRAINT "PK_1a7a97e3d57a4ac842dc2ef48ba" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_932377f288f9b8ae200c9ed313" ON "bonded_finance_bond_offer" ("event_id") `)
    await db.query(`CREATE INDEX "IDX_733dd0609e90b935c61877da93" ON "bonded_finance_bond_offer" ("offer_id") `)
    await db.query(`CREATE TABLE "vesting_schedule" ("id" character varying NOT NULL, "from" text NOT NULL, "event_id" text NOT NULL, "schedule_id" numeric NOT NULL, "to" text NOT NULL, "asset_id" text NOT NULL, "schedule" jsonb NOT NULL, "total_amount" numeric NOT NULL, "fully_claimed" boolean NOT NULL, CONSTRAINT "PK_4818b05532ed9058110ed5b5b13" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_1f8cb2fc5b3d42fcd5bacfe8bc" ON "vesting_schedule" ("from") `)
    await db.query(`CREATE INDEX "IDX_2470998bd5d66304c8ff329e84" ON "vesting_schedule" ("event_id") `)
    await db.query(`CREATE INDEX "IDX_020d628167fb6a0158d25abf5e" ON "vesting_schedule" ("schedule_id") `)
    await db.query(`CREATE TABLE "historical_asset_price" ("id" character varying NOT NULL, "event_id" text NOT NULL, "price" numeric NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "currency" character varying(3) NOT NULL, "asset_id" character varying, CONSTRAINT "PK_01a6bc75d8046fb5aa80df3b9fe" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_754559c3337480cf2b30d157b2" ON "historical_asset_price" ("event_id") `)
    await db.query(`CREATE INDEX "IDX_e5b6c7a8a991d63c9670391daa" ON "historical_asset_price" ("asset_id") `)
    await db.query(`CREATE INDEX "IDX_25fff2ead369948d7e8aa4ab23" ON "historical_asset_price" ("timestamp") `)
    await db.query(`CREATE TABLE "asset" ("id" character varying NOT NULL, "event_id" text NOT NULL, "price" numeric NOT NULL, "decimals" integer, CONSTRAINT "PK_1209d107fe21482beaea51b745e" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_3d0534c2bb8faaf00628625ad2" ON "asset" ("event_id") `)
    await db.query(`CREATE TABLE "reward_pool" ("id" character varying NOT NULL, "event_id" text NOT NULL, "pool_id" text NOT NULL, CONSTRAINT "PK_c88dfa6b514dcbadb05c6956afb" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_863db0d97cf58a3f045eddaca4" ON "reward_pool" ("event_id") `)
    await db.query(`CREATE INDEX "IDX_a2320054a632a80a4c6be32a3d" ON "reward_pool" ("pool_id") `)
    await db.query(`CREATE TABLE "staking_position" ("id" character varying NOT NULL, "fnft_collection_id" text NOT NULL, "fnft_instance_id" text NOT NULL, "owner" text NOT NULL, "asset_id" text NOT NULL, "amount" numeric NOT NULL, "start_timestamp" numeric NOT NULL, "duration" numeric NOT NULL, "end_timestamp" numeric, "reward_multiplier" numeric NOT NULL, "source" character varying(16) NOT NULL, "event_id" character varying NOT NULL, CONSTRAINT "REL_3e2e1b465d89dbb2736e70fe5f" UNIQUE ("event_id"), CONSTRAINT "PK_899113a8f0b5ec707171ff4db6b" PRIMARY KEY ("id"))`)
    await db.query(`CREATE UNIQUE INDEX "IDX_3e2e1b465d89dbb2736e70fe5f" ON "staking_position" ("event_id") `)
    await db.query(`CREATE INDEX "IDX_71ba8ca256d4cc74b9440bf2ac" ON "staking_position" ("fnft_instance_id") `)
    await db.query(`CREATE INDEX "IDX_e94373a6b771b4edcaca7950bc" ON "staking_position" ("owner") `)
    await db.query(`CREATE UNIQUE INDEX "IDX_69e08176f6778a2a276720109d" ON "staking_position" ("fnft_collection_id", "fnft_instance_id") `)
    await db.query(`CREATE TABLE "historical_locked_value" ("id" character varying NOT NULL, "amount" numeric NOT NULL, "currency" character varying(3) NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "source" character varying(16) NOT NULL, "event_id" character varying, CONSTRAINT "PK_39755ccbc61547e8b814bf28188" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_e16f52796ccae0d99cb8d6e404" ON "historical_locked_value" ("event_id") `)
    await db.query(`CREATE INDEX "IDX_57be1b98925b8ed2c98e4c6124" ON "historical_locked_value" ("timestamp") `)
    await db.query(`CREATE TABLE "historical_volume" ("id" character varying NOT NULL, "amount" numeric NOT NULL, "currency" character varying(3) NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "asset_id" text NOT NULL, "event_id" character varying, CONSTRAINT "PK_7f5775a1b43be10057e93cad992" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_eceb392fe7bbe48cb21e1d8b5a" ON "historical_volume" ("event_id") `)
    await db.query(`CREATE INDEX "IDX_e6fa17aa4250e438cb6286e8ce" ON "historical_volume" ("timestamp") `)
    await db.query(`CREATE TABLE "current_locked_value" ("id" character varying NOT NULL, "asset_id" text NOT NULL, "amount" numeric NOT NULL, "source" character varying(16) NOT NULL, "event_id" character varying, CONSTRAINT "PK_42f4240de672201fc4df1cf3d7b" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_0c07e602cb4227de7ec82ff33a" ON "current_locked_value" ("event_id") `)
    await db.query(`CREATE UNIQUE INDEX "IDX_db4dedc6da2eb4a95fafe42ce0" ON "current_locked_value" ("asset_id", "source") `)
    await db.query(`ALTER TABLE "pablo_pool_asset" ADD CONSTRAINT "FK_7fd4cdb45620476d1de745a2658" FOREIGN KEY ("pool_id") REFERENCES "pablo_pool"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "activity" ADD CONSTRAINT "FK_c2c1e9fdda754a6bf7f664d7e04" FOREIGN KEY ("event_id") REFERENCES "event"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "pablo_transaction" ADD CONSTRAINT "FK_0118a010cf1571fc5cb70b90a73" FOREIGN KEY ("event_id") REFERENCES "event"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "pablo_transaction" ADD CONSTRAINT "FK_969a927080f5b6c81b79b40cd86" FOREIGN KEY ("pool_id") REFERENCES "pablo_pool"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "historical_asset_price" ADD CONSTRAINT "FK_e5b6c7a8a991d63c9670391daaf" FOREIGN KEY ("asset_id") REFERENCES "asset"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "staking_position" ADD CONSTRAINT "FK_3e2e1b465d89dbb2736e70fe5f1" FOREIGN KEY ("event_id") REFERENCES "event"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "historical_locked_value" ADD CONSTRAINT "FK_e16f52796ccae0d99cb8d6e4040" FOREIGN KEY ("event_id") REFERENCES "event"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "historical_volume" ADD CONSTRAINT "FK_eceb392fe7bbe48cb21e1d8b5a5" FOREIGN KEY ("event_id") REFERENCES "event"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "current_locked_value" ADD CONSTRAINT "FK_0c07e602cb4227de7ec82ff33a7" FOREIGN KEY ("event_id") REFERENCES "event"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
  }

  async down(db) {
    await db.query(`DROP TABLE "account"`)
    await db.query(`DROP TABLE "pablo_pool_asset"`)
    await db.query(`DROP INDEX "public"."IDX_7fd4cdb45620476d1de745a265"`)
    await db.query(`DROP INDEX "public"."IDX_a301dd5382a96bccef136a0c14"`)
    await db.query(`DROP TABLE "activity"`)
    await db.query(`DROP INDEX "public"."IDX_c2c1e9fdda754a6bf7f664d7e0"`)
    await db.query(`DROP INDEX "public"."IDX_96c7c848eec1feba0bc66b4519"`)
    await db.query(`DROP INDEX "public"."IDX_1ed07d94b85322141135c8de3e"`)
    await db.query(`DROP TABLE "event"`)
    await db.query(`DROP INDEX "public"."IDX_77b76886d64fa0304db94dd4d9"`)
    await db.query(`DROP INDEX "public"."IDX_a8a7fbbbb0d8305cd81eda6ac8"`)
    await db.query(`DROP INDEX "public"."IDX_2c15918ff289396205521c5f3c"`)
    await db.query(`DROP TABLE "pablo_transaction"`)
    await db.query(`DROP INDEX "public"."IDX_0118a010cf1571fc5cb70b90a7"`)
    await db.query(`DROP INDEX "public"."IDX_969a927080f5b6c81b79b40cd8"`)
    await db.query(`DROP TABLE "pablo_pool"`)
    await db.query(`DROP INDEX "public"."IDX_4d2423a367d09f67e16c06a746"`)
    await db.query(`DROP TABLE "bonded_finance_bond_offer"`)
    await db.query(`DROP INDEX "public"."IDX_932377f288f9b8ae200c9ed313"`)
    await db.query(`DROP INDEX "public"."IDX_733dd0609e90b935c61877da93"`)
    await db.query(`DROP TABLE "vesting_schedule"`)
    await db.query(`DROP INDEX "public"."IDX_1f8cb2fc5b3d42fcd5bacfe8bc"`)
    await db.query(`DROP INDEX "public"."IDX_2470998bd5d66304c8ff329e84"`)
    await db.query(`DROP INDEX "public"."IDX_020d628167fb6a0158d25abf5e"`)
    await db.query(`DROP TABLE "historical_asset_price"`)
    await db.query(`DROP INDEX "public"."IDX_754559c3337480cf2b30d157b2"`)
    await db.query(`DROP INDEX "public"."IDX_e5b6c7a8a991d63c9670391daa"`)
    await db.query(`DROP INDEX "public"."IDX_25fff2ead369948d7e8aa4ab23"`)
    await db.query(`DROP TABLE "asset"`)
    await db.query(`DROP INDEX "public"."IDX_3d0534c2bb8faaf00628625ad2"`)
    await db.query(`DROP TABLE "reward_pool"`)
    await db.query(`DROP INDEX "public"."IDX_863db0d97cf58a3f045eddaca4"`)
    await db.query(`DROP INDEX "public"."IDX_a2320054a632a80a4c6be32a3d"`)
    await db.query(`DROP TABLE "staking_position"`)
    await db.query(`DROP INDEX "public"."IDX_3e2e1b465d89dbb2736e70fe5f"`)
    await db.query(`DROP INDEX "public"."IDX_71ba8ca256d4cc74b9440bf2ac"`)
    await db.query(`DROP INDEX "public"."IDX_e94373a6b771b4edcaca7950bc"`)
    await db.query(`DROP INDEX "public"."IDX_69e08176f6778a2a276720109d"`)
    await db.query(`DROP TABLE "historical_locked_value"`)
    await db.query(`DROP INDEX "public"."IDX_e16f52796ccae0d99cb8d6e404"`)
    await db.query(`DROP INDEX "public"."IDX_57be1b98925b8ed2c98e4c6124"`)
    await db.query(`DROP TABLE "historical_volume"`)
    await db.query(`DROP INDEX "public"."IDX_eceb392fe7bbe48cb21e1d8b5a"`)
    await db.query(`DROP INDEX "public"."IDX_e6fa17aa4250e438cb6286e8ce"`)
    await db.query(`DROP TABLE "current_locked_value"`)
    await db.query(`DROP INDEX "public"."IDX_0c07e602cb4227de7ec82ff33a"`)
    await db.query(`DROP INDEX "public"."IDX_db4dedc6da2eb4a95fafe42ce0"`)
    await db.query(`ALTER TABLE "pablo_pool_asset" DROP CONSTRAINT "FK_7fd4cdb45620476d1de745a2658"`)
    await db.query(`ALTER TABLE "activity" DROP CONSTRAINT "FK_c2c1e9fdda754a6bf7f664d7e04"`)
    await db.query(`ALTER TABLE "pablo_transaction" DROP CONSTRAINT "FK_0118a010cf1571fc5cb70b90a73"`)
    await db.query(`ALTER TABLE "pablo_transaction" DROP CONSTRAINT "FK_969a927080f5b6c81b79b40cd86"`)
    await db.query(`ALTER TABLE "historical_asset_price" DROP CONSTRAINT "FK_e5b6c7a8a991d63c9670391daaf"`)
    await db.query(`ALTER TABLE "staking_position" DROP CONSTRAINT "FK_3e2e1b465d89dbb2736e70fe5f1"`)
    await db.query(`ALTER TABLE "historical_locked_value" DROP CONSTRAINT "FK_e16f52796ccae0d99cb8d6e4040"`)
    await db.query(`ALTER TABLE "historical_volume" DROP CONSTRAINT "FK_eceb392fe7bbe48cb21e1d8b5a5"`)
    await db.query(`ALTER TABLE "current_locked_value" DROP CONSTRAINT "FK_0c07e602cb4227de7ec82ff33a7"`)
  }
}
