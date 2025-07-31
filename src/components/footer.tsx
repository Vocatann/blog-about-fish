import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-4 border-border h-30 flex flex-col justify-center space-y-5">
      <ul className="flex space-x-2 justify-center">
        <li><Link href="/about" className="text-accent-secondary hover:underline">About page</Link></li>
        <li><a href="https://github.com/Vocatann" target="_blank" className="text-accent-secondary hover:underline">Github</a></li>
        <li><a href="https://x.com/home" target="_blank" className="text-accent-secondary hover:underline">Twitter</a></li>
      </ul>
      <span className="text-center">All content on this blog is ai generated</span>
    </footer>
  )
}