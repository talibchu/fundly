import { Facebook, Instagram, LucideMessageSquare } from "lucide-react";

export const siteData = {
  name: "Fundly",
  logo: "/images/logo.png",
  description:
    "Fundly is dedicated to providing you with the tools you need to raise money for whatever your cause may be.",
  footerNavLinks: [
    { text: "Terms and Conditions", href: "/terms-and-conditions" },
    { text: "Refund policy", href: "refund-policy" },
    { text: "Privacy Policy", href: "privacy-policy" },
  ],
  footerSocialLinks: [
    { text: "Facebook", href: "", icon: Facebook },
    { text: "Instagram", href: "", icon: Instagram },
    { text: "Pinterest", href: "", icon: LucideMessageSquare },
  ],
};
