import { Button } from "@/components/ui/button";
import { siteData } from "@/lib/site.config";
import { Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <nav className="px-4 w-full flex justify-center mb-5">
      <div className="justify-between items-center h-20 w-full container hidden lg:flex">
        <Link href="/" className="inline-flex gap-1 text-sm items-center">
          <Button
            size="sm"
            // className="rounded-3xl bg-black text-white"
            variant="outline"
          >
            <Home strokeWidth={2} width={20} height={20} />
            Home
          </Button>
        </Link>
        <div>
          <Image width={105} height={36} src={siteData.logo} alt="" />
        </div>
        <div>
          <Link href="/" className="inline-flex gap-1 text-sm items-center">
            <Button
              size="sm"
              // className="rounded-3xl bg-black text-white"
              variant="outline"
            >
              Log In to Your Fundraiser
            </Button>
          </Link>
        </div>
      </div>

      <div className="lg:hidden w-full flex flex-col items-center gap-2">
        <div className="w-full flex justify-center py-3">
          <Image width={105} height={36} src={siteData.logo} alt="" />
        </div>
        <div className="flex justify-between items-center gap-6 w-full container h-full">
          <Link href="/" className="inline-flex gap-1 text-sm items-center">
            <Button
              size="sm"
              className="border-none shadow-none"
              variant="outline"
            >
              <Home strokeWidth={2} width={20} height={20} />
              Home
            </Button>
          </Link>
          <div>
            <Link href="/" className="inline-flex gap-1 text-sm items-center">
              <Button
                size="sm"
                className="border-none shadow-none"
                variant="outline"
              >
                Log In
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
