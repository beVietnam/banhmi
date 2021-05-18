import { storiesOf } from "@storybook/react";
import Sidebar from "./sidebar";
import { Tag, Icon } from "@moai/core";
import * as outline from "@banhmi/icon/outline";
import * as solid from "@banhmi/icon/solid";
import * as common from "./common";
import s from "./sidebar.module.css";
import { useState } from "react";

//data
const typeBadge = (
	<span className={s.badge}>
		<Tag color={Tag.colors.red}>3</Tag>
	</span>
);

const typeLozenge = (
	<span className={s.lozenge}>
		<Tag color={Tag.colors.green}>NEW</Tag>
	</span>
);

const menu1: common.IMenu = {
	title: "Item title",
	path: "/1000",
	iconNormal: <Icon display="inline" component={outline.DownloadClound} />,
	iconActive: <Icon display="inline" component={solid.DownloadClound} />,
	childrens: [
		{ title: "Item title", path: "/1101" },
		{
			title: "Item title",
			path: "/1102",
			after: typeBadge,
		},
		{
			title: "Item title",
			path: "/1103",
			after: typeLozenge,
		},
	],
};

const menu2: common.IMenu = {
	title: "Item title",
	path: "/2000",
	after: typeBadge,
	iconNormal: <Icon display="inline" component={outline.DownloadClound} />,
	iconActive: <Icon display="inline" component={solid.DownloadClound} />,
	childrens: [
		{ title: "Item title", path: "/2101" },
		{
			title: "Item title",
			path: "/2102",
			after: typeBadge,
		},
		{
			title: "Item title",
			path: "/2103",
			after: typeLozenge,
		},
	],
};

const menu3: common.IMenu = {
	title: "Item title",
	path: "/3000",
	after: typeLozenge,
	iconNormal: <Icon display="inline" component={outline.DownloadClound} />,
	iconActive: <Icon display="inline" component={solid.DownloadClound} />,
	childrens: [
		{ title: "Item title", path: "/3101" },
		{
			title: "Item title",
			path: "/3102",
			after: typeBadge,
		},
		{
			title: "Item title",
			path: "/3103",
			after: typeLozenge,
		},
	],
};

storiesOf("Sidebar", module).add("Main", () => {
	return (
		<Sidebar menuItems={[menu1, menu2, menu3]} sectionTitle="subsection" />
	);
});
