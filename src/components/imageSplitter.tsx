"use client"

import Script from 'next/script';

export function ImageSplitter({
    rowText,colText,imgBtn,downBtn
  }: {
    rowText: string,colText: string,imgBtn: string,downBtn: string
  }) {
  
  return (
    <>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" strategy="beforeInteractive"/>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js" strategy="beforeInteractive"/>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js" strategy="beforeInteractive"/>
      <Script src="js/imageSplit.js" strategy="afterInteractive"
      />
      <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            className="mb-4 p-2 border border-gray-300 rounded-lg w-full sm:w-auto"
          />
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-4 w-full sm:w-auto">
            <label className="flex flex-col items-center w-full sm:w-auto">
              <span className="text-gray-700">{rowText}</span>
              <input
                id="rows-input"
                type="number"
                defaultValue="3"
                min="1"
                className="mt-1 p-2 border border-gray-300 rounded-lg w-full sm:w-auto"
              />
            </label>
            <label className="flex flex-col items-center w-full sm:w-auto">
              <span className="text-gray-700">{colText}</span>
              <input
                id="cols-input"
                type="number"
                defaultValue="3"
                min="1"
                className="mt-1 p-2 border border-gray-300 rounded-lg w-full sm:w-auto"
              />
            </label>
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-4 w-full sm:w-auto">
            <button
              id="split-button"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 w-full sm:w-auto"
            >
              {imgBtn}
            </button>
            <button
              id="download-button"
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 w-full sm:w-auto"
            >
              {downBtn}
            </button>
          </div>
          <div
            id="image-grid"
            className="grid gap-4"
          ></div>
        </div>
      </div>
    </>
    
  )
}
