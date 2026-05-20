import type { Metadata } from "next"

import { SurecovaHtmlPage } from "@/components/legacy/surecova-html-page"

export const metadata: Metadata = {
  title: "SureCova — Your Personal Doctor. Always.",
}

export default function HomePage() {
  return <SurecovaHtmlPage />
}
