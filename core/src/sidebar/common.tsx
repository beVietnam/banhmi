import React from "react";

export interface IMenu {
	title: string;
	path: string;
	after?: React.ReactNode;
	iconNormal?: React.ReactNode;
	iconActive?: React.ReactNode;
	childrens?: IMenu[];
	isActive?: boolean;
}
