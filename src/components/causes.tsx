import Image from "next/image";
import Link from "next/link";
import React from "react";

const allcauses = [
  {
    href: "#",
    name: "Clubs & Community",
    image: "https://fundly.com/content/images/icon_vertical_club.svg",
  },
  {
    href: "#",
    name: "Creative Projects",
    image: "https://fundly.com/content/images/icon_vertical_%20creative.svg",
  },
  {
    href: "#",
    name: "Disaster Relief",
    image: "https://fundly.com/content/images/icon_vertical_%20disaster.svg",
  },
  {
    href: "#",
    name: "Fraternities & Sororities",
    image: "https://fundly.com/content/images/icon_vertical_%20frat.svg",
  },
  {
    href: "#",
    name: "Fun & Special Events",
    image: "https://fundly.com/content/images/icon_vertical_%20fun.svg",
  },
  {
    href: "#",
    name: "Kids & Family",
    image: "https://fundly.com/content/images/icon_vertical_%20kids.svg",
  },
  {
    href: "#",
    name: "LGBT",
    image: "https://fundly.com/content/images/icon_vertical_%20LGBT.svg",
  },
  {
    href: "#",
    name: "Medical & Health",
    image: "https://fundly.com/content/images/icon_vertical_%20medical.svg",
  },
  {
    href: "#",
    name: "Memorials & Funerals",
    image: "https://fundly.com/content/images/icon_vertical_%20memorial.svg",
  },
  {
    href: "#",
    name: "Military",
    image: "https://fundly.com/content/images/icon_vertical_%20military.svg",
  },
  {
    href: "#",
    name: "NonProfit/Charity",
    image: "https://fundly.com/content/images/icon_vertical_%20NP.svg",
  },
  {
    href: "#",
    name: "Pets & Animals",
    image: "https://fundly.com/content/images/icon_vertical_%20pets.svg",
  },
  {
    href: "#",
    name: "Politics & Public Office",
    image: "https://fundly.com/content/images/icon_vertical_%20politics.svg",
  },
  {
    href: "#",
    name: "Religious Organizations",
    image: "https://fundly.com/content/images/icon_vertical_%20religious.svg",
  },
  {
    href: "#",
    name: "Run/Walk/Rides",
    image: "https://fundly.com/content/images/icon_vertical_%20run.svg",
  },
  {
    href: "#",
    name: "Schools & Education",
    image: "https://fundly.com/content/images/icon_vertical_%20school.svg",
  },
  {
    href: "#",
    name: "Sports & Teams",
    image: "https://fundly.com/content/images/icon_vertical_%20sport.svg",
  },
  {
    href: "#",
    name: "Trips & Adventure",
    image: "https://fundly.com/content/images/icon_vertical_%20trips.svg",
  },
];

export const Causes = () => {
  return (
    <section className="w-full flex justify-center py-[70px]">
      <div className="flex flex-col items-center">
        <h2 className="text-5xl mb-[30px] lg:text-[64px]">Fundly Helps</h2>
        <div className="grid gap-3 lg:grid-cols-4 md:grid-cols-3">
          {allcauses.map((causeObj) => (
            <Cause key={causeObj.name} {...causeObj} />
          ))}
        </div>
      </div>
    </section>
  );
};

function Cause({
  name,
  image,
  href,
}: {
  name: string;
  image: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="flex flex-col items-center rounded-xl hover:bg-[#f4f4f4] p-[15px]"
    >
      <Image width={200} height={118} className="h-[118px]" alt="" src={image} />
      <h3 className="text-2xl text-[#1c1c1c]">{name}</h3>
    </Link>
  );
}
