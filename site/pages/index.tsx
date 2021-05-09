import { Begroup } from "@banhmi/icon/colored";
import { DivPx, border, text, Icon } from "@moai/core";
import { Gallery } from "@moai/core/dist/_gallery";
import "@moai/core/dist/_gallery/bundle.css";
import { GalleryIcon } from "../components/icon/icon";
import s from "./index.module.css";

const Header = (): JSX.Element => (
	<div className={[s.footer, border.strong, text.muted].join(" ")}>
		<Icon display="block" path={Begroup} size={32} />
	</div>
);

const Index = (): JSX.Element => (
	<div className={s.container}>
		<Header />
		<DivPx size={32} />
		<Gallery />
		<DivPx size={32} />
		<GalleryIcon />
		<DivPx size={32} />
	</div>
);

export default Index;
