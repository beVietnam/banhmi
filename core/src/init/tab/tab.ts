import { border, Tabs, text } from "@moai/core";
import s from "./tab.module.css";

Tabs.styles.flat = {
	...Tabs.styles.flat,
	title: [Tabs.styles.flat.title, s.title].join(" "),
	active: border.highlightStrong,
	inactive: [Tabs.styles.flat.inactive, text.muted].join(" "),
};

Tabs.styles.outset = {
	content: Tabs.styles.outset.content,
	renderContent: Tabs.styles.outset.renderContent,
	title: Tabs.styles.flat.title,
	active: Tabs.styles.flat.active,
	inactive: Tabs.styles.flat.inactive,
};
