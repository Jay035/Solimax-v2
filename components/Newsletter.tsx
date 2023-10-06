import React from "react";

type Props = {
  email: string;
  className: string;
  setEmail: (email: string) => void;
};

export function Newsletter({ email, setEmail, className }: Props) {
  return (
    <div>
      <div className={className}>
        <h1 className="text-[#fcfcfd] tracking-[-0.045rem] text-2xl md:text-4xl">
          Stay in the loop about all projects
        </h1>
        <p className="mt-5 mb-8 text-[#e4e4e7] text-base md:text-xl">
          Sign up our mailing list to receive our new presales, features, tips
          and reviews for next 100X projects.
        </p>
        <div className="max-w-[30.6rem] mx-auto">
          <form
            className="flex flex-col md:flex-row gap-4 items-center"
            onSubmit={(e: any) => {
              e.preventDefault();
            }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-[0.87rem] py-3 rounded-lg bg-[#26272B] border border-[#A0A0AB] shadow-[0px_1px_2px_0px] shadow-[#101828]/[0.05] bg-transparent outline-none tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
              name=""
              id=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              disabled={email === ""}
              className="rounded-lg text-sm sm:text-base border border-[#454fda] bg-[#454fda] disabled:bg-[#454fda]/50 px-5 py-3"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <p className="my-3 underline text-center text-sm sm:text-base text-[#d1d1d6]">
        We care about your data in our privacy policy.
      </p>
    </div>
  );
}
