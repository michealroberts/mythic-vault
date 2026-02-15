/******************************************************************************/

// @author         Michael J Roberts
// @license        Copyright © 2021-2025 MTG Mythic Rare

/******************************************************************************/

// Define a constant object for ID prefixes to ensure consistency across the
// codebase.
export const ID_PREFIXES = {
  set: "set",
  oracle: "oracle",
  card: "card",
  face: "face",
  ruling: "ruling",
  price: "price",
} as const;

/******************************************************************************/

// Type for valid ID prefixes, derived from the keys of `ID_PREFIXES`.
export type IdPrefix = (typeof ID_PREFIXES)[keyof typeof ID_PREFIXES];

/******************************************************************************/

declare const __brand: unique symbol;

/******************************************************************************/

type BrandedId<T extends string> = string & {
  readonly [__brand]: T;
};

/******************************************************************************/

// Define branded ID types for each entity type.
export type SetId = BrandedId<"SetId">;
export type OracleId = BrandedId<"OracleId">;
export type CardId = BrandedId<"CardId">;
export type FaceId = BrandedId<"FaceId">;
export type RulingId = BrandedId<"RulingId">;
export type PriceId = BrandedId<"PriceId">;

/******************************************************************************/
