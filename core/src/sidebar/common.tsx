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
	isDisable?: boolean;
}

export interface ISection {
	title: string;
	data: IMenu[];
}
