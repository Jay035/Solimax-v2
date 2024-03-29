import { GlobalContext } from "@/context/Context";
import { ButtonProps } from "@/types";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";

export default function ButtonGroup() {
  const {
    tabs,
    selectedTab,
    setSelectedTab,
    setIsModalShowing,
    toggleModal,
    setModalHeader,
  } = GlobalContext();
  const router = useRouter();
  const pathname = usePathname();
  const toggleTab = useCallback(
    (id: string) => {
      setSelectedTab?.(id);
    },
    [selectedTab]
  );

  useEffect(() => {
    setSelectedTab?.(pathname);
  }, []);
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between md:items-center gap-4 lg:pr-11">
      {/* presale_ fair Launch group */}
      <div className="flex items-center ">
        {tabs?.map((tab: ButtonProps) => (
          <button
            key={tab.id}
            className={`${
              pathname === tab.route
                ? "bg-[#454FDA] border border-[#454FDA]"
                : "bg-[#3F3F46]"
            } ${
              tab?.id === "presale"
                ? "rounded-tl-[0.625rem] rounded-bl-[0.625rem]"
                : "rounded-tr-[0.625rem] rounded-br-[0.625rem]"
            } py-[0.81rem] px-4 w-full md:px-8 tracking-[-0.01rem] whitespace-nowrap`}
            onClick={() => {
              console.log(tab.route);
              toggleTab(tab.id);
              router.push(`${tab.route}`);
            }}
          >
            {tab.text}
          </button>
        ))}
      </div>
      {/* Create token button */}
      <button
      className="w-fit ml-auto pr-4"
        onClick={(e: any) => {
          e.preventDefault();
          window.scrollTo(0, 0);
          toggleModal?.()
          setModalHeader?.("Create token")
          // setIsModalShowing?.(true);
          if (typeof window != "undefined" && window.document) {
            document.body.style.overflow = "hidden";
          }
        }}
      >
        Create token
      </button>
    </div>
  );
}
