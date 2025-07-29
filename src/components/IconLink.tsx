import type { Icon } from "@phosphor-icons/react"

interface IconLinkProps {
  Icon: Icon
  title: string
  href: string
}

export function IconLink({ href, Icon, title }: IconLinkProps) {
  return (
    <div className="flex items-center gap-1 hover:text-brand-400">
      <Icon size={24} />
      <a href={href} className="border-b">
        {title}
      </a>
    </div>
  )
}
