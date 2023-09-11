'use client';
import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Tooltip, Input } from "@nextui-org/react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { useSearchParams } from 'next/navigation'
import { prompts, Prompts } from '../../../data/prompt'
import { PlusIcon } from '../../../components/Icon/PlusIcon'
import { DeleteIcon } from '../../../components/Icon/DeleteIcon'
import { EditIcon } from "../../../components/Icon/EditIcon";
import ReactHtmlParser from 'react-html-parser';
import { copyHandle, getRandomNumber } from '@/utils/index'
import Copy from "@/components/Copy";
import { VariableType } from '@/types/index'
import { empty_prompt } from "../../../data/prompt";
import { toast } from "react-hot-toast";
import { addMyPrompt, getMyPrompt, saveMyPrompt } from "@/utils/myPromptUtils";
export default function EditPage() {

		// 获取id
		const searchParams = useSearchParams()
		const id = searchParams.get('id')
		const cat = searchParams.get('cat')
		const [promptData, setPromptData] = useState(()=>{
			if (id == null) {
				// 没有id，返回空数组
				return empty_prompt

			} else {

				// 根据id，获取prompt数据
				if (cat && cat == 'MY'){
					return getMyPrompt().filter(prompt => prompt.id == id)[0]
				}else{
					return prompts.filter(prompt => prompt.id == id)[0]
				}

			}
		})
	// 获取prompt
	const [prompt, setPrompt] = useState(promptData.zh.prompt)

	// 变量列表 
	const [variableList, setVariableList] = useState(promptData.zh.variable || [])
	// table的行头数据 key
	const columns = [
		{
			key: "key",
			label: "KEY",
		},
		{
			key: "describe",
			label: "DESCRIBE",
		},
		{
			key: "operate",
			label: "OPERATE",
		}
	];
	// 设置选择框的选中列表
		const [selectedKeys, setSelectedKeys] = useState(variableList.filter((variable) => variable.isSelected).map((variable) => variable.key));
	useEffect(() => {
	
		// 监听 selectedKeys 的变化
		const handleSelectedKeysChange = () => {
			// 遍历 selectedKeys 并更新 variable 中的对应 isSelected 值
				variableList.forEach((variable,index) => {
					let isSelected = true
					// 将 selectedKeys 转换为 Array 对象
					if ([...selectedKeys].includes(variable.key)) {
						isSelected = true;
					}else{
						isSelected = false
					}
					updateValue(index, isSelected,'isSelected')
					// setVariableList(prevList => {
					// 	const updatedList = [...prevList];
					// 	updatedList[index] = { ...updatedList[index], isSelected: isSelected };
					// 	return updatedList;
					// });
				});
		};

		handleSelectedKeysChange();
	}, [selectedKeys]);
	const hasNewKeyHandle = (key:string):string =>{
		const hasNewKey = variableList.find((variable) => variable.key === key);
		if (hasNewKey) {
			// 存在 key 为 'new key' 的对象
			return key + getRandomNumber(4)
		} else {
			// 不存在 key 为 'new key' 的对象
			return key
		}
	}
	// 添加变量
	const addVariable = () => {
		// 添加新的变量到列表中
		setVariableList([...variableList, { 'key': hasNewKeyHandle('key'), 'describe': 'new describe', 'value': '', 'isSelected': true, 'id': getRandomNumber(4) }])
		// 选择新的key
		setSelectedKeys([...selectedKeys, hasNewKeyHandle('key')]);
	}
	// 删除变量
	const deleteVariable = (key:string) => {
		setVariableList(prevRows => prevRows.filter(row => row.key !== key));
		setSelectedKeys(selectedKeys => [...selectedKeys].filter((element) => element !== key));
	}

	// 渲染表格方法
	const renderCell = React.useCallback((item: any, columnKey:any) => {
		const cellValue = item[columnKey];

		switch (columnKey) {
			case "operate":
				return (
					<div className="relative flex items-center w-full gap-3 ">
						<Tooltip content="Edit variable">
							<span className="text-lg text-default-400 cursor-pointer active:opacity-50">
								<EditIcon onClick={() => openEditModel(item)} />
							</span>
						</Tooltip>
						<Tooltip color="danger" content="Delete variable">
							<span onClick={() => deleteVariable(item['key'])} className="text-lg text-danger cursor-pointer active:opacity-50">
								<DeleteIcon />
							</span>
						</Tooltip>
					</div>
				);
			default:
				return cellValue;
		}
	}, []);
	// 处理用户输入事件
	const handlePromptChange = (event:any) => {
		setPrompt(event.target.value)
	};

// 高亮方法
	function wrapKeywords(text: string, keywords: string[], isHighlighted = true): string {
		let modifiedText = text;
		keywords.forEach((keyword) => {
			const item = getVariableValue(keyword)
			if (item.isSelected == false){
				return keyword
			}
			const escapedKeyword = keyword.replace(/[.*+?^${}(),|[\]\\]/g , '\\$&');
			const pattern = new RegExp(`\\{\\{${escapedKeyword}\\}\\}` , 'gi');
			// 是否高亮显示
			if (isHighlighted ) {
				// 如果value不存在，显示描述内容
				if (!item.value) {
					modifiedText = modifiedText.replace(pattern, `<span class="px-1 rounded-md h-5 text-lg font-medium text-blue-500 bg-blue-200">${item.describe}</span>`)
				} else {
					modifiedText = modifiedText.replace(pattern, `<span class="px-1 rounded-md h-5 text-lg font-medium text-blue-500 bg-blue-200">${item.key}: ${item.value}</span>`)
				}
			}else{
				modifiedText = modifiedText.replace(pattern, `${item.value}`)
				
			}
		});
		return modifiedText;
	}
	// 
	const getVariableValue = (keyword: string) =>{
		let result = {};
		variableList.forEach((item) => {
			if (item.key === keyword) {
				result = item;
			}
		});
		return result
	}
	// 预览Prompt
	const [previewPrompt, setPreviewPrompt] = useState(prompt)
	const handlePromptHighlight = ()=>{
		if (variableList){
			setPreviewPrompt(wrapKeywords(prompt, variableList.map(item => item.key)))
		}
	}
	useEffect(()=>{
		handlePromptHighlight()
	}, [prompt, variableList])

	// 设置用户输入变量的值
	const updateValue = (index:number, newValue:string | boolean,value:string = 'value') => {
		setVariableList(prevList => {
			const updatedList = [...prevList];
			updatedList[index] = { ...updatedList[index], [[value]]: newValue };
			return updatedList
		});
	};
	// copy
	const promptCopyHandle = (e?: React.MouseEvent<HTMLDivElement, MouseEvent>) =>{
		if(e){
			e.preventDefault()
		}
		copyHandle(wrapKeywords(prompt, variableList.map(item => item.key),false))
	}

	// Modal
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const [editModelData, setEditModelData] = useState({
		id:'',
		key: '',
		describe: '',
		value: '',
		isSelected: false
	},)
	const openEditModel = (item:any) =>{
		setEditModelData(item)
		onOpen()
	}
	// 
	const onEditSubmit = () => {
		variableList.map((item,index) => {
			if (item.id == editModelData.id){
				updateValue(index, editModelData.key, 'key')
				updateValue(index, editModelData.describe, 'describe')
				if (editModelData.isSelected){
					setSelectedKeys([...selectedKeys, hasNewKeyHandle(editModelData.key)])
				}
				}
			})
	}

	// save
  const [isLoading, setIsLoading] = useState(false)
	const onSaveHandle = ()=>{
		setIsLoading(true)
		
		let data = promptData
		data.zh.prompt = prompt
			data.zh.variable	= variableList
		setPromptData(data)
		// console.log(data)
		setTimeout(()=>{
			saveMyPrompt(promptData)
			setIsLoading(false)
			toast.success('saved')
		},500)
	}
	return (
		<div className="flex w-full gap-5">
			<div className="w-[400px]">
				<Card className="max-w-[400px]">
					<CardHeader className="flex gap-3">
						<div className="flex flex-col items-start">
							<p className="text-md">Prompt</p>
							<p className=" text-sm text-zinc-400">Using variables:&#123;&#123;{'key'}&#125;&#125;</p>
						</div>
					</CardHeader>
					<Divider />
					<CardBody>
						<div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
							<Textarea
								className=" whitespace-pre-wrap"
								onBlur={() => handlePromptHighlight()}
								value={prompt}
								onChange={(e)=>handlePromptChange(e)}
								labelPlacement="outside"
								placeholder="Enter your prompt."
							/>
						</div>
					</CardBody>
				</Card>
				<Card className="max-w-[400px] mt-6">
					<CardHeader className="flex gap-3">
						<div className="flex flex-row justify-between items-center w-full">
							<p className="text-md">Set variable</p>
							<Button onClick={() => addVariable()} color="primary" endContent={<PlusIcon />}>
								Add New
							</Button>
						</div>
					</CardHeader>
					<Divider />
					<CardBody>
						<Table
							aria-label="Controlled table example with dynamic content"
							selectionMode="multiple"
							selectedKeys={selectedKeys}
							onSelectionChange={setSelectedKeys}
						>
							<TableHeader columns={columns}>
								{(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
							</TableHeader>
							<TableBody items={variableList} emptyContent={"No variable to display."}>
								{(item) => (
									<TableRow key={item.key}>
										{(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
									</TableRow>
								)}
							</TableBody>
						</Table>
					</CardBody>
				</Card>
			</div>
			{/* 右侧 */}
			<div className="flex-auto overflow-auto">
				<Card className="w-full">
					<CardHeader className="flex gap-3 justify-between">
						<div className="flex flex-col">
							<p className="text-md">Preview</p>
						</div>
						<div className=" gap-3 flex justify-center items-center">

							<Button color="primary" isLoading={isLoading} onClick={() => onSaveHandle()}>
								{isLoading ? 'Saving' : 'Save'}
						</Button>
						<Copy onClick={() => promptCopyHandle()} />
						</div>
					</CardHeader>
					<Divider />
					<CardBody >
						<div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 overscroll-x-auto">
							{/* <Textarea
								value={prompt}
								labelPlacement="outside"
								placeholder="Enter your description (Default autosize)"
							/> */}
							<div onContextMenu={(e) => promptCopyHandle(e)} >
								<pre className="w-full whitespace-pre-wrap">
									{ReactHtmlParser(previewPrompt)}
								</pre>
							</div>
						</div>
					</CardBody>
				</Card>
				{/* 输入value */}
				<Card className="w-full mt-6">
					<CardHeader className="flex gap-3">
						<div className="flex flex-col">
							<p className="text-md">Enter value</p>
						</div>
					</CardHeader>
					<Divider />
					<CardBody>
						
						<div className="flex flex-col w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
							{variableList.length == 0 && (<span className="text-gray-400">No variable to set.</span>)}
							{variableList.map((item,index) => (
								<Textarea
									minRows={1}
									key={item.key}
									isRequired
									label={item.key}
									labelPlacement="outside"
									placeholder={item.describe}
									value={item.value}
									onChange={e => updateValue(index, e.target.value)}
									className="w-full flex-row justify-center items-center gap-2"
								/>
							))}
						</div>
					</CardBody>
				</Card>

			</div>

			{/* Modal */}
			<Modal
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				placement="top-center"
			>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1">Set variable</ModalHeader>
							<ModalBody>
								<Input
									autoFocus
									label="key"
									placeholder="Enter your key"
									type="text"
									value={editModelData.key}
									onChange={(e) => setEditModelData({...editModelData,key:e.target.value})}
									variant="bordered" 
								/>
								<Input
									label="describe"
									placeholder="Enter your describe"
									type="text"
									value={editModelData.describe}
									onChange={(e) => setEditModelData({ ...editModelData, describe: e.target.value })}
									variant="bordered"
								/>
							</ModalBody>
							<ModalFooter>
								<Button color="danger" variant="flat" onPress={onClose}>
									Close
								</Button>
								<Button color="primary" onPress={onClose} onClick={() => onEditSubmit()}>
									Submit 
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</div>
	);
}
