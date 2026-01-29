import React from "react";
import type { ArchiveCardState } from "../../types/cards";
import { getArchiveImageUrl } from "../../utils/imageUrls";

type Props = {
  card: ArchiveCardState;
  onClick?: (id: number) => void;
};

export function ArchiveCardTile({ card, onClick }: Props) {
  const src = getArchiveImageUrl(card);

  return (
    <button
      type="button"
      onClick={() => onClick?.(card.id)}
      style={styles.button}
      aria-label={`Archive card ${card.id}`}
      title={`Archive ${card.id}`}
    >
      <img src={src} alt={`Archive card ${card.id}`} style={styles.img} />
    </button>
  );
}

const styles: Record<string, React.CSSProperties> = {
  button: {
    padding: 0,
    border: "1px solid rgba(0,0,0,0.15)",
    borderRadius: 12,
    background: "transparent",
    cursor: "pointer",
    overflow: "hidden",
    boxShadow: "0 1px 6px rgba(0,0,0,0.10)",
  },
  img: {
    width: "100%",
    height: "auto",
    display: "block",
    aspectRatio: "2.5 / 3.5",
    objectFit: "cover",
  },
};
