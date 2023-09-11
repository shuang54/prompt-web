import copy from 'copy-to-clipboard'
import toast from 'react-hot-toast'
import { useTranslation } from 'react-i18next';
// 复制文字
export const copyHandle = (
  text: string,
  e?: React.MouseEvent<HTMLDivElement, MouseEvent>
) => {
  if (e) {
    e.preventDefault()
  }
  const isCopy = copy(text, {
    debug: true,
    message: 'Press #{key} to copy'
  })
  if (isCopy) {
    toast.success('copy success')
  } else {
    toast.error('copy error')
  }
}
export function getRandomNumber(number: number): string {
  let result = ''
  for (let i = 0; i < number; i++) {
    result += String(Math.floor(Math.random() * 10))
  }
  return result
}
// 处理ShowList 语言切换
export const ShowListHandel = (item) => {
  const { t, i18n } = useTranslation()

  const currentLanguage: string = i18n.language
  let cItem
  if (currentLanguage.substring(0, 2).toLowerCase() === 'zh') {
    cItem = item.zh
  } else {
    cItem = item.en
  }
  return cItem
}