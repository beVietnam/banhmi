import { border, Button, ProgressCircle } from "@moai/core";
import outset from "./outset.module.css";
import flat from "./flat.module.css";

Button.styles.outset = {
	busy: {
		className: outset.busy,
		color: ProgressCircle.colors.neutral,
		highlightColor: ProgressCircle.colors.neutral,
	},
	highlight: outset.highlight,
	main: [outset.main, border.radius].join(" "),
	selected: outset.selected,
};

Button.styles.flat = {
	busy: {
		className: flat.busy,
		color: ProgressCircle.colors.neutral,
		highlightColor: ProgressCircle.colors.neutral,
	},
	highlight: flat.highlight,
	main: [flat.main, border.radius].join(" "),
	selected: flat.selected,
};
