import { storiesOf } from "@storybook/react";
import { Header } from "./sidebar";

storiesOf("Sidebar", module).add("Main", () => (
	<div className="container">
		<style>{`
		.container {
			width: 232px;
			background-color:white;
			padding: 8px;
		}
		`}</style>
		<Header
			username="beSomething"
			userRole="super admin"
			userImg={
				<img
					src="https://s3-alpha-sig.figma.com/img/a005/027c/2d8feba34408764eed05849d1e2b026b?Expires=1621814400&Signature=Bz852dkPkIQkcjzw4Oj10Z2fFtaHQ4aX08YPiAMfWLaVElrRT4YHl8x4CH6cGdvUnBCMELstzo-Q5fsRMRwyhRmSv-S3zNzzXrUdzx5TF1n5xWtO1fh-zHXMiScUSrDzDLjIc7KxObT3ZNaGqKcEvZSqEhK2BCl6MhF-HCDKVSb1-gX3s3EwVfkQM~e8ptl-7eRlaAOGwcXRXClJWLLj1Jr5alg64CuX00~J2MOskbXr~B5ZOxOc-tkQIEkeca~ZJbpnTJXnZvrMhVo5ONWo1v7X0tY1t4FG~IdjKQMBdFY9n6hxihWj9rd~FD-L-QjgrjzKX6ghRiZp2Cn0Y9W~wQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
					alt=""
				/>
			}
		/>
	</div>
));
