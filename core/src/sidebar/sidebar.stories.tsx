import { storiesOf } from "@storybook/react";
import { Heading } from "./heading/heading";

storiesOf("Sidebar", module).add("Main", () => {
	return (
		<div className="container">
			<style>{`
		        .container {
			        width: 232px;
			        background-color:white;
			        padding: 8px;
		        }
		    `}</style>
			<Heading>subsection</Heading>
		</div>
	);
});
