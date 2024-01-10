import RedirectButton from "@/components/RedirectButton";
import Container from "./components/Container";

type Props = {};

export default function Bridge({}: Props) {
  return (
    <main className="text-white pt-6 pb-20 px-8 md:px-[2.37rem] xl:pr-20">
      <RedirectButton route="" />
      <section className="">
        <div className="mt-10 mb-12 md:mb-20">
          <h1 className="text-2xl tracking-[-0.015rem]">Bridge</h1>
          <p className="text-sm text-[#E4E4E7] tracking-[-0.00875rem]">
            Transfer cryptocurrency assets across blockchain ecosystems
          </p>
        </div>

       <Container />
      </section>
    </main>
  );
}
