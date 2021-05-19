import s from "./sidebar.module.css";
import React from "react";

export const Header = (props: {
	userImg: React.ReactNode;
	username: string;
	userRole: string;
}): JSX.Element => {
	return (
		<div className={s.header}>
			<div className={s.picture}>{props.userImg}</div>
			<div className={s.right}>
				<div className={s.username}>{props.username}</div>
				<div className={s.role}>{props.userRole}</div>
			</div>
		</div>
	);
};
