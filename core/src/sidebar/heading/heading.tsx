export const Heading = (props: { children: string }): JSX.Element => {
	return <div className="heading">
		<style>{`
		.heading {
			color: var(--highlight-10);
			text-transform: uppercase;
			font-size: 10px;
			font-weight: bold;
			letter-spacing: 1px;
			line-height: 16px;
			display: flex;
			align-items: center;
			padding: 16px 16px 8px 52px;
		`}
		</style>
		{props.children}
	</div>;
};