import { Progress } from "@/components/ui/progress";
import { Play } from "lucide-react";
import Image from "next/image";
import React from "react";

const campaigns = [
  {
    name: "Sudani Refugee Relief",
    image:
      "https://images.fundly.com/uploads/d6e8b679-1590-47d8-908f-1c1b2b304e0e.png?h=275",
    raised: 9188,
    goal: 10000,
    location: "Oakland, CA",
    cause: "Disaster Relief",
  },
  {
    name: "Mike & Amy McClenahan Retirement Fund",
    image:
      "https://images.fundly.com/uploads/6c664359-6621-4195-a814-f914a84b3fb0.jpeg?h=275",
    raised: 5675,
    goal: 10000,
    location: "Solana Beach, CA",
    cause: "Trips & Adventures",
  },
  {
    name: "Health Expenses",
    image:
      "https://images.fundly.com/uploads/21a29006-ef9c-45f5-a6bf-20146cdbd292.jpg?h=275",
    raised: 460,
    goal: 2000,
    location: "Hockley, TX",
    cause: "Medical & Health",
  },
];

export const TrendingCampaigns = () => {
  return (
    <section className="w-full flex justify-center bg-[#f4f4f4] py-[70px] text-[#3d231c]">
      <div className="w-full max-w-[1140px] flex flex-col">
        <div className="flex flex-col text-center items-center gap-4 lg:flex-row lg:justify-between">
          <h5 className="text-5xl lg:text-[64px]">Trending Campaigns</h5>
          <span className="inline-flex items-center bg-white gap-2 border-2 border-[#e2e2e2] py-[0.4rem] pr-[0.5rem] pl-[1.4rem] rounded-[40px]">
            <input
              placeholder="Search for a Campaign"
              type="text"
              className="border-none outline-none text-[20px] py-2.5 px-[15px]"
            />
            <button className="bg-[#91cb55] rounded-full w-10 h-10 text-white flex items-center justify-center">
              <Play fill="#fff" />
            </button>
          </span>
        </div>
        <div className="w-full grid md:grid-cols-3 pt-12 px-2 gap-7 lg:flex-row">
          {campaigns.map((campaign) => (
            <CampaignCard key={campaign.name} {...campaign} />
          ))}
        </div>
      </div>
      ˝
    </section>
  );
};

function formatRaisedFund(raisedFund: number): string {
  return raisedFund.toLocaleString();
}

function CampaignCard({
  name,
  image,
  raised,
  goal,
  location,
  cause,
}: {
  name: string;
  image: string;
  raised: number;
  goal: number;
  location: string;
  cause: string;
}) {
  const progress = Math.ceil((raised * 100) / goal);
  return (
    <article className="p-5 flex flex-col gap-6 bg-white basis-full lg:basis-1/3 shadow-[4px_4px_10px_0px_rgba(0,0,0,0.3)]">
      <div className="flex justify-between">
        <h6 className="text-[28px] font-semibold">{name}</h6>
        <Image
          width={90}
          height={165}
          className="h-[165px] object-cover"
          src={image}
          alt=""
        />
      </div>
      <div className="flex gap-1 flex-col">
        <div>
          <Progress value={progress} />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[32px]">{`$${formatRaisedFund(raised)}`}</span>
          <span className="text-base">{`${progress}%`}</span>
        </div>
        <div className="flex flex-col py-6">
          <span>{location}</span>
          <span>{cause}</span>
        </div>
        <button className="rounded-3xl p-4 py-1 mb-4 bg-[#91cb55] border-2 border-[#91cb55] hover:bg-transparent transition-colors duration-300 ease-in w-full flex justify-center text-[1.4rem]">
          DONATE
        </button>
      </div>
    </article>
  );
}
