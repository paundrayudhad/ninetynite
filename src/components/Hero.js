import { cn } from "@/lib/utils"; 
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern"
import GridPattern from "./magicui/grid-pattern";
import GradualSpacing from "./magicui/gradual-spacing";
import BlurIn from "./magicui/blur-in";


export default function Hero() {
  return (
    <>
      <section className="bg-neutral-950 min-h-screen flex items-center justify-center">
        <div className="max-w-screen-full w-full flex flex-col items-center text-center">
          <BlurIn 
            className="text-white bg-clip-text lg:text-[14rem] text-6xl md:text-[8rem] font-embassy z-10"
            word="Ninetynite"
          />
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
