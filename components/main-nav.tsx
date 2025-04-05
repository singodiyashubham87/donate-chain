'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { ThemeToggle } from './theme-toggle';

export function MainNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">DonateChain</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/ngos"
              className={cn(
                'transition-colors hover:text-foreground/80',
                pathname === '/ngos' ? 'text-foreground' : 'text-foreground/60'
              )}
            >
              NGOs
            </Link>
            <Link
              href="/about"
              className={cn(
                'transition-colors hover:text-foreground/80',
                pathname === '/about' ? 'text-foreground' : 'text-foreground/60'
              )}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={cn(
                'transition-colors hover:text-foreground/80',
                pathname === '/contact' ? 'text-foreground' : 'text-foreground/60'
              )}
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <ThemeToggle />
          <Button asChild>
            <Link href="/ngos">Start Donating</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}