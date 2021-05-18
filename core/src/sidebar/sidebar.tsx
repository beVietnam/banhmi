import s from "./sidebar.module.css";
import Menu from "./menu/menu";
import * as common from "./common";

const Sidebar = (props: {
	menuItems: common.IMenu[];
	sectionTitle: string;
}): JSX.Element => {
	return (
		<div className={s.container}>
			<div className={s.subsection}>{props.sectionTitle}</div>
			{props.menuItems &&
				props.menuItems.map((item, index) => {
					// const active = props.routerName.includes(
					// 	item.path.toLowerCase()
					// );
					return (
						<div key={index}>
							<Menu
								menu={{
									title: item.title,
									path: item.path,
									iconNormal: item.iconNormal,
									iconActive: item.iconActive,
									isActive: item.isActive,
									childrens: item.childrens,
									after: item.after,
								}}
								// routerName={props.routerName}
								as="a"
							/>
						</div>
					);
				})}
		</div>
	);
};

export default Sidebar;
