import Banner from "@/components/banner";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Banner />
      {/* Scroll area to demonstrate the intersection observer */}
      <div className="flex-1 min-h-[150vh]"></div>
    </div>
  );
}