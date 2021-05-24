import { storiesOf } from "@storybook/react";
import { useState } from "react";
import s from "./sidebar.module.css";
import { Icon, Tag, DivEm } from "@moai/core";
import * as outline from "@banhmi/icon/outline";
import * as solid from "@banhmi/icon/solid";
import { IUserInfo, IMenu } from "./common";
import { Collapse } from "./collapse/collapse";
import { Header } from "./header/header";
import { Heading } from "./heading/heading";

//data
//header
const defaultUser: IUserInfo = {
	username: "beSomething",
	userRole: "super admin",
	userImg: (
		<img
			src="https://s3-alpha-sig.figma.com/img/a005/027c/2d8feba34408764eed05849d1e2b026b?Expires=1621814400&Signature=Bz852dkPkIQkcjzw4Oj10Z2fFtaHQ4aX08YPiAMfWLaVElrRT4YHl8x4CH6cGdvUnBCMELstzo-Q5fsRMRwyhRmSv-S3zNzzXrUdzx5TF1n5xWtO1fh-zHXMiScUSrDzDLjIc7KxObT3ZNaGqKcEvZSqEhK2BCl6MhF-HCDKVSb1-gX3s3EwVfkQM~e8ptl-7eRlaAOGwcXRXClJWLLj1Jr5alg64CuX00~J2MOskbXr~B5ZOxOc-tkQIEkeca~ZJbpnTJXnZvrMhVo5ONWo1v7X0tY1t4FG~IdjKQMBdFY9n6hxihWj9rd~FD-L-QjgrjzKX6ghRiZp2Cn0Y9W~wQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
			alt=""
		/>
	),
};

//body
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

const menu1: IMenu = {
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

const menu2: IMenu = {
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

const menu3: IMenu = {
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

//footer
const setting: IMenu = {
	title: "Cài đặt",
	path: "/setting",
	iconNormal: <Icon display="inline" component={outline.Tool} />,
	iconActive: <Icon display="inline" component={solid.Tool} />,
	isChild: false,
};
const user: IMenu = {
	title: "Phân quyền",
	path: "/user",
	iconNormal: <Icon display="inline" component={outline.User} />,
	iconActive: <Icon display="inline" component={solid.User} />,
	isChild: false,
};
const noti: IMenu = {
	title: "Thông báo",
	path: "/noti",
	iconNormal: <Icon display="inline" component={outline.Noti} />,
	iconActive: <Icon display="inline" component={solid.Noti} />,
	isChild: false,
};
const lock: IMenu = {
	title: "Thay đổi mật khẩu",
	path: "/lock",
	iconNormal: <Icon display="inline" component={outline.Lock} />,
	iconActive: <Icon display="inline" component={solid.Lock} />,
	isChild: false,
};
const logout: IMenu = {
	title: "Đăng xuất",
	path: "/logout",
	iconNormal: <Icon display="inline" component={outline.Logout} />,
	iconActive: <Icon display="inline" component={solid.Logout} />,
	isChild: false,
};

storiesOf("Sidebar", module).add("Main", () => {
	const [path, setPath] = useState("/");
	return (
		<div className={s.container}>
			{/* Header */}
			<Header userInfo={defaultUser} />

			{/* Body */}
			<Heading>subsection</Heading>
			<Collapse menu={menu1} path={path} setPath={setPath} as="a" />
			<Collapse menu={menu2} path={path} setPath={setPath} as="a" />
			<Collapse menu={menu3} path={path} setPath={setPath} as="a" />

			{/* Footer */}
			<div className={s.footer}>
				<Collapse menu={setting} path={path} setPath={setPath} as="a" />
				<Collapse menu={user} path={path} setPath={setPath} as="a" />
				<Collapse menu={noti} path={path} setPath={setPath} as="a" />
				<Collapse menu={lock} path={path} setPath={setPath} as="a" />
				<Collapse menu={logout} path={path} setPath={setPath} as="a" />
			</div>
		</div>
	);
});
