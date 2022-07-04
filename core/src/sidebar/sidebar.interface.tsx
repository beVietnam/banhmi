import { WrappedProps as ChildWrapperProps } from "./menu/menu";
export interface IUserInfo {
	username: string;
	userRole: string;
	userImg: React.ReactNode;
}

export interface IMenu {
	title: string;
	path: string;
	after?: React.ReactNode;
	iconNormal?: React.ReactNode;
	iconActive?: React.ReactNode;
	isChild?: boolean;
	childrens?: IMenu[];
	isActive?: boolean;
	hidden?: boolean;
}

export interface ISection {
	title?: string;
	data: IMenu[];
}

export interface Props {
	headerData: IUserInfo;
	userArea?: IUserInfo;
	bodyData: ISection[];
	footerData: IMenu[];
	footerNote?: React.ReactNode;
	widthPx?: number;
	path?: string;
	/**
	 * callback when click tab, can to use setPath to navigate
	 */
	setPath?: (path: string) => void;
}

export interface MenuProps {
	menu: IMenu;
	path: Props["path"];
	setPath: Props["setPath"];
	as: ChildWrapperProps["as"];
}

export interface SectionProps {
	section: ISection;
	path: Props["path"];
	setPath: Props["setPath"];
	as: ChildWrapperProps["as"];
}
