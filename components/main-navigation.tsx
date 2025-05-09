"use client"

import Link from "next/link"
import { useState } from "react"

export function MainNavigation() {
    const [activeItem, setActiveItem] = useState<string | null>(null)

    const menuItems = [
        { name: "회사소개", href: "#" },
        { name: "공지사항", href: "#" },
        { name: "고객센터", href: "#" },
        { name: "자주 묻는 질문", href: "#" },
        { name: "토스인증서", href: "#" },
        { name: "채용", href: "#" },
    ]

    return (
        <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
                <Link
                    key={item.name}
                    href={item.href}
                    className={`text-sm font-medium transition-colors hover:text-sky-600 ${
                        activeItem === item.name ? "text-sky-600" : "text-gray-700"
                    }`}
                    onClick={() => setActiveItem(item.name)}
                >
                    {item.name}
                </Link>
            ))}
        </nav>
    )
}
