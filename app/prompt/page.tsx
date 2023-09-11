'use client';
import React from "react";
import { title } from "@/components/primitives";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import CardLists from "@/components/CardLists";
import {prompt_tag,Prompt_tag} from '../../data/prompt'

export default function PromptPage() {
	let tabs = prompt_tag;
	return (
		<div className="w-full ">
			<div className="flex w-full flex-col">
				<Tabs className="mt-0 " aria-label="Dynamic tabs" items={tabs}>
					{(item) => (
						<Tab key={item.id} title={item.label}>
							<Card>
								<CardBody>
									<CardLists tag={item.tag} />
								</CardBody>
							</Card>
						</Tab>
					)}
				</Tabs>
			</div>  
		</div>
	);
}
