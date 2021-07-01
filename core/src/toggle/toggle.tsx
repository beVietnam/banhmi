import styles from "./toggle.module.css";

interface Props {
	name?: string;
	onChange?: (state: boolean) => void;
	value?: string | number | readonly string[];
	defaultValue?: string | number | readonly string[];
	checked?: boolean;
	defaultChecked?: boolean;
}

const Toggle = (props: Props) => {
	const { name, value, defaultValue, checked, defaultChecked, onChange } =
		props;
	return (
		<label className={styles.toggle}>
			<input
				type="checkbox"
				className={styles.checkbox}
				name={name}
				value={value}
				defaultValue={defaultValue}
				checked={checked}
				defaultChecked={defaultChecked}
				onChange={(e) => onChange?.(e.target.checked)}
			/>
			<div className={styles.inner} />
			<div className={styles.switch} />
		</label>
	);
};

export { Toggle };
