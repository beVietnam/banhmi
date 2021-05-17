import s from "./sidebar.module.css";
import React from "react";

export const Header = (props: {
	picture: React.ReactNode;
	name: string;
	role: string;
}): JSX.Element => {
	return (
		<div className={s.header}>
			<div className={s.picture}>{props.picture}</div>
			<div>
				<div className={s.username}>{props.name}</div>
				<div className={s.role}>{props.role}</div>
			</div>
		</div>
	);
};
