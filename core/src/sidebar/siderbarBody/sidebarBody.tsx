import { dropdownItem } from "../common";
import SidebarDropdown from "../sidebarDropdown/sidebarDropdown";
import SidebarHeading from "../sidebarItems/heading/heading";

const SidebarBody = (props: { dropdownItem: dropdownItem }): JSX.Element => {
	return (
		<div>
			<SidebarHeading>{props.dropdownItem.title}</SidebarHeading>
			{props.dropdownItem.highlevelItems.map((value) => {
				return <SidebarDropdown highlevelItem={value} />;
			})}
		</div>
	);
};

export default SidebarBody;
