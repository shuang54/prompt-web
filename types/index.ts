import {SVGProps} from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type PromptListsType = {
  zh: {
    title: string
    prompt: string
    description: string
    remark?: string
    variable?: undefined
  }
  website: null
  tags: string[]
  id: number
  weight: number
}
export type PromptTagType = {
  id: number
  tag: string
  label: string
  description: string
  color?: undefined
} 
export type VariableType = {
  id: string
  key: string
  describe: string
  value: string
  isSelected: boolean
}[]