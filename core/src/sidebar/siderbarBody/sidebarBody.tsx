import { dropdownItem } from "../common";
import SidebarDropdown from "../sidebarDropdown/sidebarDropdown";
import SidebarHeading from "../sidebarItems/heading/heading";

const SidebarBody = (props: { item: dropdownItem }): JSX.Element => {
	return (
		<div>
			<SidebarHeading>{props.item.title}</SidebarHeading>
			{props.item.items.map((value) => {
				return <SidebarDropdown item={value} />;
			})}
		</div>
	);
};

export default SidebarBody;
