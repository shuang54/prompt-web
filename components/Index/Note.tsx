'use client';
import React, { useEffect } from 'react'
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import {  siteConfig } from '@/config/site';
import { useTranslation } from 'react-i18next';
import { ShowListHandel } from '@/utils';
const Note = () => {
  const { t, i18n } = useTranslation();
  const [selected, setSelected] = React.useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if(index >= siteConfig.ShowNote.length) index = 0;
      setSelected(siteConfig.ShowNote[index].en.title);
      index++
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div>
      <div id='Precautions' className="flex flex-col gap-2 justify-center w-full items-center mt-10 lg:mt-18  lg:mb-10 mb-3">
				<div>
					<h1 className="tracking-tight inline font-semibold from-[#f31260] to-[#f31260] text-2xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b">
						{t('Precautions')}&nbsp;
					</h1>
				</div>
			</div>
    
    <div className="flex w-full flex-col justify-center items-center">
      <Tabs
        aria-label="Options"
        selectedKey={selected}
        onSelectionChange={setSelected}
        size='lg'
        color='danger'
      >
        {siteConfig.ShowNote.map(item=>{
          let cItem = ShowListHandel(item)
          return(
            <Tab key={cItem.title} title={cItem.title}>
          <Card>
            <CardBody>
                  {cItem.content}
            </CardBody>
          </Card>
        </Tab>
        )})}
      </Tabs>
    </div>
    </div>
  );
}

export default Note