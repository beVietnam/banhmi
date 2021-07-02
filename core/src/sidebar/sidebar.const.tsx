import s from "./sidebar.module.css";
import { Icon, Tag } from "@moai/core";
import * as outline from "@banhmi/icon/outline";
import * as solid from "@banhmi/icon/solid";
import { IUserInfo, IMenu, ISection } from "./sidebar.interface";
import img from "./ic_home_bus.png";

//header
export const defaultUser: IUserInfo = {
	username: "beSomething",
	userRole: "super admin",
	userImg: <img src={img} alt="" />,
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

export const bodyData: ISection[] = [
	{
		title: "subsection",
		data: [
			{
				title: "Item title",
				path: "/1000",
				iconNormal: (
					<Icon display="inline" component={outline.DownloadClound} />
				),
				iconActive: (
					<Icon display="inline" component={solid.DownloadClound} />
				),
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
			},
			{
				title: "Item title",
				path: "/2000",
				after: typeBadge,
				iconNormal: (
					<Icon display="inline" component={outline.DownloadClound} />
				),
				iconActive: (
					<Icon display="inline" component={solid.DownloadClound} />
				),
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
			},

			{
				title: "Item title",
				path: "/3000",
				after: typeLozenge,
				iconNormal: (
					<Icon display="inline" component={outline.DownloadClound} />
				),
				iconActive: (
					<Icon display="inline" component={solid.DownloadClound} />
				),
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
			},
		],
	},
	{
		title: "subsection",
		data: [
			{
				title: "Item title",
				path: "/4000",
				iconNormal: (
					<Icon display="inline" component={outline.DownloadClound} />
				),
				iconActive: (
					<Icon display="inline" component={solid.DownloadClound} />
				),
				childrens: [
					{ title: "Item title", path: "/4101" },
					{
						title: "Item title",
						path: "/4102",
						after: typeBadge,
					},
					{
						title: "Item title",
						path: "/4103",
						after: typeLozenge,
					},
				],
			},
			{
				title: "Item title",
				path: "/5000",
				after: typeBadge,
				iconNormal: (
					<Icon display="inline" component={outline.DownloadClound} />
				),
				iconActive: (
					<Icon display="inline" component={solid.DownloadClound} />
				),
				childrens: [
					{ title: "Item title", path: "/5101" },
					{
						title: "Item title",
						path: "/5102",
						after: typeBadge,
					},
					{
						title: "Item title",
						path: "/5103",
						after: typeLozenge,
					},
				],
			},

			{
				title: "Item title",
				path: "/6000",
				after: typeLozenge,
				iconNormal: (
					<Icon display="inline" component={outline.DownloadClound} />
				),
				iconActive: (
					<Icon display="inline" component={solid.DownloadClound} />
				),
				childrens: [
					{ title: "Item title", path: "/6101" },
					{
						title: "Item title",
						path: "/6102",
						after: typeBadge,
					},
					{
						title: "Item title",
						path: "/6103",
						after: typeLozenge,
					},
				],
			},
			{
				title: "Item title",
				path: "/7000",
				iconNormal: (
					<Icon display="inline" component={outline.DownloadClound} />
				),
				iconActive: (
					<Icon display="inline" component={solid.DownloadClound} />
				),
			},
			{
				title: "Item title",
				path: "/8000",
				iconNormal: (
					<Icon display="inline" component={outline.DownloadClound} />
				),
				iconActive: (
					<Icon display="inline" component={solid.DownloadClound} />
				),
			},
		],
	},
];

//footer
export const footerData: IMenu[] = [
	{
		title: "Cài đặt",
		path: "/setting",
		iconNormal: <Icon display="inline" component={outline.Tool} />,
		iconActive: <Icon display="inline" component={solid.Tool} />,
		isChild: false,
	},
	{
		title: "Phân quyền",
		path: "/permission",
		iconNormal: <Icon display="inline" component={outline.User} />,
		iconActive: <Icon display="inline" component={solid.User} />,
		isChild: false,
	},
	{
		title: "Thông báo",
		path: "/noti",
		iconNormal: <Icon display="inline" component={outline.Noti} />,
		iconActive: <Icon display="inline" component={solid.Noti} />,
		isChild: false,
		isDisable: true,
	},
	{
		title: "Thay đổi mật khẩu",
		path: "/change_password",
		iconNormal: <Icon display="inline" component={outline.Lock} />,
		iconActive: <Icon display="inline" component={solid.Lock} />,
		isChild: false,
		isDisable: true,
	},
	{
		title: "Đăng xuất",
		path: "/logout",
		iconNormal: <Icon display="inline" component={outline.Logout} />,
		iconActive: <Icon display="inline" component={solid.Logout} />,
		isChild: false,
	},
];
