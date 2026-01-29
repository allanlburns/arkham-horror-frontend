import React from "react";
import type { ArchiveCardState } from "../../types/cards";
import { ArchiveCardTile } from "./ArchiveCardTile";

type Props = {
  cards: ArchiveCardState[];
  onCardClick?: (id: number) => void;
};

export function ArchiveCardGallery({ cards, onCardClick }: Props) {
  return (
    <section style={styles.wrapper} aria-label="Codex">
      <header style={styles.header}>
        <h2 style={styles.title}>Codex</h2>
        <div style={styles.count}>
          {cards.length} card{cards.length === 1 ? "" : "s"}
        </div>
      </header>

      <div style={styles.grid}>
        {cards.map((c) => (
          <ArchiveCardTile key={c.id} card={c} onClick={onCardClick} />
        ))}
      </div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    width: "min(1100px, 92vw)",
    maxHeight: "min(70vh, 720px)",
    margin: "24px auto",
    padding: 16,
    borderRadius: 16,
    border: "1px solid rgba(0,0,0,0.12)",
    background: "rgba(255,255,255,0.9)",
    overflow: "auto",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: 12,
    gap: 12,
  },
  title: { margin: 0, fontSize: 18 },
  count: { fontSize: 12, opacity: 0.7 },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
    gap: 12,
  },
};
