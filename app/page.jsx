import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Album from "@/components/Album";
import Collection from "@/components/Collection";
import Gallery from "@/components/Gallery";
import Music from "@/components/Music";
import Closing from "@/components/Closing";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Album />
        <Collection />
        <Gallery />
        <Music />
        <Closing />
      </main>
    </>
  );
}
