import { storiesOf } from "@storybook/react";
import { Sidebar } from "./sidebar";
import * as common from "./common";
import { Icon } from "@moai/core";
import * as outline from "@banhmi/icon/outline";
import * as solid from "@banhmi/icon/solid";

const defaultUser: common.userInfo = {
	name: "beSomething",
	role: "super admin",
	picture: (
		<img
			src="https://s3-alpha-sig.figma.com/img/a005/027c/2d8feba34408764eed05849d1e2b026b?Expires=1621814400&Signature=Bz852dkPkIQkcjzw4Oj10Z2fFtaHQ4aX08YPiAMfWLaVElrRT4YHl8x4CH6cGdvUnBCMELstzo-Q5fsRMRwyhRmSv-S3zNzzXrUdzx5TF1n5xWtO1fh-zHXMiScUSrDzDLjIc7KxObT3ZNaGqKcEvZSqEhK2BCl6MhF-HCDKVSb1-gX3s3EwVfkQM~e8ptl-7eRlaAOGwcXRXClJWLLj1Jr5alg64CuX00~J2MOskbXr~B5ZOxOc-tkQIEkeca~ZJbpnTJXnZvrMhVo5ONWo1v7X0tY1t4FG~IdjKQMBdFY9n6hxihWj9rd~FD-L-QjgrjzKX6ghRiZp2Cn0Y9W~wQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
			alt=""
		/>
	),
};

const defaultLowlevel1: common.itemInfo = {
	title: "Item title",
	badge: undefined,
	isLozenge: false,
};

const defaultLowlevel2: common.itemInfo = {
	title: "Item title",
	badge: 3,
	isLozenge: false,
};

const defaultLowlevel3: common.itemInfo = {
	title: "Item title",
	badge: undefined,
	isLozenge: true,
};

const defaultOutlineIcon = (
	<Icon display="inline" component={outline.DownloadClound} />
);
const defaultSolidIcon = (
	<Icon display="inline" component={solid.DownloadClound} />
);

const defaultHighlevel1: common.highlevel = {
	outlineIcon: defaultOutlineIcon,
	solidIcon: defaultSolidIcon,
	isActive: false,
	info: defaultLowlevel1,
	lowlevelItems: [defaultLowlevel1, defaultLowlevel2, defaultLowlevel3],
};

const defaultHighlevel2: common.highlevel = {
	outlineIcon: defaultOutlineIcon,
	solidIcon: defaultSolidIcon,
	isActive: false,
	info: defaultLowlevel2,
	lowlevelItems: [defaultLowlevel1, defaultLowlevel2, defaultLowlevel3],
};

const defaultHighlevel3: common.highlevel = {
	outlineIcon: defaultOutlineIcon,
	solidIcon: defaultSolidIcon,
	isActive: false,
	info: defaultLowlevel3,
	lowlevelItems: [defaultLowlevel1, defaultLowlevel2, defaultLowlevel3],
};

const defaultDropdownItem: common.dropdownItem = {
	title: "Item title",
	highlevelItems: [defaultHighlevel1, defaultHighlevel2, defaultHighlevel3],
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
