import Image from "next/image";
import * as motion from "motion/react-client"

import { Terminal } from "@/components/Terminal";
import { Bounce } from "@/components/animations/Bounce";

import { AuroraText } from "@/components/AuroraText";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="flex items-center sm:flex-row sm:w-auto sm:max-w-full">
        <motion.div
          className="-rotate-8 z-2"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            duration: 0.5,
            delay: 0.3,
          }}
        >
          <Image
            className="rounded-2xl min-w-[120px] w-[180px] md:w-[240px] lg:w-[320px]"
            width={320}
            height={470}
            src="/me.webp"
            alt="me"
          />
        </motion.div>
        <div className="flex flex-col sm:mt-0 ml-1 md:ml-2">
          <h1 className="text-[65px] tracking-[-.75rem] font-bold sm:tracking-[-1.5rem] sm:text-[110px] md:text-[120px] lg:tracking-[-2rem] lg:text-[150px]" style={{ wordSpacing: '-.6em' }}>
            <AuroraText><Bounce delay={0.3}>full stack</Bounce></AuroraText>
          </h1>
          <motion.h1
            className="text-[65px] tracking-[-.75rem] font-bold -mt-10 z-1 sm:tracking-[-1.5rem] sm:text-[110px] sm:-mt-15 md:text-[120px] md:-mt-18 lg:tracking-[-2rem] lg:text-[150px] lg:-mt-26"
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
      <div className="-mt-6 sm:-mt-8 md:-mt-14 lg:-mt-16 z-2">
        <Terminal />
      </div>
    </div>
  );
}
