export interface menu {
	path: string;
	title: string;
	type: React.ReactNode;
	icon: { outline: React.ReactNode; solid: React.ReactNode };
	isSubmenu: boolean;
	submenu: menu[];
}
