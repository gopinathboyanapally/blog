'use client';

import { Button } from '@repo/ui/components/button';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '/about', label: 'About' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-border/40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link className="flex items-center space-x-2" href="/">
          <span className="font-bold text-xl tracking-tight">Portfolio</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              className="font-medium text-muted-foreground text-sm transition-colors hover:text-primary"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          size="icon"
          variant="ghost"
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-border/40 border-t bg-background/95 backdrop-blur md:hidden">
          <nav className="container flex flex-col gap-4 py-4">
            {navItems.map((item) => (
              <Link
                className="font-medium text-muted-foreground text-sm transition-colors hover:text-primary"
                href={item.href}
                key={item.href}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
