import React from "react";
import MyCard from "./MyCard";
import {prompts,Prompts} from '../data/prompt'
import { PromptListsType } from "@/types";
import AddCard from "./AddCard";

interface CardListsPrompt{
  tag:string;
}

const CardLists: React.FC<CardListsPrompt> = ({ tag }) => {

  // 获取分类数据
  let promptLists = prompts.filter(prompt =>prompt.tags.includes(tag))
  
  if (tag == "MY") {
    promptLists = JSON.parse(localStorage.getItem("my_prompt"))
  }
  // console.log(promptLists)
  // console.log(tag)

  if (!promptLists || promptLists.length == 0){
    return (
      <div className="flex justify-center items-center py-16 text-[24px] h-full">
        Empty
      </div>
    );
  }
  return (
    <div className="grid content-start gap-4  xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-col-1 px-12 shrink-0 ">
      {tag == "MY" && (
        <AddCard/>
      )}
      {promptLists.map((prompt)=>(
        <MyCard key={prompt.id} {...prompt} />
      ))}
    </div>
  )
}

export default CardLists