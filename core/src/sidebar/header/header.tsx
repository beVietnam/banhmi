import s from "./header.module.css";
import { IUserInfo } from "../sidebar.interface";

interface Props {
	userInfo: IUserInfo;
	isSecondary?: boolean;
}

export const Header = (props: Props): JSX.Element => {
	const { userInfo, isSecondary } = props;
	return (
		<div className={s.header}>
			<div className={isSecondary ? s.secondaryPicture : s.picture}>
				{userInfo.userImg}
			</div>
			<div className={s.right}>
				<div className={isSecondary ? s.secondaryUsername : s.username}>
					{userInfo.username}
				</div>
				<div className={s.role}>{userInfo.userRole}</div>
			</div>
		</div>
	);
};
