import { background, border, Dialog, shadow } from "@moai/core";

Dialog.Pane.styles.outset = [
	shadow.boxStrong,
	background.strong,
	border.radius,
].join(" ");
