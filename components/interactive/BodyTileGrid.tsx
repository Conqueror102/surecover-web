"use client"

const tiles = [
  { emoji: "🫀", label: "Heart" },
  { emoji: "🫁", label: "Chest" },
  { emoji: "🧠", label: "Head" },
  { emoji: "🩸", label: "Diabetes" },
  { emoji: "🦴", label: "Bones" },
  { emoji: "🧴", label: "Skin" },
  { emoji: "👁️", label: "Eyes" },
  { emoji: "👂", label: "Ears" },
  { emoji: "🦷", label: "Dental" },
  { emoji: "🤰", label: "Pregnancy" },
  { emoji: "🧘", label: "Mental Health" },
  { emoji: "⚕️", label: "General" },
]

type Props = {
  selected: Set<string>
  onToggle: (label: string) => void
  showAll?: boolean
  onShowAll?: () => void
}

export default function BodyTileGrid({ selected, onToggle, showAll = false, onShowAll }: Props) {
  const visibleTiles = showAll ? tiles : tiles.slice(0, 9)

  return (
    <>
      <div className="grid min-h-[180px] grid-cols-3 gap-2.5 sm:grid-cols-4 lg:grid-cols-6">
        {visibleTiles.map((tile) => {
          const active = selected.has(tile.label)

          return (
            <button
              type="button"
              key={tile.label}
              className={`flex min-h-20 select-none flex-col items-center justify-center rounded-[16px] border-[1.5px] bg-white px-1.5 py-3 text-center transition hover:-translate-y-0.5 hover:border-[rgb(var(--teal))] hover:bg-[rgba(13,155,136,0.04)] ${
                active
                  ? "border-[rgb(var(--teal))] bg-[rgba(13,155,136,0.08)] shadow-[0_0_0_3px_rgba(13,155,136,0.15)]"
                  : "border-[rgba(10,20,40,0.12)]"
              }`}
              onClick={() => onToggle(tile.label)}
            >
              <span className="mb-1.5 text-[1.6rem] leading-none">{tile.emoji}</span>
              <span className={`text-[0.68rem] font-bold leading-tight ${active ? "text-[rgb(var(--teal-hi))]" : "text-[rgb(var(--dark))]"}`}>
                {tile.label}
              </span>
            </button>
          )
        })}
      </div>
      {!showAll && onShowAll && (
        <div className="mt-2.5 text-right">
          <button type="button" onClick={onShowAll} className="text-[0.7rem] font-semibold text-[rgb(var(--teal-hi))]">
            Show more areas →
          </button>
        </div>
      )}
    </>
  )
}
