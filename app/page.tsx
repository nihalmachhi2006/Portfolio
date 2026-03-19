import Banner from "@/components/banner";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 w-full selection:bg-zinc-200 selection:text-zinc-900">
      <Banner />
      {/* Scroll area to demonstrate the intersection observer */}
      <div className="flex-1 min-h-[150vh]"></div>
    </div>
  );
}