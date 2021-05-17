import s from "./sidebar.module.css";
import Menu from "./menu/menu";
import * as common from "./common";
import { useState } from "react";

const Sidebar = (props: { menuItems: common.menu[] }): JSX.Element => {
	const [path, setPath] = useState([]);
	return (
		<div className={s.container}>
			{props.menuItems &&
				props.menuItems.map((item, index) => {
					return (
						<div key={index}>
							<Menu
								menu={item}
								onClick={setPath}
								defaultPath={path}
								parentPath={""}
							/>
						</div>
					);
				})}
		</div>
	);
};

export default Sidebar;
