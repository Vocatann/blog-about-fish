import { circleLoadingSvg } from "@/lib/svgs";

export default function Loading() {
  return (
    <main className="flex justify-center items-center h-full">
      <div className="w-20">
        {circleLoadingSvg}
      </div>
    </main>
  );
}