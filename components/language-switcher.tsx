"use client"

import { useState } from "react"

export function LanguageSwitcher() {
    const [language, setLanguage] = useState("KOR")

    const toggleLanguage = () => {
        setLanguage(language === "KOR" ? "ENG" : "KOR")
    }

    return (
        <div className="flex items-center space-x-4">
            <button
                onClick={toggleLanguage}
                className={`text-sm font-medium ${language === "KOR" ? "text-sky-600" : "text-gray-400"}`}
            >
                KOR
            </button>
            <span className="text-gray-300">|</span>
            <button
                onClick={toggleLanguage}
                className={`text-sm font-medium ${language === "ENG" ? "text-sky-600" : "text-gray-400"}`}
            >
                ENG
            </button>
        </div>
    )
}
