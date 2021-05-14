import s from "./highlevel.module.css";
import { highlevel } from "../../common";
import { Icon, Tag } from "@moai/core";
import * as outline from "@banhmi/icon/outline";
import * as solid from "@banhmi/icon/solid";

const SidebarHighLevel = (props: { highlevelItem: highlevel }): JSX.Element => {
	return (
		<div
			className={[
				s.container,
				props.highlevelItem.isActive ? s.active : "",
			].join(" ")}
		>
			{/* icon */}
			{!props.highlevelItem.isActive && (
				<span className={s.icon}>
					{props.highlevelItem.outlineIcon}
				</span>
			)}
			{props.highlevelItem.isActive && (
				<span className={s.icon}>{props.highlevelItem.solidIcon}</span>
			)}

			{/* title */}
			<span className={s.title}>{props.highlevelItem.info.title}</span>

			{/* null || badge || lozenge */}
			<span className={s.right}>
				<span className={s.badge}>
					{props.highlevelItem.info.badge && (
						<Tag color={Tag.colors.red}>
							{props.highlevelItem.info.badge.toString()}
						</Tag>
					)}
				</span>

				<span className={s.lozenge}>
					{props.highlevelItem.info.isLozenge && (
						<Tag color={Tag.colors.green}>New</Tag>
					)}
				</span>

				{/* dropdown */}
				<span className={s.dropdown}>
					<Icon display="inline" component={solid.ChevronDown}></Icon>
				</span>
			</span>
		</div>
	);
};

export default SidebarHighLevel;
