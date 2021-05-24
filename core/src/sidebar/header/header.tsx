import s from "./header.module.css";
import { IUserInfo } from "../common";

export const Header = (props: { userInfo: IUserInfo }): JSX.Element => {
	return (
		<div className={s.header}>
			<div className={s.picture}>{props.userInfo.userImg}</div>
			<div className={s.right}>
				<div className={s.username}>{props.userInfo.username}</div>
				<div className={s.role}>{props.userInfo.userRole}</div>
			</div>
		</div>
	);
};
