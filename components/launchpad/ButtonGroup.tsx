type Props = {
  id: string;
  style: string;
  text: string;
};

export default function ButtonGroup({
  tabs,
  selectedTab,
  setSelectedTab,
}: any) {
  return (
    <div className="flex flex-col md:flex-row justify-between mb-8 md:items-center gap-4 md:pr-11">
      {/* presale_ fair Launch group */}
      <div className="flex">
        {tabs?.map((tab: Props) => (
          <button
            key={tab.id}
            className={`${
              selectedTab === tab.id
                ? "bg-[#454FDA] border border-[#454FDA]"
                : "bg-[#3F3F46]"
            } ${tab?.style} py-[0.81rem] px-4 w-full xl:px-[2.88rem] tracking-[-0.01rem] whitespace-nowrap`}
            onClick={() => setSelectedTab(tab.id)}
          >
            {tab.text}
          </button>
        ))}
      </div>
      {/* Create token button */}
      <button>Create token</button>
    </div>
  );
}