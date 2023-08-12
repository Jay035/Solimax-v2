type Props = {};

export default function CreationSteps({}: Props) {
  const steptitles = [
    {
      id: "verify-your-token",
      tag: 1,
      title: "Verify your token",
      description: "Enter the token address and verify",
    },
    {
      id: "deFi-launchpad",
      tag: 2,
      title: "DeFi Launchpad",
      description: "Enter the launchpad information",
    },
    {
      id: "additional-info",
      tag: 3,
      title: "Add Additional Info",
      description: "Let people know who you are",
    },
    {
      id: "finish",
      tag: 4,
      title: "Finish",
      description: "Review your information and submit your presale",
    },
  ];
  return (
    <section className="bg-[#1D1C20] rounded-[0.625rem] border border-[#26272B] ">
      {steptitles?.map((item) => (
        <div
          key={item?.id}
          className="flex items-center gap-2 p-6 border-b border-[#26272B]"
        >
          <div className="w-8 p-[0.625rem]">{item.tag}.</div>
          <div className="flex flex-col ">
            <h1 className="tracking-[-0.01rem]">{item?.title}</h1>
            <p className="text-[#D1D1D6] tracking-[-0.00813rem] text-[0.8125rem]">
              {item?.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
