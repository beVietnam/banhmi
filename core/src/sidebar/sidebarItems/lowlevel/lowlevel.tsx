import s from "./lowlevel.module.css";
import { lowlevel } from "../../common";
import { Icon, Tag } from "@moai/core";
import * as outline from "@banhmi/icon/outline";
import * as solid from "@banhmi/icon/solid";

const SidebarLowLevel = (props: { item: lowlevel }): JSX.Element => {
	return (
		<div className={s.lowlevel}>
			<span className={[s.title, s.line].join(" ")}>
				{props.item.title}
			</span>
			<span className={s.right}>
				{props.item.badge && (
					<span className={s.round}>
						<Tag color={Tag.colors.red}>
							{props.item.badge.toString()}
						</Tag>
					</span>
				)}
				{props.item.isLozenge && (
					<Tag color={Tag.colors.green}>New</Tag>
				)}
			</span>
		</div>
	);
};

export default SidebarLowLevel;
