export interface SiteConfig {
  name: string;
  siteName: string;
  domain: string;
  url: string;
  siteUrl: string;
  description: string;
  siteDescription: string;
  defaultAuthor: string;
  repo: string;
  i18n: { defaultLocale: string; locales: string[]; prefixDefaultLocale: boolean; };
  theme: { style: string; fontFamily: string; colorScheme: string; };
  matomo: { url: string; siteId: string; containerId: string; };
  revive: { reviveId: string; scriptUrl: string; zones: Record<string, { zoneId: number; format: string }>; };
  legal: { editor: string; address: string; contactEmail: string; hostName: string; hostAddress: string; };
  categories: Array<{ id: string; label: string }>;
}

export const siteConfig: SiteConfig = {
  name: "Challenge Immo — Conseil en Investissement Immobilier & Gestion de Patrimoine",
  siteName: "challengeimmo.com",
  domain: "challengeimmo.com",
  url: "https://challengeimmo.com",
  siteUrl: "https://challengeimmo.com",
  description: "L'expertise indépendante pour réussir ses investissements immobiliers : rentabilité locative, optimisation fiscale LMNP, stratégies patrimoniales et analyses de marché.",
  siteDescription: "L'expertise indépendante pour réussir ses investissements immobiliers : rentabilité locative, optimisation fiscale LMNP, stratégies patrimoniales et analyses de marché.",
  defaultAuthor: "Le Comité d'Analyse Challenge Immo",
  repo: "jc842/challengeimmo",

  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en", "es"],
    prefixDefaultLocale: false,
  },

  theme: {
    style: "lexington-sandstone",
    fontFamily: "Outfit, Inter, sans-serif",
    colorScheme: "navy",
  },

  matomo: {
    url: "https://analytics.les4h.fr/",
    siteId: "55",
    containerId: "Hx1AEp9v",
  },

  revive: {
    reviveId: "ac119b122a644588953c74c4c1daee06",
    scriptUrl: "//ads.les4h.fr/www/delivery/asyncjs.php",
    zones: {
      mobileSticky: { zoneId: 629, format: "mobileBanner" },
      inContent: { zoneId: 631, format: "mediumRectangle" },
      header: { zoneId: 630, format: "leaderboard" },
      halfPage: { zoneId: 632, format: "halfPage" },
      largeRectangle: { zoneId: 628, format: "largeRectangle" },
      skyscraper: { zoneId: 633, format: "skyscraper" },
    },
  },

  legal: {
    editor: "Challenge Immo — Conseil & Études Patrimoniales",
    address: "BP 402, 97163 Le Moule Cedex",
    contactEmail: "contact@challengeimmo.com",
    hostName: "Cloudflare Inc.",
    hostAddress: "101 Townsend St, San Francisco, CA 94107, USA",
  },

  categories: [
    { id: "strategie-patrimoniale", label: "Stratégie Patrimoniale" },
    { id: "fiscalite-lmnp", label: "Fiscalité & LMNP" },
    { id: "rentabilite-locative", label: "Rentabilité & Cash-Flow" },
    { id: "credit-financement", label: "Crédit & Effet de Levier" },
    { id: "scpi-pierre-papier", label: "SCPI & Pierre-Papier" },
  ],
};
