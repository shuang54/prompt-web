import React, { useEffect } from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { HeartIcon } from "./Icon/HeartIcon";
import { Prompts } from '../data/prompt'
import { AnchorIcon } from "./Icon/AnchorIcon";
import DeleteDocumentIcon from "./Icon/DeleteDocumentIcon";
import MoreVertical from "./Icon/More-vertical";
import Edit from "./Icon/Edit";
import ThumbsUp from "./Icon/Thumbs-up";
import ThumbsDown from "./Icon/Thumbs-down";
import { ScrollShadow } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button as Btn, DropdownSection,cn } from "@nextui-org/react";
import { copyHandle} from '@/utils/index'
import { deletedMyPrompt } from "@/utils/myPromptUtils";
export default function MyCard({...prompts}) {
  const theme = useTheme();
  const isDark = theme.theme == 'dark'
  const iconColor = isDark ? '#ffffff' : '#353536'
  // 路由
  const router = useRouter()

  const prompt = prompts.zh
  useEffect(()=>{
    // console.log(isDark)
  },[isDark])

  const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";

  // 删除本地prompt
  const onDeleteMyPromptHandle = (id:number) =>{
    deletedMyPrompt(id)
  }

  const onEditHandle = () => {
    const isMy = prompts.tags.some((item:any) => item == 'MY')
    console.log(isMy)
    if (isMy) {
      return router.push(`prompt/edit?id=${prompts.id}&cat=MY`, { scroll: true })
    }else{
      return router.push(`prompt/edit?id=${prompts.id}`, { scroll: true })
    }
  }
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-0 justify-between">
        
        <div className="flex flex-col">
          {/* 标题 */}
          <p className="text-md">{prompt.title}</p>
          {/* 分类 */}
          <p>
              {prompts.tags.map((tag: string)=>(
                <span key={tag}>
                  <span className="text-small text-default-500">
                    {tag}
                  </span>
                  &nbsp;
                </span>
              ))}
          </p>

        </div>
        <Button color="default" isIconOnly aria-label="Like">
          <HeartIcon  />
        </Button>
      </CardHeader>
      <Divider />
      <CardBody className=" max-h-[400px] overflow-h-scroll" onContextMenu={(e) => copyHandle(prompt.description,e)}>
        <ScrollShadow hideScrollBar size={100} className="w-full h-[400px]">
          <p>
            {prompt.description}
          </p>
        </ScrollShadow>
      </CardBody>
      <CardFooter className="flex justify-evenly">
        
        <Button onClick={() => onEditHandle()} endContent={<Edit color={iconColor} size={20} />}>
          <span>
            Edit
          </span>
        </Button>
        {/* 点赞 */}
        <Dropdown  placement="top">
          <DropdownTrigger className="">
            <Button
              className=" rounded-full "
              variant="faded"
            >
              <MoreVertical color={iconColor} />
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Action event example"
            onAction={(key) =>{}}
          >
            <DropdownSection aria-label="Profile & Actions" showDivider className="">
            <DropdownItem key="ThumbsUp">
                <div className=" flex justify-between items-center  gap-3">
              <Button color="default" isIconOnly aria-label="Like">
                <ThumbsUp color={iconColor} /> 
              </Button>
              <span className="flex-1">
                ThumbsUp
              </span>
              </div>
            </DropdownItem>
            <DropdownItem key="ThumbsDown">
                <div className=" flex justify-between items-center gap-3">
              <Button color="default" isIconOnly aria-label="Like">
                <ThumbsDown color={iconColor} />
              </Button>
                  <span className="flex-1">
                    ThumbsDown
                  </span>
                  </div>
            </DropdownItem>
              <DropdownItem
                key="delete"
                className="text-danger"
                color="danger"
                onClick={() => onDeleteMyPromptHandle(prompts.id)}
              >
                <div className=" flex justify-between items-center gap-3">
                  <Button color="default" isIconOnly aria-label="Like">
                    <DeleteDocumentIcon color={iconColor} />
                  </Button>
                  <span className="flex-1">
                    Delete prompt
                  </span>
                </div>
              </DropdownItem>
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
      </CardFooter>
      <Divider />
      <CardFooter className="flex justify-evenly">
        <Link
          size="sm"
          isExternal
          href="https://chat.openai.com/"
          showAnchorIcon
        >
          ChatGPT
        </Link>
        <Link
          size="sm"
          isExternal
          color="secondary"
          href="https://poe.com/"
          showAnchorIcon
        >
          Poe
        </Link>
        <Link
          size="sm"
          isExternal
          color="success"
          href="https://claude.ai/"
          showAnchorIcon
        >
          ClaudeAI
        </Link>
        {/* 收藏 */}
        {/* <Button isIconOnly color="danger" aria-label="Like">
          <HeartIcon width={20} height={20} />
        </Button>  */}
      </CardFooter>
    </Card>
  );
}
