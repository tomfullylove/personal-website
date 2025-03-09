import Image from "next/image";
import * as motion from "motion/react-client"

import { Terminal } from "@/components/Terminal";
import { Bounce } from "@/components/animations/Bounce";

import { AuroraText } from "@/components/AuroraText";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="flex">
        <motion.div
          className="-rotate-8 z-2"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            duration: 0.5,
            delay: 0.3,
          }}
        >
          <Image
            className="rounded-2xl min-w-[180px] w-[180px] md:w-[240px] lg:w-[320px]"
            width={320}
            height={470}
            src="/me.jpg"
            alt="me"
          />
        </motion.div>
        <div className="flex flex-col -ml-0 md:-ml-2">
          <h1 className="text-[90px] font-bold tracking-tighter md:text-[110px] lg:text-[160px]">
            <AuroraText><Bounce delay={0.5}>full stack</Bounce></AuroraText>
          </h1>
          <motion.h1 
            className="text-[90px] font-bold -mt-15 tracking-tighter z-1 md:text-[110px] md:-mt-18 lg:text-[160px] lg:-mt-26"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: "spring",
              duration: 1,
            }}>
            engineer
          </motion.h1>
        </div>
      </div>
      <div className="-mt-16 md:-mt-20 lg:-mt-28 z-2">
        <Terminal />
      </div>
    </div>
  );
}
