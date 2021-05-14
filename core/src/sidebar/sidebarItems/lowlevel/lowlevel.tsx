import s from "./lowlevel.module.css";
import { itemInfo } from "../../common";
import { Tag } from "@moai/core";

const SidebarLowLevel = (props: { lowlevelItem: itemInfo }): JSX.Element => {
	return (
		<div className={s.lowlevel}>
			<span className={[s.title, s.line].join(" ")}>
				{props.lowlevelItem.title}
			</span>
			<span className={s.right}>
				<span className={s.badge}>
					{props.lowlevelItem.badge && (
						<Tag color={Tag.colors.red}>
							{props.lowlevelItem.badge.toString()}
						</Tag>
					)}
				</span>

				<span className={s.lozenge}>
					{props.lowlevelItem.isLozenge && (
						<Tag color={Tag.colors.green}>New</Tag>
					)}
				</span>
			</span>
		</div>
	);
};

export default SidebarLowLevel;
