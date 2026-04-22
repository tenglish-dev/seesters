import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { href: "#menu", label: "Menu" },
  { href: "#hours", label: "Hours" },
  { href: "#visit", label: "Visit" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <nav className="container mx-auto flex items-center justify-between py-3">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="Seester's Plus One Breakfast Shop logo" className="h-12 w-12 rounded-full object-contain bg-white" width={48} height={48} />
          <span className="font-display font-bold text-lg leading-tight hidden sm:block">
            Seester's <span className="text-primary">+ One</span>
          </span>
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-medium hover:text-primary transition-colors">{l.label}</a>
            </li>
          ))}
        </ul>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <ul className="container mx-auto py-4 flex flex-col gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block py-2 font-medium">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};