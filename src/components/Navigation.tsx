import Link from "next/link"

export function Navigation() {
  const primaryLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ]

  const secondaryLinks = [
    { href: "/for-anyone", label: "For anyone" },
    { href: "/recruiters", label: "Recruiters" },
    { href: "/design-directors", label: "Design Directors" },
    { href: "/product-designers", label: "Product Designers" },
    { href: "/product-managers", label: "Product Managers" },
    { href: "/engineers", label: "Engineers" },
  ]

  return (
    <nav className="fixed inset-x-0 top-0 z-10 flex justify-between bg-background/80 p-8 backdrop-blur-sm">
      <div className="flex flex-col items-start space-y-4">
        <Link href="/" className="text-xl font-medium">
          A
        </Link>
        <ul className="mt-8 space-y-1 text-sm">
          {primaryLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-zinc-500 transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* <ul className="flex gap-8">
        {secondaryLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-zinc-500 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul> */}
    </nav>
  )
}

