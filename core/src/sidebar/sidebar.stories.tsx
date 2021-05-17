import { storiesOf } from "@storybook/react";
import Sidebar from "./sidebar";
import { Tag, Icon } from "@moai/core";
import * as outline from "@banhmi/icon/outline";
import * as solid from "@banhmi/icon/solid";
import * as common from "./common";
import s from "./sidebar.module.css";

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

const menu1: common.menu = {
	path: "/1000",
	title: "Item title",
	icon: {
		outline: <Icon display="inline" component={outline.DownloadClound} />,
		solid: <Icon display="inline" component={solid.DownloadClound} />,
	},
	isSubmenu: false,
	submenu: [
		{ path: "/1001", title: "Item title", isSubmenu: true },
		{
			path: "/1002",
			title: "Item title",
			isSubmenu: true,
			type: typeBadge,
		},
		{
			path: "/1003",
			title: "Item title",
			isSubmenu: true,
			type: typeLozenge,
		},
	],
};

const menu2: common.menu = {
	path: "/2000",
	title: "Item title",
	icon: {
		outline: <Icon display="inline" component={outline.DownloadClound} />,
		solid: <Icon display="inline" component={solid.DownloadClound} />,
	},
	isSubmenu: false,
	submenu: [
		{ path: "/2001", title: "Item title", isSubmenu: true },
		{
			path: "/2002",
			title: "Item title",
			isSubmenu: true,
			type: typeBadge,
		},
		{
			path: "/2003",
			title: "Item title",
			isSubmenu: true,
			type: typeLozenge,
		},
	],
};

const menu3: common.menu = {
	path: "/3000",
	title: "Item title",
	icon: {
		outline: <Icon display="inline" component={outline.DownloadClound} />,
		solid: <Icon display="inline" component={solid.DownloadClound} />,
	},
	isSubmenu: false,
	submenu: [
		{ path: "/3001", title: "Item title", isSubmenu: true },
		{
			path: "/3002",
			title: "Item title",
			isSubmenu: true,
			type: typeBadge,
		},
		{
			path: "/3003",
			title: "Item title",
			isSubmenu: true,
			type: typeLozenge,
		},
	],
};

storiesOf("Sidebar", module).add("Main", () => {
	return <Sidebar menuItems={[menu1, menu2, menu3]} />;
});
