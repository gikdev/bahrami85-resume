import {
  EnvelopeIcon,
  GithubLogoIcon,
  GlobeIcon,
  PhoneIcon,
} from "@phosphor-icons/react/dist/ssr"
import Image from "next/image"
import { IconLink } from "#/components/IconLink"
import { section } from "#/shared/skins"

export const Header = () => (
  <header className={section({ centerish: true })}>
    <Image
      src="/me.png"
      alt=""
      width={256}
      height={256}
      className="rounded-md-elements"
      unoptimized
    />

    <div className="flex flex-col gap-3 items-center">
      <h1 className="text-title text-tusi-100 font-black">محمدمهدی بهرامی</h1>
      <p className="text-h2 text-brand-400 font-bold">
        توسعه‌دهنده فرانت‌اند (React)
      </p>
    </div>

    <p className="">
      توسعه‌دهنده فرانت‌اند (React) با ۱.۵ سال تجربه در ساخت اپلیکیشن‌های وب، با
      تمرکز بر کیفیت، کدنویسی تمیز و ارائه تجربه کاربری روان و خوب.
    </p>

    <div className="flex items-center justify-between w-full" dir="ltr">
      <IconLink
        Icon={GlobeIcon}
        href="https://bahrami85.ir"
        title="bahrami85.ir"
      />
      <IconLink
        Icon={EnvelopeIcon}
        href="mailto:wd.bahrami@gmail.com"
        title="wd.bahrami@gmail.com"
      />
      <IconLink
        Icon={GithubLogoIcon}
        href="https://github.com/gikdev"
        title="github.com/gikdev"
      />
      <IconLink Icon={PhoneIcon} href="tel:09309421787" title="09309421787" />
    </div>
  </header>
)
