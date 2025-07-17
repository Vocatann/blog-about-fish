'use client'

import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b-4 border-border h-30 flex items-center px-10">
      <nav>
        <ul className="flex gap-x-10">
          <li>
            <Link href="/" className="text-lg text-accent hover:opacity-75">Home</Link>
          </li>
          <li>
            <Link href="/about" className="text-lg text-accent hover:opacity-75">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}