import s from "./footer.module.css";
import { Menu, WrappedProps as Wrapper } from "../menu/menu";
import { IMenu } from "../common";
import { useState } from "react";

export const Footer = (props: { data: IMenu[] } & Wrapper): JSX.Element => {
	const [path, setPath] = useState("/");
	return (
		<div className={s.footer}>
			{props.data.map((value, index) => {
				return (
					<div key={index} onClick={() => setPath(value.path)}>
						{(value.isActive = path.includes(value.path))}
						<Menu menu={value} as={props.as} />
					</div>
				);
			})}
		</div>
	);
};
