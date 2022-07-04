import { Collapse } from "./collapse/collapse";
import { Header } from "./header/header";
import { Heading } from "./heading/heading";
import s from "./sidebar.module.css";
import { Props, MenuProps, SectionProps } from "./sidebar.interface";
import { WrappedProps as ChildWrapperProps } from "./menu/menu";
import { memo } from "react";

const MenuItem = memo(({ menu, path, setPath, as }: MenuProps) => {
	return (
		<Collapse
			menu={{
				...menu,
				isActive: path?.includes(menu.path.toLowerCase()),
			}}
			path={path}
			setPath={setPath}
			as={as}
		/>
	);
});

const BodySection = memo(({ section, path, setPath, as }: SectionProps) => {
	return (
		<div>
			{section.title && <Heading>{section.title}</Heading>}
			{section.data.map((menu, menuIndex) => (
				<MenuItem
					key={menuIndex}
					menu={menu}
					path={path}
					setPath={setPath}
					as={as}
				/>
			))}
		</div>
	);
});

export const Sidebar = (props: Props & ChildWrapperProps): JSX.Element => {
	const { widthPx = 232 } = props;

	return (
		<div className={s.container} style={{ width: `${widthPx}px` }}>
			{/* Header */}
			<Header userInfo={props.headerData} />

			{/* Body */}
			<div className={s.scroll}>
				{/* user */}
				{props.userArea && (
					<div className={s.userArea}>
						<Header
							userInfo={props.userArea}
							isSecondary
						/>
					</div>
				)}

				{props.bodyData.map((section, key) => (
					<BodySection
						key={key}
						section={section}
						path={props.path}
						setPath={props.setPath}
						as={props.as}
					/>
				))}
			</div>

			{/* Footer */}
			<div className={s.footer}>
				{props.footerData.map((menu, menuIndex) => (
					<MenuItem
						key={menuIndex}
						menu={menu}
						path={props.path}
						setPath={props.setPath}
						as={props.as}
					/>
				))}
				{/* Footernote.. */}
				{props.footerNote && (
					<div className={s.footerNote}>{props.footerNote}</div>
				)}
			</div>
		</div>
	);
};
