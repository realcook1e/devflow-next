import { Tag } from "@/shared/ui";

const dummyTags = [
	{ label: "Javascript", count: 20152 },
	{ label: "Next.js", count: 18493 },
	{ label: "React.js", count: 16269 },
	{ label: "Node.js", count: 15121 },
	{ label: "Python", count: 14431 },
	{ label: "Microsoft Azure", count: 9429 },
	{ label: "PostgreSQL", count: 9429 },
	{ label: "Machine Learning", count: 9429 },
];

const PopularTags: React.FC = () => {
	return (
		<section>
			<h3 className="h3-bold text-dark200_light900">
				Popular Tags
			</h3>
			<ul className="mt-[26px] flex flex-col gap-4">
				{dummyTags.map(tag => (
					<li
						key={tag.label}
						className="flex items-center justify-between gap-5">
						<Tag label={tag.label} />
						<span className="text-dark500_light700 small-medium cursor-pointer">
							{tag.count}+
						</span>
					</li>
				))}
			</ul>
		</section>
	);
};

export default PopularTags;
