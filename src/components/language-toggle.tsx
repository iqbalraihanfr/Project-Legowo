"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n"
import { Globe } from "lucide-react"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === "id" ? "en" : "id")}
      className="gap-2 text-wood-700 hover:text-wood-900 hover:bg-wood-100"
    >
      <Globe className="h-4 w-4" />
      <span className="font-medium">{language === "id" ? "EN" : "ID"}</span>
    </Button>
  )
}
