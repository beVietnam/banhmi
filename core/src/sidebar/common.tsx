export interface lowlevel {
	title: string;
	badge?: number;
	isLozenge?: boolean;
}

export interface highlevel {
	// icon: React.ReactNode;
	title: string;
	badge?: number;
	isLozenge?: boolean;
	items: lowlevel[];
}

export interface dropdownItem {
	title: string;
	items: highlevel[];
}

export interface userInfo {
	name: string;
	role: string;
	avatar: React.ReactNode;
}
