'use client';
import { siteConfig } from '@/config/site';
import React from 'react'
import { useTranslation } from 'react-i18next';
import { ShowListHandel } from '@/utils';
const Classification = () => {
  const { t, i18n } = useTranslation();
  return (
    <section id='Type' className= "pt-20 relative z-10 flex flex-col gap-2 w-full mt-5 lg:mt-8  lg:mb-10 mb-3" >
      <div className="flex flex-col gap-0 md:gap-8">
        <div>
          <div className="flex flex-col gap-2 justify-center w-full items-center">
            <div>
              <h1 className="tracking-tight inline font-semibold from-[#FF72E1] to-[#F54C7A] text-2xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b">
                {t('Classification')}&nbsp;
              </h1>
              <h1 className="tracking-tight inline font-semibold text-2xl lg:text-6xl">

              </h1>

            </div>
          </div>
          <p className="w-full my-2 text-lg lg:text-xl font-normal text-default-500 max-w-full mt-4 md:w-full text-center flex justify-center items-center">
            {t('ChatGPT prompts can be divided into the following types')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {siteConfig.ShowList.map((item) => {
            let citem = ShowListHandel(item)
            return (
            <div
              key={item.id}
              className="flex flex-col relative overflow-hidden height-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-large transition-transform-background motion-reduce:transition-none border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]"
            >
              <div className="flex p-3 z-10 w-full justify-start items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-large gap-2 pb-0">
                <div className="flex justify-center p-2 rounded-full items-center bg-secondary-100/80 text-pink-500"></div>
                  <p className="text-base font-semibold">{citem.title}</p>
              </div>
              <div className="relative flex w-full p-5 flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto subpixel-antialiased">
                  <p className="font-normal text-base ">{citem.content}</p>
              </div>
            </div>
          )})}
        </div>
      </div>
      </section >
  )
}

export default Classification