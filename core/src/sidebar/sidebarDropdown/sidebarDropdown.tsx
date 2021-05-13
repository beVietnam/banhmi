import SidebarHighLevel from "../sidebarItems/highlevel/highlevel";
import SidebarLowLevel from "../sidebarItems/lowlevel/lowlevel";
import { useState } from "react";
import { highlevel } from "../common";

const SidebarDropdown = (props: { item: highlevel }): JSX.Element => {
	const [isOpenSubMenu, setIsOpenSubMenu] = useState(false);
	return (
		<div>
			<div onClick={() => setIsOpenSubMenu(!isOpenSubMenu)}>
				<SidebarHighLevel item={props.item} />
			</div>
			{isOpenSubMenu &&
				props.item.items.map((item) => {
					return <SidebarLowLevel item={item} />;
				})}
		</div>
	);
};

export default SidebarDropdown;
