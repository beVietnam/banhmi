import { storiesOf } from "@storybook/react";
import { Heading } from "./heading/heading";
import s from "./sidebar.module.css";

storiesOf("Sidebar", module).add("Main", () => {
	return (
		<div className={s.container}>
			<Heading>subsection</Heading>
		</div>
	);
});
