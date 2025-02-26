"use client";
import Link from "next/link";
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const navItemsVariants = cva(
  "flex gap-2 font-semibold text-lg text-secondary-text",
  {
    variants: {
      variant: {
        default: "flex-row items-center",
        mobile: "flex-col w-full items-stretch",
      },
    },
  }
);

export const NavItems = ({
  variant = "default",
  hideCampaigns,
}: VariantProps<typeof navItemsVariants> & { hideCampaigns?: boolean }) => {
  return (
    <ul className={navItemsVariants({ variant })}>
      <li>
        <Link
          className="rounded-3xl p-4 py-2 hover:bg-[#e7eaed] transition-colors duration-300 ease-in w-full block"
          href="/"
        >
          Home
        </Link>
      </li>
      {hideCampaigns ? null : (
        <li>
          <Link
            className="rounded-3xl p-4 py-2 hover:bg-[#e7eaed] transition-colors duration-300 ease-in w-full block"
            href="#campaigns"
          >
            Campaigns
          </Link>
        </li>
      )}

      <li>
        <Link target="_blank" href="/login">
          <button className="rounded-3xl p-4 py-1 bg-fundly-green border-2 border-fundly-green hover:bg-transparent transition-colors duration-300 ease-in w-full flex">
            Log In
          </button>
        </Link>
      </li>
    </ul>
  );
};
