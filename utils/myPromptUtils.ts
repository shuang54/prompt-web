import { PromptListsType } from "@/types"
import { getRandomNumber } from "."

export const getMyPrompt = () =>{
  return JSON.parse(localStorage.getItem('my_prompt') || '[]')
}

export const setMyPrompt = (promptData: PromptListsType) => {
  // console.log(promptData)

  let myPrompt = getMyPrompt()
  // myPrompt.forEach((item: PromptListsType) => {
  //   if(item.id == promptData.id){
  //     deletedMyPrompt(promptData.id)
  //     addMyPrompt(promptData)
  //   }
  // });
   deletedMyPrompt(promptData.id)
   addMyPrompt(promptData)
  // console.log(myPrompt)
  // localStorage.setItem('my_prompt', JSON.stringify(myPrompt))
}

export const deletedMyPrompt = (id: number) => {
  let myPrompt = getMyPrompt()
   myPrompt = myPrompt.filter((item: PromptListsType) => {
     return item.id !== id
   })
  
  localStorage.setItem('my_prompt',JSON.stringify(myPrompt))
}
export const addMyPrompt = (promptData: PromptListsType) => {
  let myPrompt = getMyPrompt()
  myPrompt = [...myPrompt, promptData]
  localStorage.setItem('my_prompt', JSON.stringify(myPrompt))
}
export const saveMyPrompt = (promptData: PromptListsType) => {
  let myPrompt = getMyPrompt()
  const isExist = myPrompt.some((item: PromptListsType) => {
    console.log(item.id ,promptData.id)
    return item.id == promptData.id
  })
  console.log(isExist)
  // 是否存在id
  if(isExist){
    // 存在则修改
    setMyPrompt(promptData)
  }else{
    // 不存在则添加
    promptData.id = Number(getRandomNumber(4))
    addMyPrompt(promptData)
  }
}