import { useState } from "react";
import { Collapse } from "./collapse/collapse";
import { Header } from "./header/header";
import { Heading } from "./heading/heading";
import s from "./sidebar.module.css";
import { IMenu, IUserInfo, ISection } from "./common";

export const Sidebar = (props: {
	headerData: IUserInfo;
	bodyData: ISection[];
	footerData: IMenu[];
}): JSX.Element => {
	const [path, setPath] = useState("/");
	return (
		<div className={s.container}>
			{/* Header */}
			<Header userInfo={props.headerData} />

			<div className={s.scroll}>
				{/* Body */}
				{props.bodyData.map((value, index) => {
					return (
						<div key={index}>
							<Heading>{value.title}</Heading>
							{value.data.map((menu, menuIndex) => {
								return (
									<Collapse
										key={menuIndex}
										menu={menu}
										path={path}
										setPath={setPath}
										as="a"
									/>
								);
							})}
						</div>
					);
				})}
			</div>

			{/* Footer */}
			<div className={s.footer}>
				{props.footerData.map((menu, menuIndex) => {
					return (
						<Collapse
							key={menuIndex}
							menu={menu}
							path={path}
							setPath={setPath}
							as="a"
						/>
					);
				})}
			</div>
		</div>
	);
};
