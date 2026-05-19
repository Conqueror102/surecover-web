import { Metadata } from "next"

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  ogImage?: string
  noIndex?: boolean
  canonical?: string
}

const siteConfig = {
  name: "SureCova",
  description: "Your personal doctor. Always available. Premium healthcare that follows you anywhere in the world.",
  url: "https://surecova.com",
  ogImage: "/og-image.png",
  links: {
    twitter: "https://twitter.com/surecova",
    linkedin: "https://linkedin.com/company/surecova",
  },
}

export function generateSEO({
  title,
  description = siteConfig.description,
  keywords = [],
  ogImage = siteConfig.ogImage,
  noIndex = false,
  canonical,
}: SEOProps = {}): Metadata {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name
  
  return {
    title: pageTitle,
    description,
    keywords: [
      "healthcare",
      "telemedicine",
      "online doctor",
      "virtual healthcare",
      "medical consultation",
      "chronic disease management",
      "global healthcare",
      ...keywords,
    ],
    authors: [{ name: "SureCova" }],
    creator: "SureCova",
    publisher: "SureCova",
    robots: noIndex ? "noindex, nofollow" : "index, follow",
    alternates: {
      canonical: canonical || siteConfig.url,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: canonical || siteConfig.url,
      title: pageTitle,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [ogImage],
      creator: "@surecova",
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon-16x16.png",
      apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
  }
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: "SureCova",
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-234-567-890",
      contactType: "Customer Service",
      availableLanguage: ["English", "Spanish", "French"],
    },
    sameAs: [
      siteConfig.links.twitter,
      siteConfig.links.linkedin,
    ],
  }
}

export function generateDoctorSchema(doctor: {
  name: string
  specialty: string
  image?: string
  rating?: number
  reviewCount?: number
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: doctor.name,
    medicalSpecialty: doctor.specialty,
    image: doctor.image,
    aggregateRating: doctor.rating
      ? {
          "@type": "AggregateRating",
          ratingValue: doctor.rating,
          reviewCount: doctor.reviewCount || 0,
        }
      : undefined,
  }
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
