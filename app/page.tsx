import { Terminal } from "@/components/Terminal";

import { AuroraText } from "@/components/magicui/aurora-text";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <div className="flex">
        <div className="-rotate-8">
          <img
            src="/me.jpg"
            className="w-[330px] min-w-[320px] h-[470px] min-h-[470px] rounded-2xl"
          />
        </div>
        <div className="flex flex-col -ml-2">
          <h1 className="text-[160px] font-bold tracking-tighter">
            <AuroraText>full stack</AuroraText>
          </h1>
          <h1 className="text-[160px] font-bold -mt-26 tracking-tighter">
            engineer
          </h1>
        </div>
      </div>
      <div className="-mt-28 z-2">
        <Terminal />
      </div>
    </div>
  );
}
