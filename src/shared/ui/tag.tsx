interface TagProps {
	label: string;
}

export const Tag: React.FC<TagProps> = ({ label }) => {
	return (
		<span className="background-light800_dark300 text-light400_light500 subtle-medium cursor-pointer rounded-md px-4 py-2 uppercase">
			{label}
		</span>
	);
};
