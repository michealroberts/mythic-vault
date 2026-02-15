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
