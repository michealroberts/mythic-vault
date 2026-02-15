/******************************************************************************/

// @author         Michael J Roberts
// @license        Copyright © 2021-2025 MTG Mythic Rare

/******************************************************************************/

import { ulid } from "ulidx";

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

/**
 * Generate a new prefixed ULID.
 *
 * @param prefix - The entity type prefix from `ID_PREFIXES`.
 * @returns A string of the form `{prefix}_{ulid}`.
 *
 * @example
 * ```ts
 * const id = createId('card'); // "card_01JWTK8N9QZGX4F7V3HYP2MR6E"
 * ```
 */
export function createId<P extends IdPrefix>(prefix: P): `${P}_${string}` {
  return `${prefix}_${ulid()}`;
}

/******************************************************************************/
