import type { Metadata } from "next"
import { Vazirmatn } from "next/font/google"
import type { ReactNode } from "react"
import "./styles.css"

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "محمدمهدی بهرامی",
  description: "سایت شخصی محمدمهدی بهرامی",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirmatn.variable} antialiased`}>{children}</body>
    </html>
  )
}
