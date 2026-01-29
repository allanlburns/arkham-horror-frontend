import type { ArchiveCardState } from "../types/cards";

/**
 * Pads numbers like 1 -> "001", 10 -> "010"
 */
export function pad3(n: number): string {
  return String(n).padStart(3, "0");
}

/**
 * Your current naming rules:
 * - Single-sided archive: archive_001.jpg
 * - Double-sided archive: archive_010A.jpg / archive_010B.jpg
 */
export function getArchiveImageUrl(card: ArchiveCardState): string {
  const num = pad3(card.id);

  if (!card.hasBack) {
    return `/images/archive/archive_${num}.jpg`;
  }

  return `/images/archive/archive_${num}${card.faceUp}.jpg`;
}