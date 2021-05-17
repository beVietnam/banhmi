import s from "./menu.module.css";
import * as common from "../common";
import { Icon } from "@moai/core";
import * as solid from "@banhmi/icon/solid";
import { useEffect, useState } from "react";

const Menu = (props: {
	menu: common.menu;
	onClick: (path: string[]) => void;
	defaultPath: string[];
	parentPath: string;
}): JSX.Element => {
	const [isActive, setActive] = useState(
		props.defaultPath.includes(props.menu.path)
	);

	useEffect(() => {
		setActive(props.defaultPath.includes(props.menu.path));
	}, [props.defaultPath]);

	function activateMenu() {
		setActive(!isActive);
		let newPath = props.defaultPath.slice();
		console.log("cur path " + newPath);

		console.log("cur state " + isActive);

		if (!isActive) {
			newPath.push(props.menu.path);
		} else {
			newPath.splice(newPath.indexOf(props.menu.path), 1);
			if (props.menu.submenu) {
				props.menu.submenu.map((item) => {
					let index = newPath.indexOf(item.path) || -1;
					if (index != -1)
						newPath.splice(newPath.indexOf(item.path), 1);
				});
			}
		}
		props.onClick(newPath);
		console.log("new path " + newPath);
	}

	return (
		<div>
			<div
				className={[s.container, isActive ? s.active : ""].join(" ")}
				onClick={() => activateMenu()}
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
