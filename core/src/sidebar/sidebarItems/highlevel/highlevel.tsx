import s from "./highlevel.module.css";
import { highlevel } from "../../common";
import { categoryColors, Icon, Tag } from "@moai/core";
import * as outline from "@banhmi/icon/outline";
import * as solid from "@banhmi/icon/solid";

const SidebarHighLevel = (props: { item: highlevel }): JSX.Element => {
	return (
		<div className={s.container}>
			{/* active element */}
			<span className={s.icon}>
				{true && (
					<Icon
						display="inline"
						component={outline.DownloadClound}
					></Icon>
				)}
				{false && (
					<Icon
						display="inline"
						component={solid.DownloadClound}
					></Icon>
				)}
			</span>
			<span className={s.title}>{props.item.title}</span>
			<span className={s.right}>
				{props.item.badge && (
					<span
						className={s.round}
						style={{ color: categoryColors.red }}
					>
						{props.item.badge.toString()}
					</span>
				)}
				{props.item.isLozenge && (
					<Tag color={Tag.colors.green}>New</Tag>
				)}
				<span className={s.dropdown}>
					<Icon display="inline" component={solid.ChevronDown}></Icon>
				</span>
			</span>
		</div>
	);
};

export default SidebarHighLevel;
