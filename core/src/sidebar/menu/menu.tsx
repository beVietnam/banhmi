import s from "./menu.module.css";
import * as common from "../common";
import { Icon } from "@moai/core";
import * as solid from "@banhmi/icon/solid";
import { useEffect, useState } from "react";

const Menu = (props: {
	menu: common.menu;
	onClick: (path: string) => void;
	defaultPath: string;
	parentPath: string;
}): JSX.Element => {
	const [isActive, setActive] = useState(
		props.defaultPath.includes(props.menu.path)
	);

	useEffect(() => {
		setActive(props.defaultPath.includes(props.menu.path));
	}, [props.defaultPath]);

	return (
		<div>
			<div
				className={[s.container, isActive ? s.active : ""].join(" ")}
				onClick={() => {
					setActive(!isActive);
					props.onClick(props.parentPath + props.menu.path);
				}}
			>
				{/* icon */}
				{props.menu.icon && !isActive && (
					<span className={s.icon}>{props.menu.icon.outline}</span>
				)}
				{props.menu.icon && isActive && (
					<span className={s.icon}>{props.menu.icon.solid}</span>
				)}

				{/* title */}
				<span
					className={[
						s.title,
						props.menu.isSubmenu ? s.line : "",
					].join(" ")}
				>
					{props.menu.title}
				</span>

				{/* type */}
				<span className={s.right}>
					<span>{props.menu.type}</span>

					{/* dropdown */}
					{props.menu.submenu && props.menu.submenu.length > 0 && (
						<span className={s.dropdown}>
							<Icon
								display="inline"
								component={solid.ChevronDown}
							></Icon>
						</span>
					)}
				</span>
			</div>
			{/* submenu items */}
			{props.menu.submenu &&
				isActive &&
				props.menu.submenu.map((item, index) => {
					return (
						<div key={index} className={s.submenu}>
							<Menu
								menu={item}
								onClick={props.onClick}
								defaultPath={props.defaultPath}
								parentPath={props.menu.path}
							/>
						</div>
					);
				})}
		</div>
	);
};

export default Menu;
