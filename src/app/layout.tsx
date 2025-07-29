import type { Metadata } from "next"
import type { PropsWithChildren } from "react"
import "./styles.css"
import { vazirmatn } from "#/assets/fonts/Vazirmatn"

export const metadata: Metadata = {
  title: "محمدمهدی بهرامی",
  description: "سایت شخصی محمدمهدی بهرامی",
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirmatn.className} antialiased`}>{children}</body>
    </html>
  )
}
