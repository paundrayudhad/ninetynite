import { cn } from "@/lib/utils"; 
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern"
import LetterPullup from "@/components/magicui/letter-pullup";
import GridPattern from "./magicui/grid-pattern";


export default function hero() {
  return (
    <>
    <section className="bg-neutral-950 min-h-screen">
  <div className="mx-auto max-w-screen-lg px-4 py-32 flex h-screen items-center">
    <div className="mx-auto text-center my-auto">
      <LetterPullup 
        className="text-white bg-clip-text lg:text-[240px] text-9xl font-embassy z-10"
        words="Ninetynite"
      >
      </LetterPullup>
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
  </div>
</section>
</>
  )
}
