import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-300">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-10 py-6">

        {/* Logo */}
        <Image
          src="/icons/twik_logo.svg"
          alt="Twik Logo"
          width={90}
          height={28}
          priority
        />

        {/* Links */}
        <ul className="flex items-center gap-20 text-black text-[18px]">
          
          {/* Active link */}
          <li className="flex flex-col items-center">
            <Link href="/explore">Explore</Link>
            <span className="mt-2 h-[0.74px] w-full bg-black"></span>
          </li>

          <li>
            <Link href="/timeline">Timeline</Link>
          </li>

          <li>
            <Link href="/upgrades">Upgrades</Link>
          </li>

          <li>
            <Link href="/profile">You</Link>
          </li>

        </ul>
      </div>
    </nav>
  )
}
