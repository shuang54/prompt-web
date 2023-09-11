"use client";
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import zh_CN from './locales/zh-CN.json'
import en_US from './locales/en-US.json'
// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  "en-US": {
    // 语言区域对应的翻译文件
    translation: en_US
  },
  "zh-CN": {
    // 语言区域对应的翻译文件
    translation: zh_CN
  }
}
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en-US', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    supportedLngs: ['zh-CN', 'en-US'],
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  })

export default i18n