import s from "./heading.module.css";
export const Heading = (props: { children: string }): JSX.Element => {
	return <div className={s.heading}>{props.children}</div>;
};
