import { cn } from "@/lib/utils"; 
import GridPattern from "./magicui/grid-pattern";
export default function Hero() {
  return (
    <>
      <section className="bg-neutral-950 min-h-screen flex items-center ">
        <div className="w-full flex flex-col items-center text-center">
          <h1 
            className="text-white bg-clip-text lg:text-[14rem] pr-6 text-8xl md:text-[8rem] font-embassy z-10">
            Ninetynite
          </h1>
          <GridPattern
            squares={[
              [4, 4],
              [5, 1],
              [8, 2],
              [5, 3],
              [5, 5],
              [10, 10],
              [12, 15],
              [15, 10],
              [10, 15],
              [15, 10],
              [10, 15],
              [15, 10],
            ]}
            className={cn(
              "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
              "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
            )}
          />
        </div>
      </section>
    </>
  );
}
