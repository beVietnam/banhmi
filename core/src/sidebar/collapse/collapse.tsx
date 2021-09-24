import { Menu, WrappedProps as ChildWrapperProps } from "../menu/menu";
import { IMenu, Props } from "../sidebar.interface";
import { useState } from "react";

export const Collapse = (
	props: {
		menu: IMenu;
		path: Props['path'];
		setPath: Props['setPath'];
	} & ChildWrapperProps
): JSX.Element => {
	const [isExpand, setExpand] = useState(props.menu.isActive);

	return (
		<div>
			{props.menu.childrens ? (
				<div>
					<div onClick={() => 	setExpand(!isExpand)}>
						<Menu
							menu={{
								...props.menu,
								isActive: props.path?.includes(
									props.menu.path.toLowerCase()
								),
							}}
						/>
					</div>
					{isExpand &&
						props.menu.childrens.map((item) => {
							const active = props.path?.includes(
								item.path.toLowerCase()
							);
							return (
								<div
									key={item.path}
									onClick={() => {
										if (props.setPath) {
											props.setPath(
												props.menu.path + item.path
											)
										}
									}
								
									}
								>
									<Menu
										menu={{
											...item,
											isActive: active,
											isChild: true,
										}}
										as={props.as}
									/>
								</div>
							);
						})}
				</div>
			) : (
				<div onClick={() => {
					if (props.setPath) {
						props.setPath(props.menu.path)
					}
				}}>
					<Menu
						menu={{
							...props.menu,
							isActive: props.path?.includes(
								props.menu.path.toLowerCase()
							),
						}}
						as={props.as}
					/>
				</div>
			)}
		</div>
	);
};
