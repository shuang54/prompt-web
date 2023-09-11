"use client";
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
const I18n = () => {
  const { t,i18n } = useTranslation();

  // 默认语言
  const [languages, setLanguages] = useState(i18n.languages);
  const supportedLngs = i18n.options.supportedLngs || []
  const changeLocale = (str:string) => {
    i18n.changeLanguage(str)
    localStorage.setItem('locale', str);
  };
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([languages]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );
  useEffect(() => {
    i18n.changeLanguage(selectedValue)
    localStorage.setItem('locale', selectedValue);
  }, [selectedValue])
  return (
    <div>
      <Dropdown>
        <DropdownTrigger>
          <Button
            variant="bordered"
            className="capitalize"
          >
            {selectedValue}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Single selection example"
          variant="flat"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={selectedKeys}
          onSelectionChange={setSelectedKeys}
        >
          {/* <button key={item} onClick={() => changeLocale(item)}>{item}</button> */}
          {supportedLngs.map(item => (
          <DropdownItem key={item}>{item}</DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default I18n;