"use client"

import { useEffect } from "react"

import { surecovaBody, surecovaScript, surecovaStyles } from "@/components/legacy/surecova-html-source"

export function SurecovaHtmlPage() {
  useEffect(() => {
    const script = document.createElement("script")
    script.id = "surecova-html-page-script"
    script.textContent = surecovaScript
    document.body.appendChild(script)

    return () => {
      script.remove()
    }
  }, [])

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: surecovaStyles }} />
      <div dangerouslySetInnerHTML={{ __html: surecovaBody }} />
    </>
  )
}
