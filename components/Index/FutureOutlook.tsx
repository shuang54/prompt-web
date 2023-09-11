
"use client";
import React, { useEffect } from 'react'
import { Accordion, AccordionItem } from "@nextui-org/react";
import { siteConfig } from '@/config/site';
import { useTranslation } from 'react-i18next';
import { ShowListHandel } from '@/utils';
// the hook
const FutureOutlook = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className='w-full'>
      <div id='FutureOutlook' className="flex flex-col gap-2 justify-center w-full items-center mt-10 lg:mt-18 lg:mb-10 mb-3">
				<div>
					<h1 className="tracking-tight inline font-semibold from-[#f881ab] to-[#f31260] text-2xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b">
						{t('Future outlook')}&nbsp;
					</h1>
				</div>
			</div>
    
    <Accordion variant="bordered">
      {siteConfig.FutureOutlook.map(item=>{
        let cItem = ShowListHandel(item)
        return(
        <AccordionItem key={cItem.title} aria-label={cItem.title} title={cItem.title}>
          {cItem.content}
      </AccordionItem>
        )})}
    </Accordion>
    </div>
  );
}
export default FutureOutlook