import s from "./heading.module.css";

const SidebarHeading = (props: { children: string }): JSX.Element => {
	return <div className={s.subsection}>{props.children}</div>;
};

export default SidebarHeading;
