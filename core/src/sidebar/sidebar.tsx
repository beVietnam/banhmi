import { Collapse } from "./collapse/collapse";
import { Header } from "./header/header";
import { Heading } from "./heading/heading";
import s from "./sidebar.module.css";
import { IMenu, IUserInfo, ISection } from "./sidebar.interface";
import { WrappedProps as ChildWrapperProps } from "./menu/menu";

interface Props {
	headerData: IUserInfo;
	bodyData: ISection[];
	footerData: IMenu[];
	widthPx?: number;
	path: string;
	setPath: (path: string) => void;
}

export const Sidebar = (props: Props & ChildWrapperProps): JSX.Element => {
	const { widthPx = 232 } = props;

	function getSection(section: ISection, key: number | string): JSX.Element {
		return (
			<div key={key}>
				{section.title && <Heading>{section.title}</Heading>}
				{section.data.map((menu, menuIndex) =>
					getMenu(menu, menuIndex)
				)}
			</div>
		);
	}

	function getMenu(menu: IMenu, key: number | string): JSX.Element {
		return (
			<div key={key}>
				{!menu.isDisable && (
					<Collapse
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
		<div className={s.container} style={{ width: `${widthPx}px` }}>
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
