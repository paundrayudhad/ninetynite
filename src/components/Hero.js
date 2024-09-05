import { cn } from "@/lib/utils"; 
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern"
import GridPattern from "./magicui/grid-pattern";
import GradualSpacing from "./magicui/gradual-spacing";


export default function hero() {
  return (
    <>
    <section className="bg-neutral-950 min-h-screen flex items-center justify-center">
      <div className="max-w-screen-lg flex flex-col items-center text-center -ml-10">
        <GradualSpacing 
          className="text-white bg-clip-text lg:text-[14rem] text-8xl md:text-[120px] font-embassy z-10"
          text="Ninetynite"
        >
      </GradualSpacing>
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
  )
}
