import Header from "@/components/Header";
import Hero from "@/components/Hero"
import PriceList from "@/components/PriceList";
import Footer from "@/components/Footer";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import Head from "next/head"

export default function Home() {
  return (
    <>
    <Head>
        <title>Ninetynite - Official Website</title>
      </Head>
    <Header />
    <Hero/>
    <VelocityScroll
      text="Ninetynite+ "
      default_velocity={3}
      className="font-display text-center text-sm font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
    />
    <PriceList />
    <Footer />
    </>
  );
}
