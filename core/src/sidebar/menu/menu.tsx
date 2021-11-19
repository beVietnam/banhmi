import s from "./menu.module.css";
import { IMenu } from "../sidebar.interface";
import { Icon } from "@moai/core";
import * as solid from "@banhmi/icon/solid";
import { ComponentType, ElementType } from "react";

	/**
	 * it is a container to wrap item tab, can to use it to navigate by <a> tag
	 */
export type WrappedProps<P = {}> = {
	as?: ComponentType<P> | ElementType;
} & P;

export const Menu = <T,>(
	props: {
		menu: IMenu;
	} & WrappedProps<T>
): JSX.Element => {
	const { as: Wrapper = "div" } = props;
	return (
		<>
			{!props.menu.hidden && (
				<Wrapper href={props.menu.path}>
					<div
						className={[
							s.container,
							props.menu.isActive ? s.active : "",
							props.menu.isActive && !props.menu.isChild
								? s.root
								: "",
						].join(" ")}
					>
						{/* icon */}
						{props.menu.iconNormal && !props.menu.isActive && (
							<span className={s.icon}>
								{props.menu.iconNormal}
							</span>
						)}

						{props.menu.iconActive && props.menu.isActive && (
							<span className={s.icon}>
								{props.menu.iconActive}
							</span>
						)}

						{/* title */}
						<span
							className={[
								s.title,
								props.menu.isChild ? s.line : "",
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
				</Wrapper>
			)}
		</>
	);
};
