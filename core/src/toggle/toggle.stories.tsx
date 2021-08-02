import { Fragment, useState } from "react";
import { storiesOf } from "@storybook/react";
import { Toggle } from "./toggle";

storiesOf("Toggle", module).add("Main", () => {
	const [checked, setChecked] = useState<boolean>(false);
	return (
		<Fragment>
			<Toggle checked={checked} setValue={setChecked} />
			<br />
			<Toggle
				checked={!checked}
				setValue={(state) => setChecked(!state)}
			/>
		</Fragment>
	);
});
