'use client';
import React from 'react'
import TypewriterComponent from "typewriter-effect";
import { title, subtitle } from '@/components/primitives'
import { useTranslation } from 'react-i18next';
const Hero = () => {
  const { t, i18n } = useTranslation();
  const strings = {
    en:[
    "Increase your productivity.",
    "Personalization.",
    "High quality."
    ],
    zh: [
      "提高生产力",
      "个性化",
      "高质量"
    ]
}
  const stringsHandel = ()=>{
    if (i18n.language.substring(0, 2).toLowerCase() === 'zh'){
      return strings.zh
    }else{
      return strings.en
    }
  }
  return (
    <div className="font-bold pt-36 text-center space-t-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>{t('The Best AI Prompt for')}</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          <TypewriterComponent
            options={{
              strings: stringsHandel(),
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className={subtitle({ class: 'mt-4' })}>
        {t('subTitle')}
      </div>
      
    </div>
  )
}

export default Hero