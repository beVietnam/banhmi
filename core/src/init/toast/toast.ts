import { ToastPane, text, ToastPaneType } from "@moai/core";
import { Check, Warning2 } from "@banhmi/icon/solid";
import s from "./toast.module.css";

ToastPane.types = {
	success: {
		iconComponent: Check,
		className: s.success,
		iconCls: text.successWeak,
	} as ToastPaneType,
	failure: {
		iconComponent: Warning2,
		className: s.failure,
		iconCls: text.failureWeak,
	} as ToastPaneType,
};

ToastPane.styles = {
	main: s.main,
};
