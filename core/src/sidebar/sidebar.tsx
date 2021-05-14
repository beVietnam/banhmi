import SidebarHeader from "./sidebarHeader/sidebarHeader";
import SidebarFooter from "./sidebarFooter/sidebarFooter";
import SidebarBody from "./siderbarBody/sidebarBody";
import * as common from "./common";
import s from "./sidebar.module.css";

export const Sidebar = (props: {
	user: common.userInfo;
	dropdownItems: common.dropdownItem[];
}): JSX.Element => {
	return (
		<div className={s.container}>
			<SidebarHeader user={props.user} />
			{props.dropdownItems.map((item) => {
				return <SidebarBody item={item} />;
			})}
			<SidebarFooter />
		</div>
	);
};
