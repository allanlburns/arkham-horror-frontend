import React, { useState } from "react";
import type { ArchiveCardState } from "../types/cards";
import { ArchiveCardGallery } from "../components/archive/ArchiveCardGallery";

export function CodexPage() {
  const [cards, setCards] = useState<ArchiveCardState[]>([
    { id: 1, hasBack: false, faceUp: "A" }, // archive_001.jpg
    { id: 10, hasBack: true, faceUp: "A" }, // archive_010A.jpg initially
  ]);

  function handleCardClick(id: number) {
    // Prototype behavior: flip if it has a back
    setCards((prev) =>
      prev.map((c) => {
        if (c.id !== id || !c.hasBack) return c;
        return { ...c, faceUp: c.faceUp === "A" ? "B" : "A" };
      })
    );
  }

  return <ArchiveCardGallery cards={cards} onCardClick={handleCardClick} />;
}
