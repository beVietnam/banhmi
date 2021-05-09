import * as D from "@storybook/addon-docs/blocks";
import { useEffect } from "react";
import "@moai/core/dist/bundle.css";
import "@moai/core/dist/font/remote.css";
import "./preview.css";
import "../src/index";
import "../src/global.css";
import { storyTheme } from "./theme";

const Container = ({ children, context }) => {
	useEffect(() => {
		const ls = window.document.documentElement.classList;
		ls.add("light");
		return () => ls.remove("light");
	}, []);
	return <D.DocsContainer context={context}>{children}</D.DocsContainer>;
};

export const parameters = {
	docs: {
		theme: storyTheme,
		container: Container,
		// page: Page,
	},
	viewMode: "docs",
};
