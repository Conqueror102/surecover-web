"use client"

import { cn } from "@/lib/utils"

type ChipGroupProps = {
  options: string[]
  selected: Set<string>
  onToggle: (value: string) => void
}

export default function ChipGroup({ options, selected, onToggle }: ChipGroupProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => {
        const active = selected.has(option)

        return (
          <button
            type="button"
            key={option}
            onClick={() => onToggle(option)}
            className={cn(
              "rounded-full border-[1.5px] px-4 py-2 text-[0.8rem] font-medium transition",
              active
                ? "border-[rgb(var(--teal))] bg-[rgba(13,155,136,0.08)] text-[rgb(var(--teal))]"
                : "border-[rgba(10,20,40,0.06)] bg-white text-[rgba(10,20,40,0.55)] hover:border-[rgba(10,20,40,0.4)] hover:text-[rgb(var(--dark))]"
            )}
          >
            {option}
          </button>
        )
      })}
    </div>
  )
}
