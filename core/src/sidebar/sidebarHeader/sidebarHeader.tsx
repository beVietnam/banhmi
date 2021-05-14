import s from "./sidebarHeader.module.css";
import { userInfo } from "../common";

const SidebarHeader = (props: { user: userInfo }): JSX.Element => {
	return (
		<div className={s.header}>
			<div className={s.avatar}>{props.user.picture}</div>
			<div>
				<div className={s.username}>{props.user.name}</div>
				<div className={s.role}>{props.user.role}</div>
			</div>
		</div>
	);
};

export default SidebarHeader;
