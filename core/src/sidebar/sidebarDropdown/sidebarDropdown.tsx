import SidebarHighLevel from "../sidebarItems/highlevel/highlevel";
import SidebarLowLevel from "../sidebarItems/lowlevel/lowlevel";
import { useState } from "react";
import { highlevel } from "../common";

const SidebarDropdown = (props: { highlevelItem: highlevel }): JSX.Element => {
	const [isOpenSubMenu, setIsOpenSubMenu] = useState(false);

	function toggleDropdown() {
		setIsOpenSubMenu(!isOpenSubMenu);
		props.highlevelItem.isActive = !isOpenSubMenu;
	}

	return (
		<div>
			<div onClick={() => toggleDropdown()}>
				<SidebarHighLevel highlevelItem={props.highlevelItem} />
			</div>
			{isOpenSubMenu &&
				props.highlevelItem.lowlevelItems.map((item) => {
					return <SidebarLowLevel lowlevelItem={item} />;
				})}
		</div>
	);
};

export default SidebarDropdown;
