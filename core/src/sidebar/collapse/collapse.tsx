import { Menu, WrappedProps as ChildWrapperProps } from "../menu/menu";
import { IMenu } from "../sidebar.interface";
import { useState } from "react";

export const Collapse = (
	props: {
		menu: IMenu;
		path: string;
		setPath: (path: string) => void;
	} & ChildWrapperProps
): JSX.Element => {
	const [isExpand, setExpand] = useState(props.menu.isActive);

	function toggleCollapse() {
		setExpand(!isExpand);
		if (!isExpand && props.path.includes(props.menu.path)) {
			props.setPath("/");
		}
		if (!isExpand && !props.menu.childrens) {
			props.setPath(props.menu.path);
		}
	}

	return (
		<div>
			{props.menu.childrens ? (
				<div>
					<div onClick={() => toggleCollapse()}>
						<Menu
							menu={{
								...props.menu,
								isActive: props.path.includes(
									props.menu.path.toLowerCase()
								),
							}}
						/>
					</div>
					{isExpand &&
						props.menu.childrens.map((item) => {
							const active = props.path.includes(
								item.path.toLowerCase()
							);
							return (
								<div
									key={item.path}
									onClick={() =>
										props.setPath(
											props.menu.path + item.path
										)
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
				<div onClick={() => props.setPath(props.menu.path)}>
					<Menu
						menu={{
							...props.menu,
							isActive: props.path.includes(
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
