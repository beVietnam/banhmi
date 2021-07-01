import { Collapse } from "./collapse/collapse";
import { Header } from "./header/header";
import { Heading } from "./heading/heading";
import s from "./sidebar.module.css";
import { IMenu, IUserInfo, ISection } from "./common";
import { WrappedProps as ChildWrapperProps } from "./menu/menu";

export const Sidebar = (
	props: {
		headerData: IUserInfo;
		bodyData: ISection[];
		footerData: IMenu[];
		path: string;
		setPath: (path: string) => void;
	} & ChildWrapperProps
): JSX.Element => {
	return (
		<div className={s.container}>
			{/* Header */}
			<Header userInfo={props.headerData} />

			<div className={s.scroll}>
				{/* Body */}
				{props.bodyData.map((value, index) => {
					return (
						<div key={index}>
							<Heading>{value.title}</Heading>
							{value.data.map((menu, menuIndex) => {
								return (
									<div>
										{!menu.isDisable && (
											<Collapse
												key={menuIndex}
												menu={{
													...menu,
													isActive: props.path.includes(
														menu.path.toLowerCase()
													),
												}}
												path={props.path}
												setPath={props.setPath}
												as={props.as}
											/>
										)}
									</div>
								);
							})}
						</div>
					);
				})}
			</div>

			{/* Footer */}
			<div className={s.footer}>
				{props.footerData.map((menu, menuIndex) => {
					return (
						<div>
							{!menu.isDisable && (
								<Collapse
									key={menuIndex}
									menu={{
										...menu,
										isActive: props.path.includes(
											menu.path.toLowerCase()
										),
									}}
									path={props.path}
									setPath={props.setPath}
									as={props.as}
								/>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
};
