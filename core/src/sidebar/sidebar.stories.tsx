import { storiesOf } from "@storybook/react";
import { Sidebar } from "./sidebar";
import { useState } from "react";
import {
	defaultUser,
	bodyData,
	footerData,
	footerNote,
	defaultHeader,
} from "./sidebar.const";
import s from "./sidebar.module.css";
import { DivPx } from "@moai/core";

storiesOf("Sidebar", module).add("Main", () => {
	const [path, setPath] = useState("/");
	const MenuItemWrapper: React.FC<{ href: string }> = ({
		href,
		children,
	}) => {
		return (
			<div onClick={() => alert("Foo")}>
				<a href={href}>{children}</a>
			</div>
		);
	};

	return (
		<div className={s.stories}>
			<Sidebar
				headerData={defaultHeader}
				bodyData={bodyData}
				footerData={footerData}
				as={MenuItemWrapper}
			/>
			<DivPx size={16} />
			<Sidebar
				headerData={defaultHeader}
				bodyData={bodyData}
				footerData={footerData}
				widthPx={350}
				as={MenuItemWrapper}
				path={path}
				setPath={setPath}
				footerNote={footerNote}
				userArea={defaultUser}
			/>
		</div>
	);
});
