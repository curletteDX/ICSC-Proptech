import Link from "next/link"
import { useRouter } from "next/router"

const navLinks = [
  { href: "/", label: "ATTENDEES" },
  { href: "/exhibit-sponsor", label: "EXHIBIT & SPONSOR" },
]

export function SiteNav() {
  const router = useRouter()
  const pathname = router.pathname

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-[#3030a0] text-xl font-bold">ICSC</span>
            <span className="text-[#6b9dff] text-xl font-bold">+PROPTECH</span>
          </Link>

          {/* Nav Links */}
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-bold tracking-wider transition-colors
                  ${pathname === link.href 
                    ? "text-[#4f5bd5] border-b-2 border-[#4f5bd5] pb-1" 
                    : "text-[#6b7280] hover:text-[#4f5bd5]"
                  }
                `}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="#"
            className="bg-[#7ed4c8] text-[#1a1a2e] px-6 py-2 text-sm font-bold tracking-wider hover:bg-[#6bc4b8] transition-colors"
          >
            REGISTER NOW
          </Link>
        </div>
      </div>
    </nav>
  )
}
