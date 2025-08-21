'use client'

import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function Header() {
  const [ mounted, setMounted ] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const currentTheme = mounted ? resolvedTheme : 'light';

  const handleThemeToggle = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <header className="border-b-4 border-border flex items-center px-10 py-10 justify-between">
      <nav>
        <ul className="flex gap-x-10">
          <li>
            <Link href="/" className="text-lg text-accent hover:opacity-75">Home</Link>
          </li>
          <li>
            <Link href="/posts" className="text-lg text-accent hover:opacity-75">Articles</Link>
          </li>
          <li>
            <Link href="/about" className="text-lg text-accent hover:opacity-75">About</Link>
          </li>
        </ul>
      </nav>
      <div>
        <label
          htmlFor="theme-toggle"
          className="flex bg-text-secondary cursor-pointer relative w-10 h-5 items-center rounded-lg"
        >
          <input
            type="checkbox"
            id="theme-toggle"
            className="sr-only peer"
            checked={currentTheme === 'dark'}
            onChange={handleThemeToggle}
          />
          <span className="w-2/5 h-4/5 bg-bg rounded-full absolute left-1 peer-checked:left-5 transition-all duration-200" />
        </label>
      </div>
    </header>
  );
}