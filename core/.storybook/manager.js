import { addons } from "@storybook/addons";
import "@moai/core/dist/bundle.css";
import "@moai/core/dist/font/remote.css";
import "../src/global.css";
import { storyTheme } from "./theme";

addons.setConfig({
	initialActive: "addons",
	previewTabs: {
		"storybook/docs/panel": "Docs",
		canvas: {
			hidden: true,
			disabled: true,
		},
	},
	theme: storyTheme,
});
