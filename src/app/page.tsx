import {
  EnvelopeIcon,
  GithubLogoIcon,
  GlobeIcon,
  PhoneIcon,
} from "@phosphor-icons/react/dist/ssr"
import Image from "next/image"
import { Hr } from "#/components/Hr"
import { IconLink } from "#/components/IconLink"

export default function Home() {
  return (
    <div className="">
      <header className="p-12 gap-6 flex flex-col items-center text-center">
        <Image
          src="/me.png"
          alt=""
          width={256}
          height={256}
          className="rounded-md-elements"
          unoptimized
        />

        <div className="flex flex-col gap-3 items-center">
          <h1 className="text-title text-tusi-100 font-black">
            محمدمهدی بهرامی
          </h1>
          <p className="text-h2 text-brand-400 font-bold">
            توسعه‌دهنده فرانت‌اند (React)
          </p>
        </div>

        <p className="">
          کارم ساخت وب‌اپ‌های ساده، سریع و با کیفیت با استفاده از ابزارهای مدرن
          هست. به رشد مستمر و کدنویسی تمیز علاقه‌مندم و همیشه در تلاش برای بهبود
          مهارت‌ها و تجربیاتی هستم که خلق می‌کنم.
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
          <IconLink
            Icon={PhoneIcon}
            href="tel:09309421787"
            title="09309421787"
          />
        </div>
      </header>

      <Hr />
    </div>
  )
}
