"use client"
import Link from "next/link"
import Image from "next/image"
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import { useScroll } from "@/hooks/use-scroll"
import { cn } from "@/lib/utils"
import { UserControl } from "./use-control"

export const Navbar = () => {
  const isScrolled = useScroll();

  return (
    <nav
    className={cn(
      "p-4 fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b backdrop-blur-md",
      isScrolled 
        ? "bg-background/70 border-border"   // semi-transparent background
        : "bg-transparent border-transparent"
    )}
  >
  
      <div className="max-w-5xl mx-auto w-full flex justify-between items-center">
        {/* Logo */}
        <Link href={"/"} className="flex items-center gap-2">
          <Image src={"/logo.svg"} alt="logo" width={24} height={24} />
          <span className="font-semibold text-lg">GradeFlow</span>
        </Link>

        {/* Auth Controls */}
        <SignedOut>
          <div className="flex gap-2">
            <Link href="#admissions">
              <Button size="lg" variant="ghost">Admissions</Button>
            </Link>
            <Link href="#courses">
              <Button size="lg" variant="ghost">Courses</Button>
            </Link>
            <Link href="#contact">
              <Button size="lg" variant="ghost">Contact</Button>
            </Link>
            {/* Sign In */}
            <SignInButton>
              <Button size="lg">Sign in</Button>
            </SignInButton>

            {/* Sign Up */}
            <SignUpButton>
              <Button size="lg" variant="outline">Sign up</Button>
            </SignUpButton>
          </div>
        </SignedOut>
        <SignedIn>
          <UserControl showName />
        </SignedIn>
      </div>
    </nav>
  )
}
