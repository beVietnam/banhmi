import * as outline from "@banhmi/icon/outline";
import * as solid from "@banhmi/icon/solid";
import * as colored from "@banhmi/icon/colored";
import { DivPx, Icon } from "@moai/core";
import { GallerySection } from "@moai/core/dist/_gallery";
import s from "./icon.module.css";

const IconSet = ({ icons }: { icons: any }): JSX.Element => (
	<div className={s.set}>
		{Object.keys(icons).map((key) => (
			<div key={key} className={s.icon}>
				<Icon display="block" path={(icons as any)[key]} />
				<div className={s.label}>{key}</div>
			</div>
		))}
	</div>
);

export const GalleryIcon = (): JSX.Element => (
	<GallerySection title="Icons">
		<div className={s.container}>
			<h2 className={s.heading}>Colored set</h2>
			<IconSet icons={colored} />
			<DivPx size={32} />
			<h2 className={s.heading}>Outline set</h2>
			<IconSet icons={outline} />
			<DivPx size={32} />
			<h2 className={s.heading}>Solid set</h2>
			<IconSet icons={solid} />
		</div>
	</GallerySection>
);
