import FundlyLogo from "@/assets/logo";
import {
  Facebook,
  Instagram,
  LucideMessageSquare,
  MessagesSquare,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const navLinks = [
  { text: "Fundraising Ideas", href: "" },
  { text: "Blog", href: "" },
  { text: "Pricing", href: "" },
  { text: "Terms of Use", href: "" },
  { text: "Privacy Policy", href: "" },
  { text: "FAQ", href: "" },
  { text: "About Us", href: "" },
  { text: "Sales", href: "" },
  { text: "Support", href: "" },
  { text: "Press", href: "" },
];

const socialLinks = [
  { text: "Facebook", href: "", icon: Facebook },
  { text: "Twitter", href: "", icon: Twitter },
  { text: "Instagram", href: "", icon: Instagram },
  { text: "Google+", href: "", icon: LucideMessageSquare },
  { text: "Pinterest", href: "", icon: LucideMessageSquare },
  { text: "Blog", href: "", icon: MessagesSquare },
];

export const Footer = () => {
  return (
    <footer className="w-full flex justify-center text-[#d0d0d0] bg-[#343a40] pt-12 pb-2">
      <div>
        <div className="max-w-[1140px] flex flex-col gap-2 gap-y-10 justify-between mb-6 px-4 lg:flex-row">
          <div className="flex flex-col gap-6 basis-full lg:basis-1/3">
            <FundlyLogo />
            <span>
              Fundly is dedicated to providing you with the tools you need to
              raise money for whatever your cause may be.
            </span>
          </div>
          <div className="flex flex-col gap-2.5 basis-full lg:basis-1/3">
            <h4 className="text-[22px] font-semibold text-fundly-green">
              About Us
            </h4>
            <div className="grid grid-cols-2 gap-4 gap-x-10">
              {navLinks.map(({ text, href }) => (
                <Link key={text} href={href}>
                  {text}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2.5 basis-full lg:basis-1/3">
            <h4 className="text-[22px] font-semibold text-fundly-green">
              Follow Us
            </h4>
            <div className="grid grid-cols-2 gap-4 gap-x-10">
              {socialLinks.map(({ text, href, icon: Icon }) => (
                <Link
                  className="flex gap-2 items-center"
                  key={text}
                  href={href}
                >
                  <div className="border p-1 border-currentColor rounded-full">
                    <Icon />
                  </div>
                  <span>{text}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center border-t-dashed border-t-2 border-t-[#737373] pt-4">
          Copyright © Fundly 2026
        </div>
      </div>
    </footer>
  );
};
