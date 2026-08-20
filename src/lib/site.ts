export const SITE = {
  name: "Terneuzen Krant",
  domain: "terneuzenkrant.nl",
  url: "https://terneuzenkrant.nl",
  citySlug: "terneuzen",
  defaultLocale: "nl-NL",
  tagline: "Het laatste nieuws uit Terneuzen en omgeving.",
  description:
    "Het laatste nieuws uit Terneuzen en omgeving.",
  author: "Redactie Terneuzen Krant",
  contactEmail: "redactie@terneuzenkrant.nl",
  social: {},
  navigation: [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog/" },
    { label: "Weer", href: "/weer-terneuzen/" },
    { label: "Bedrijvengids", href: "/bedrijvengids/" },
  ],
  categories: [
    { slug: "lokaal", name: "Lokaal" },
    { slug: "sport", name: "Sport" },
    { slug: "politiek-bestuur", name: "Politiek & Bestuur" },
    { slug: "evenementen", name: "Evenementen" },
    { slug: "buurt-wijk", name: "Buurt & Wijk" },
    { slug: "overige", name: "Overige" },
  ],
};

export type CategorySlug = (typeof SITE.categories)[number]["slug"];

export function categoryNameToSlug(name: string): string | null {
  const match = SITE.categories.find((c) => c.name === name);
  return match?.slug ?? null;
}

export function categorySlugToName(slug: string): string | null {
  return SITE.categories.find((c) => c.slug === slug)?.name ?? null;
}
