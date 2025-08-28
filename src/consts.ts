import type { IconMap, SocialLink, Site } from "@/types"

export const SITE: Site = {
  title: "Michał Bastrzyk",
  description:
    "Michał Bastrzyk is a software engineer and a writer. He is very passionate about automation, computer vision, data science and machine learning.",
  href: "https://bastrzyk.xyz",
  author: "Michał Bastrzyk",
  locale: "en-US",
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: "/blog",
    label: "blog",
  },
  {
    href: "/authors",
    label: "authors",
  },
  {
    href: "/uses",
    label: "uses",
  },
  {
    href: "/about",
    label: "about",
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://github.com/MichalBastrzyk",
    label: "GitHub",
  },
  {
    href: "https://twitter.com/MichalBastrzykk",
    label: "Twitter",
  },
  {
    href: "mailto:michal.bastrzyk.pl@gmail.com",
    label: "Email",
  },
  {
    href: "/rss.xml",
    label: "RSS",
  },
]

export const ICON_MAP: IconMap = {
  Website: "lucide:globe",
  GitHub: "lucide:github",
  LinkedIn: "lucide:linkedin",
  Twitter: "lucide:twitter",
  Email: "lucide:mail",
  RSS: "lucide:rss",
}
