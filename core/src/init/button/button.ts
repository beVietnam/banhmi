import { border, Button, ProgressCircle } from "@moai/core";
import outset from "./outset.module.css";
import flat from "./flat.module.css";
import s from "./size.module.css";

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

Button.sizes = (() => {
	const LargeIcon = { iconSize: 16, iconMargin: 8 };
	const MediumIcon = { iconSize: 16, iconMargin: 8 };
	const SmallIcon = { iconSize: 14, iconMargin: 6 };
	return {
		large: { main: s.large, ...LargeIcon },
		largeIcon: { main: s.largeIcon, ...LargeIcon },
		medium: { main: s.medium, ...MediumIcon },
		mediumIcon: { main: s.mediumIcon, ...SmallIcon },
		small: { main: s.small, ...SmallIcon },
		smallIcon: { main: s.smallIcon, ...SmallIcon },
	};
})();
