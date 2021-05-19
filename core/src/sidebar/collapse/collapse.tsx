import {Menu, WrappedProps as ChildWrapperProps} from "../menu/menu"
import {IMenu} from "../common"
import { useState } from "react"

export const Collapse = (
	props: {
		menu: IMenu;
		router: string;
	} & ChildWrapperProps
):JSX.Element => {
	const [isActive, setActive] = useState(props.menu.isActive);
	return <div>
		<div onClick={() => setActive(!isActive)}>
			<Menu menu={{
				title: props.menu.title,
				path: props.menu.path,
				after: props.menu.after,
				iconActive: props.menu.iconActive,
				iconNormal: props.menu.iconNormal,
				isActive: isActive,
				isChild: props.menu.isChild,
				childrens: props.menu.childrens,
			}}/>
		</div>
		{isActive && props.menu.childrens && props.menu.childrens.map((item) => {
			const active = props.router.includes(item.path);
			return <div key={item.path}>
				<Menu menu={{
				title: item.title,
				path: item.path,
				after: item.after,
				iconActive: item.iconActive,
				iconNormal: item.iconNormal,
				isActive: active,
				isChild: true,
				childrens: item.childrens,
			}}
			as={props.as}/>
			</div>
		})}
	</div>
}