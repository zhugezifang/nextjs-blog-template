//import { Button } from "@/components/ui/button"
//import { Chrome } from "lucide-react"
//import Features from "@/components/features"
//import Hero from "@/components/hero"
//import FAQ from "@/components/faq"
import { getDictionary } from '@/i18n/get-dictionary'
import type { Locale } from '@/i18n/config'

export const runtime = 'edge'

export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(lang)
  const posts = dict.blog.posts


  return (
    <main className="flex flex-col items-center w-full">

      <div className="container py-10 px-4">
          
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold">{dict.home.game.title}</h1>
            <a href="#" className="text-sm text-blue-500 hover:underline">{dict.home.game.more} &gt;</a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
            {posts.map(post => (
              <a href={`/${lang}/game/${post.slug}`}>
                <div className="text-center">
                  <div className="relative w-full h-32 bg-black rounded-lg overflow-hidden">
                    <img src={post.img} alt={post.title} className="object-cover w-full h-full"/>
                  </div>
                  <p className="mt-2 text-sm">{post.title}</p>
                </div>
              </a>
            ))}
        </div>
          
      </div>

      
    </main>
  )
}
