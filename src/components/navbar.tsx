import Link from "next/link"
//import { Chrome } from "lucide-react"
import { getDictionary } from "@/i18n/get-dictionary"
import type { Locale } from "@/i18n/config"
import { NavbarActions } from "./navbar-actions"
import { MobileNav } from "./mobile-nav"

export default async function Navbar({
  lang
}: {
  lang: Locale
}) {
  const dict = await getDictionary(lang)

  return (
    <header className="sticky top-0 z-50 w-full glass">

      <div className="bg-blue-500 text-white text-center py-3 px-4 flex items-center justify-center relative">
        <a target="_blank" href="https://docs.qq.com/doc/DZXpkTVZwdGV2Q1Nt" className="text-sm">加微信 zhugezifang001 进效率工具交流群，探索更多效率工具</a>
        <button className="absolute right-4 text-white hover:text-blue-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
        </button>
      </div>
      
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center space-x-2">
          <Link href={`/${lang}`} className="flex items-center space-x-2">
            <span className="text-xl font-bold">{dict.common.brand}</span>
          </Link>
        </div>
        <nav className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="flex-1 md:flex-none">
            <div className="hidden items-center space-x-4 md:flex">
              <Link href={`/${lang}/blog`} className="text-base font-medium transition-colors hover:text-primary">
                {dict.nav.blog}
              </Link>
              {/*
              <Link href={`/${lang}/pricing`} className="text-sm font-medium transition-colors hover:text-primary">
                {dict.nav.pricing}
              </Link>
              */}
            </div>
          </div>
          {/*<NavbarActions lang={lang} dict={dict} />*/}
          <NavbarActions />
          <MobileNav lang={lang} dict={dict} />
        </nav>
      </div>
    </header>
  )
}
