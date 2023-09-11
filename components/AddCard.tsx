import React, { useEffect } from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import  PlusSquare  from "./Icon/PlusSquare";
import { ScrollShadow } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
export default function AddCard() {
  const theme = useTheme();
  const isDark = theme.theme == 'dark'
  const iconColor = isDark ? '#ffffff' : '#353536'
  // 路由
  const router = useRouter()
  return (
    <Card className="max-w-[400px]  cursor-pointer">
      <CardHeader className="flex gap-0 justify-between">
      </CardHeader>
      <CardBody onClick={() => router.push('prompt/edit')} className=" max-h-[400px] overflow-h-scroll">
        <ScrollShadow hideScrollBar size={100} className="w-full h-[400px] flex justify-center items-center">
          <PlusSquare color={iconColor} />
        </ScrollShadow>
      </CardBody>
      <CardFooter className="flex justify-evenly">
      </CardFooter>
    </Card>
  );
}
