import { border, Select } from "@moai/core";
import outset from "../button/outset.module.css";

Select.styles.outset = {
	select: [outset.main, border.radius].join(" "),
};
