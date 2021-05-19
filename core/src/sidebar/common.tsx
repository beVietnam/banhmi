export interface IMenu {
	title: string;
	path: string;
	after?: React.ReactNode;
	iconNormal?: React.ReactNode;
	iconActive?: React.ReactNode;
	isChild?: boolean;
	childrens?: IMenu[];
	isActive?: boolean;
}