export interface itemInfo {
	title: string;
	badge?: number;
	isLozenge?: boolean;
}

export interface highlevel {
	outlineIcon: React.ReactNode;
	solidIcon: React.ReactNode;
	isActive: boolean;
	info: itemInfo;
	lowlevelItems: itemInfo[];
}

export interface dropdownItem {
	title: string;
	highlevelItems: highlevel[];
}

export interface userInfo {
	name: string;
	role: string;
	picture: React.ReactNode;
}
