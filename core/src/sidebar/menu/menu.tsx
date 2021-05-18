import s from "./menu.module.css";
import { IMenu } from "../common";
import { Icon } from "@moai/core";
import * as solid from "@banhmi/icon/solid";
import React, { useState, ComponentType, ElementType } from "react";

interface LinkProps {
	to: string;
	children: React.ReactNode;
}
function Link({ to, children }: LinkProps) {
	return <a href={to}>{children}</a>;
}

type WrappedProps<P = {}> = {
	as: ComponentType<P> | ElementType;
} & P;

const Menu = <T,>(
	props: {
		menu: IMenu;
		// routerName: string;
	} & WrappedProps<T>
): JSX.Element => {
	const [isActive, setActive] = useState(props.menu.isActive);
	// const Wrapper = ({ children, ...rest }: { children: React.ReactNode }) => {
	// 	if (props.component)
	// 		return <props.component {...rest}>{children}</props.component>;
	// 	return <div {...rest}>{children}</div>;
	// };

	const { as: Wrapper } = props;
	console.log(Wrapper);

	return (
		<div>
			<div
				className={[
					s.container,
					props.menu.isActive ? s.active : "",
				].join(" ")}
				onClick={() => setActive(!isActive)}
			>
				{/* icon */}
				{props.menu.iconNormal && !isActive && (
					<span className={s.icon}>{props.menu.iconNormal}</span>
				)}

				{props.menu.iconActive && isActive && (
					<span className={s.icon}>{props.menu.iconActive}</span>
				)}

				{/* title */}
				<span
					className={[
						s.title,
						!props.menu.iconNormal ? s.line : "",
					].join(" ")}
				>
					{props.menu.title}
				</span>

				{/* type */}
				<span className={s.right}>
					<span>{props.menu.after}</span>

					{/* dropdown */}
					{props.menu.childrens && (
						<span className={s.dropdown}>
							<Icon
								display="inline"
								component={solid.ChevronDown}
							></Icon>
						</span>
					)}
				</span>
			</div>

			{props.menu.childrens &&
				isActive &&
				props.menu.childrens.map((item, index) => {
					// const active = props.routerName.includes(
					// 	item.path.toLowerCase()
					// );
					return (
						<Wrapper key={index}>
							<Menu
								menu={{
									title: item.title,
									path: item.path,
									iconNormal: item.iconNormal,
									iconActive: item.iconActive,
									isActive: item.isActive,
									childrens: item.childrens,
									after: item.after,
								}}
								// routerName={props.routerName}
								as="a"
							/>
						</Wrapper>
					);
				})}
		</div>
	);
};

export default Menu;
