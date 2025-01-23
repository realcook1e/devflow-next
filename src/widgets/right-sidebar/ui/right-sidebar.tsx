import HotNetwork from "./hot-network";
import PopularTags from "./popular-tags";

const RightSidebar: React.FC = () => {
	return (
		<aside className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 hidden h-screen flex-col gap-[60px] overflow-y-auto border-l p-[26px] pt-[100px] shadow-light-300 xl:flex xl:w-[330px] dark:shadow-none">
			<HotNetwork />
			<PopularTags />
		</aside>
	);
};

export default RightSidebar;
