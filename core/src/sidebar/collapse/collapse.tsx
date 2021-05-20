import { Menu, WrappedProps as ChildWrapperProps } from "../menu/menu";
import { IMenu } from "../common";
import { useEffect, useState } from "react";

export const Collapse = (
	props: {
		menu: IMenu;
		path: string;
		setPath: (path: string) => void;
	} & ChildWrapperProps
): JSX.Element => {
	const [isActive, setActive] = useState(props.menu.isActive);

	function toggleCollapse() {
		setActive(!isActive);
		if (!isActive && props.path.includes(props.menu.path)) {
			props.setPath("/");
		}
	}

	return (
		<div>
			<div onClick={() => toggleCollapse()}>
				{(props.menu.isActive = isActive)}
				<Menu menu={props.menu} />
			</div>
			{isActive &&
				props.menu.childrens &&
				props.menu.childrens.map((item) => {
					const active = props.path.includes(item.path);
					return (
						<div
							key={item.path}
							onClick={() =>
								props.setPath(props.menu.path + item.path)
							}
						>
							{(item.isActive = active)}
							{(item.isChild = true)}
							<Menu menu={item} as={props.as} />
						</div>
					);
				})}
		</div>
	);
};
