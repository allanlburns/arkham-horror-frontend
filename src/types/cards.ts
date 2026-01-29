export type ArchiveCardState = {
  /** Your internal ID, e.g. 1, 10, etc. */
  id: number;

  /** If the card has two sides (A/B) */
  hasBack: boolean;

  /** Which side is currently showing */
  faceUp: "A" | "B";
};