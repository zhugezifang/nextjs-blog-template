//import { Button } from "@/components/ui/button"
//import { Chrome } from "lucide-react"
//import Features from "@/components/features"
//import Hero from "@/components/hero"
//import FAQ from "@/components/faq"

import {ImageSplitter} from "@/components/imageSplitter"
import { getDictionary } from '@/i18n/get-dictionary'
import type { Locale } from '@/i18n/config'

export const runtime = 'edge'

export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(lang)
  const indexLanguageText = dict.indexLanguageText;
  const questionText =dict.indexQuestion;
  const indexFeatureText = dict.featureInfos;

  return (
    <main className="flex flex-col items-center w-full">

      <div className="container py-10">
          
          <div className="mx-auto w-full max-w-7xl px-5 mb-5">

            <div
              className="mx-auto flex max-w-4xl flex-col items-center text-center pt-10">
              <h1 className="mb-4 text-4xl font-bold md:text-4xl">{indexLanguageText.h1Text}</h1>
              <div className="mb-5 lg:mb-8">
                <p className="text-[#7c8aaa] text-xl">{indexLanguageText.pDescription}</p>
              </div>

            </div>

            <div
                className={"w-[90%] mx-auto mb-8 border-[2px] border-gray-200 object-fill"}>
                <ImageSplitter rowText={indexLanguageText.RowText} colText={indexLanguageText.ColText} imgBtn={indexLanguageText.btn1} downBtn={indexLanguageText.btn2}/>
            </div>

            
            <section className="py-8 md:py-12 lg:py-16">
              <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center">
                  <h2 className="text-4xl font-bold leading-tight text-black sm:text-4xl lg:text-4xl">{indexFeatureText.h2_0}</h2>
                </div>
                <div className="px-5 py-6 mt-8 bg-white lg:mt-12 lg:p-12">
                  <div className="grid grid-cols-1 gap-8 lg:gap-12 sm:grid-cols-2">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-8 w-8 text-blue-600">
                          <path stroke-linecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"></path>
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-black">{indexFeatureText.h2_1}</h3>
                        <p className="mt-2 text-base text-gray-600">{indexFeatureText.h2_1_p1}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-8 w-8 text-blue-600">
                          <path stroke-linecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path>
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-black">{indexFeatureText.h2_2}</h3>
                        <p className="mt-2 text-base text-gray-600">{indexFeatureText.h2_2_p1}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-8 w-8 text-blue-600">
                          <path stroke-linecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"></path>
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-black">{indexFeatureText.h2_3}</h3>
                        <p className="mt-2 text-base text-gray-600">{indexFeatureText.h2_3_p1}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-8 w-8 text-blue-600">
                          <path stroke-linecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"></path>
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-black">{indexFeatureText.h2_4}</h3>
                        <p className="mt-2 text-base text-gray-600">{indexFeatureText.h2_4_p1}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-8 w-8 text-blue-600">
                          <path stroke-linecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"></path>
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-black">{indexFeatureText.h2_5}</h3>
                        <p className="mt-2 text-base text-gray-600">{indexFeatureText.h2_5_p1}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-8 w-8 text-blue-600">
                          <path stroke-linecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"></path>
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-black">{indexFeatureText.h2_6}</h3>
                        <p className="mt-2 text-base text-gray-600">{indexFeatureText.h2_6_p1}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>


            <div id="faq">
              <section>
                <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-5 py-16 md:px-10 md:py-20">
                  <div className="mx-auto flex max-w-xl flex-col items-center justify-center px-6 text-center lg:max-w-3xl lg:px-10">
                    <h2 className="text-4xl lg:text-4xl font-bold text-black">{questionText.h2_0}</h2>
                  </div>
                  <div className="mt-10 flex w-full flex-col">
                    <div className="relative my-3 w-full rounded-md px-6 py-8">
                      <div className="max-w-full">
                        <h3 className="text-xl font-bold text-black mb-4">{questionText.h2_1}</h3>
                        <p className="font-inter text-base font-light text-gray-500 text-justify">{questionText.h2_1_p1}</p>
                      </div>
                    </div>
                    <div className="mr-4 ml-8 border border-gray-200"></div>
                    <div className="relative my-3 w-full rounded-md px-6 py-8">
                      <div className="max-w-full">
                        <h3 className="text-xl font-bold text-black mb-4">{questionText.h2_2}</h3>
                        <p className="font-inter text-base font-light text-gray-500 text-justify">{questionText.h2_2_p1}</p>
                      </div>
                    </div>
                    <div className="mr-4 ml-8 border border-gray-200"></div>
                    <div className="relative my-3 w-full rounded-md px-6 py-8">
                      <div className="max-w-full">
                        <h3 className="text-xl font-bold text-black mb-4">{questionText.h2_3}</h3>
                        <p className="font-inter text-base font-light text-gray-500 text-justify">{questionText.h2_3_p1}</p>
                      </div>
                    </div>
                    <div className="mr-4 ml-8 border border-gray-200"></div>
                    <div className="relative my-3 w-full rounded-md px-6 py-8">
                      <div className="max-w-full">
                        <h3 className="text-xl font-bold text-black mb-4">{questionText.h2_4}</h3>
                        <p className="font-inter text-base font-light text-gray-500 text-justify">{questionText.h2_4_p1}</p>
                      </div>
                    </div>
                    <div className="mr-4 ml-8 border border-gray-200"></div>
                    <div className="relative my-3 w-full rounded-md px-6 py-8">
                      <div className="max-w-full">
                        <h3 className="text-xl font-bold text-black mb-4">{questionText.h2_5}</h3>
                        <p className="font-inter text-base font-light text-gray-500 text-justify">{questionText.h2_5_p1}</p>
                      </div>
                    </div>
                    <div className="mr-4 ml-8 border border-gray-200"></div>
                    <div className="relative my-3 w-full rounded-md px-6 py-8">
                      <div className="max-w-full">
                        <h3 className="text-xl font-bold text-black mb-4">{questionText.h2_6}</h3>
                        <p className="font-inter text-base font-light text-gray-500 text-justify">{questionText.h2_6_p1}</p>
                      </div>
                    </div>
                    <div className="mr-4 ml-8 border border-gray-200"></div>
                    <div className="relative my-3 w-full rounded-md px-6 py-8">
                      <div className="max-w-full">
                        <h3 className="text-xl font-bold text-black mb-4">{questionText.h2_7}</h3>
                        <p className="font-inter text-base font-light text-gray-500 text-justify">{questionText.h2_7_p1}</p>
                      </div>
                    </div>
                    <div className="mr-4 ml-8 border border-gray-200"></div>
                  </div>
                </div>
              </section>
            </div>

          </div>
          
          
      </div>

      
    </main>
  )
}
