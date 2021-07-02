import { Collapse } from "./collapse/collapse";
import { Header } from "./header/header";
import { Heading } from "./heading/heading";
import s from "./sidebar.module.css";
import { IMenu, IUserInfo, ISection } from "./sidebar.interface";
import { WrappedProps as ChildWrapperProps } from "./menu/menu";

export const Sidebar = (
	props: {
		headerData: IUserInfo;
		bodyData: ISection[];
		footerData: IMenu[];
		path: string;
		setPath: (path: string) => void;
	} & ChildWrapperProps
): JSX.Element => {
	function getSection(section: ISection, key: number | string): JSX.Element {
		return (
			<div key={key}>
				<Heading>{section.title}</Heading>
				{section.data.map((menu, menuIndex) =>
					getMenu(menu, menuIndex)
				)}
			</div>
		);
	}

	function getMenu(menu: IMenu, key: number | string): JSX.Element {
		return (
			<div>
				{!menu.isDisable && (
					<Collapse
						key={key}
						menu={{
							...menu,
							isActive: props.path.includes(
								menu.path.toLowerCase()
							),
						}}
						path={props.path}
						setPath={props.setPath}
						as={props.as}
					/>
				)}
			</div>
		);
	}

	return (
		<div className={s.container}>
			{/* Header */}
			<Header userInfo={props.headerData} />

			{/* Body */}
			<div className={s.scroll}>
				{props.bodyData.map((section, sectionIndex) =>
					getSection(section, sectionIndex)
				)}
			</div>

			{/* Footer */}
			<div className={s.footer}>
				{props.footerData.map((menu, menuIndex) =>
					getMenu(menu, menuIndex)
				)}
			</div>
		</div>
	);
};
