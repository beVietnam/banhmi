import { Menu, WrappedProps as ChildWrapperProps } from "../menu/menu";
import { IMenu } from "../common";
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
			<div onClick={() => toggleCollapse()}>
				{
					(props.menu.isActive = props.path.includes(
						props.menu.path.toLowerCase()
					))
				}
				<Menu menu={props.menu} />
			</div>
			{isExpand &&
				props.menu.childrens &&
				props.menu.childrens.map((item) => {
					const active = props.path.includes(item.path.toLowerCase());
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
