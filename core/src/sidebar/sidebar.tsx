import { useState } from "react";
import { Collapse } from "./collapse/collapse";
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
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

			{/* Footer */}
			<Footer data={props.footerData} />
		</div>
	);
};
