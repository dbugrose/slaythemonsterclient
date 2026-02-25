import Image from "next/image";
import SlayTheMonsterText from "./components/SlayTheMonsterText";

export default function Home() {
  return (
    <div className="overflow-hidden flex min-h-screen items-center justify-center bg-[url(/assets/dragon-flying.jpg)] bg-cover">
      <main className="w-[clamp(300px,\ 50vw,\ 600px)]">
        <SlayTheMonsterText/>
      </main>
    </div>
  );
}
