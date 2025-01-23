import Image from "next/image";

const dummyData = [
	"Would it be appropriate to point out an error in another paper during a referee report?",
	"How can an airconditioning machine exist?",
	"Interrogated every time crossing UK Border as citizen",
	"Low digit addition generator",
	"What is an example of 3 numbers that do not make up a vector?",
];

const HotNetwork: React.FC = () => {
	return (
		<section className="pt-16">
			<h3 className="h3-bold text-dark200_light900">
				Hot Network
			</h3>
			<ul className="mt-[26px] flex flex-col gap-[30px]">
				{dummyData.map((item, index) => (
					<li
						key={index}
						className="flex cursor-pointer items-start justify-between gap-[10px]">
						<span className="text-dark500_light700 body-medium">
							{item}
						</span>
						<Image
							src="/assets/icons/chevron-right.svg"
							alt="arrow right"
							width={20}
							height={20}
							className="invert-colors"
						/>
					</li>
				))}
			</ul>
		</section>
	);
};

export default HotNetwork;
