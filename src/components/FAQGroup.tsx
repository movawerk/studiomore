"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";

export type FaqEntry = {
  id: string;
  question: string;
  answer: string[]; // lines starting with "- " are rendered as list items
};

/** Accessible accordion: semantic buttons with aria-expanded / aria-controls. */
export function FAQGroup({ title, items }: { title: string; items: FaqEntry[] }) {
  const [open, setOpen] = useState<string | null>(null);
  const baseId = useId();

  return (
    <section aria-labelledby={`${baseId}-title`}>
      <h2 id={`${baseId}-title`} className="font-display text-2xl text-ink md:text-3xl">
        {title}
      </h2>
      <div className="mt-4 border-t border-ink/15">
        {items.map((item) => {
          const expanded = open === item.id;
          const panelId = `${baseId}-${item.id}-panel`;
          const buttonId = `${baseId}-${item.id}-button`;
          return (
            <div key={item.id} className="border-b border-ink/15">
              <h3>
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={expanded}
                  aria-controls={panelId}
                  onClick={() => setOpen(expanded ? null : item.id)}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left text-base font-medium text-ink transition-colors hover:text-intervention"
                >
                  {item.question}
                  <ChevronDown
                    size={18}
                    aria-hidden="true"
                    className={`shrink-0 text-intervention transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
                  />
                </button>
              </h3>
              <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!expanded} className="pb-5 pr-8">
                {renderAnswer(item.answer)}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function renderAnswer(lines: string[]) {
  const blocks: React.ReactNode[] = [];
  let list: string[] = [];
  const flush = (key: number) => {
    if (list.length > 0) {
      blocks.push(
        <ul key={`ul-${key}`} className="list-disc space-y-1 pl-5 text-ink/80">
          {list.map((li, i) => (
            <li key={i}>{li}</li>
          ))}
        </ul>,
      );
      list = [];
    }
  };
  lines.forEach((line, i) => {
    if (line.startsWith("- ")) {
      list.push(line.slice(2));
    } else {
      flush(i);
      blocks.push(
        <p key={`p-${i}`} className="text-ink/80">
          {line}
        </p>,
      );
    }
  });
  flush(lines.length);
  return <div className="space-y-3">{blocks}</div>;
}
