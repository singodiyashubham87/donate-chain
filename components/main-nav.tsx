"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import { Loader } from "lucide-react";
import Image from "next/image";
import IntegrateWallet from "./integrate-wallet";

export function MainNav() {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } =
    useAuth0();
  const pathname = usePathname();

  if (isLoading) return <Loader />;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-around">
        <div className="flex">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Logo" width={100} height={10} />
          </Link>
          <nav className="ml-8 flex items-center gap-4 text-sm font-medium">
            <Link
              href="/ngos"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/ngos" ? "text-foreground" : "text-foreground/60"
              )}
            >
              NGOs
            </Link>
            <Link
              href="/about-us"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/about-us"
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              About
            </Link>
            <Link
              href="/contact-us"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/contact-us"
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex gap-6 items-center">
          {!isAuthenticated ? (
            <Button onClick={() => loginWithRedirect()}>Login</Button>
          ) : (
            <React.Fragment>
              <Image
                src={user?.picture || "/default-avatar.png"}
                alt={user?.name || "User Avatar"}
                width={32}
                height={32}
                className="h-8 w-8 rounded-full"
              />
              <Button
                variant="outline"
                onClick={() =>
                  logout({
                    logoutParams: {
                      returnTo: window.location.origin,
                    },
                  })
                }
              >
                Logout
              </Button>
            </React.Fragment>
          )}
          <IntegrateWallet />
        </div>
      </div>
    </header>
  );
}
