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

const defaultSubMenu: common.menu = {
	path: "/101",
	title: "Item title",
	type: null,
	icon: null,
	isSubmenu: true,
	submenu: [],
};

let submenu1 = Object.assign({}, defaultSubMenu);
submenu1.path = "/102";
submenu1.type = typeBadge;

let submenu2 = Object.assign({}, defaultSubMenu);
submenu2.path = "/103";
submenu2.type = typeLozenge;
submenu2.submenu = [defaultSubMenu, submenu1];

const defaultMenu: common.menu = {
	path: "/1000",
	title: "Item title",
	type: null,
	icon: {
		outline: <Icon display="inline" component={outline.DownloadClound} />,
		solid: <Icon display="inline" component={solid.DownloadClound} />,
	},
	isSubmenu: false,
	submenu: [defaultSubMenu, submenu1, submenu2],
};

let menu1 = Object.assign({}, defaultMenu);
menu1.path = "/2000";
menu1.type = typeBadge;

let menu2 = Object.assign({}, defaultMenu);
menu2.path = "/3000";
menu2.type = typeLozenge;

storiesOf("Sidebar", module).add("Main", () => {
	return <Sidebar menuItems={[defaultMenu, menu1, menu2]} />;
});
