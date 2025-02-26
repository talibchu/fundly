"use client";
import { HandHeart, Send, ShieldCheck } from "lucide-react";
import React from "react";

export const Features = () => {
  return (
    <div className="w-full bg-[#fbfaf8] flex justify-center px-4 mt-6">
      <div className="container w-full flex flex-col text-base gap-10 py-10">
        <p className="font-semibold">
          Your easy, powerful, and trusted home for help
        </p>

        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="lg:basis-1/3 flex items-center gap-4">
            <span className="rounded-full bg-white border p-4 flex justify-center items-center">
              <Send strokeWidth={1.5} width={40} height={40} />
            </span>
            <div className="flex flex-col">
              <span className="font-semibold">Easy</span>
              <span>Donate, quickly and easily</span>
            </div>
          </div>

          <div className="lg:basis-1/3 flex items-center gap-4">
            <span className="rounded-full bg-white border p-4 flex justify-center items-center">
              <HandHeart strokeWidth={1.5} width={40} height={40} />
            </span>
            <div className="flex flex-col">
              <span className="font-semibold">Powerful</span>
              <span>
                Send help right to the people and causes you care about
              </span>
            </div>
          </div>

          <div className="lg:basis-1/3 flex items-center gap-4">
            <span className="rounded-full bg-white border p-4 flex justify-center items-center">
              <ShieldCheck strokeWidth={1.5} width={40} height={40} />
            </span>
            <div className="flex flex-col">
              <span className="font-semibold">Trusted</span>
              <span>
                Your donation is protected by the GoFundMe Giving Guarantee
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
