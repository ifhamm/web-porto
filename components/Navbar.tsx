"use client";

import { NavItem } from "@/lib/types";

type NavbarProps = {
  items: NavItem[];
};

export function Navbar({ items }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 border-b-4 border-black bg-[#f4ff2a]">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-3 md:px-6"
      >
        <a
          href="#hero"
          className="-rotate-2 border-4 border-black bg-white px-3 py-1 text-sm font-black uppercase tracking-[0.2em] shadow-[5px_5px_0_#101010] transition hover:rotate-0"
        >
          IFHAMM.EXE
        </a>
        <ul className="flex flex-wrap items-center gap-2">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="inline-block border-[3px] border-black bg-[#101010] px-3 py-1 text-xs font-black uppercase tracking-[0.15em] text-white shadow-[4px_4px_0_#101010] transition hover:-translate-y-0.5 hover:bg-[#ff2f00]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
