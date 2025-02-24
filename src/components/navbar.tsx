"use client";
import FundlyLogo from "@/assets/logo";
import { NavItems } from "@/components/nav-items";
import { useScreenDetector } from "@/hooks/useScreenDetector";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isMobile } = useScreenDetector();
  return (
    <nav className="z-50 fixed top-0 flex flex-col items-center w-full border-b-[16px] border-b-nav-blue bg-white p-5 px-2.5 md:px-0">
      <div className="w-full max-w-[1140px] flex justify-between items-center">
        <Link href="/">
          <FundlyLogo />
        </Link>
        {isMobile ? (
          <button
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
            className="border-2 border-black/10 rounded p-3 py-1 flex items-center justify-center"
          >
            <Image
              src="/svg/hamburger-menu.svg"
              width={30}
              height={30}
              alt=""
            />
          </button>
        ) : (
          <NavItems />
        )}
      </div>
      {isMobile && isMenuOpen ? (
        <div className="flex w-full">
          <NavItems variant="mobile" />
        </div>
      ) : null}
    </nav>
  );
};
