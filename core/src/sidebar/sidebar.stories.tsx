import { storiesOf } from "@storybook/react";
import { Sidebar } from "./sidebar";
import * as common from "./common";

const defaultUser: common.userInfo = {
	name: "beSomething",
	role: "super admin",
	avatar: "url",
};

const defaultLowlevel1: common.lowlevel = {
	title: "item title",
	badge: undefined,
	isLozenge: false,
};

const defaultLowlevel2: common.lowlevel = {
	title: "item title",
	badge: 3,
	isLozenge: false,
};

const defaultLowlevel3: common.lowlevel = {
	title: "item title",
	badge: undefined,
	isLozenge: true,
};

const defaultHighlevel1: common.highlevel = {
	title: "item title",
	badge: undefined,
	isLozenge: false,
	items: [defaultLowlevel1, defaultLowlevel2, defaultLowlevel3],
};

const defaultHighlevel2: common.highlevel = {
	title: "item title",
	badge: 3,
	isLozenge: false,
	items: [defaultLowlevel1, defaultLowlevel2, defaultLowlevel3],
};

const defaultHighlevel3: common.highlevel = {
	title: "item title",
	badge: undefined,
	isLozenge: true,
	items: [defaultLowlevel1, defaultLowlevel2, defaultLowlevel3],
};

const defaultDropdownItem: common.dropdownItem = {
	title: "item title",
	items: [defaultHighlevel1, defaultHighlevel2, defaultHighlevel3],
};

storiesOf("Sidebar", module).add("Main", () => (
	<Sidebar
		user={defaultUser}
		dropdownItems={[
			defaultDropdownItem,
			defaultDropdownItem,
			defaultDropdownItem,
		]}
	/>
));
