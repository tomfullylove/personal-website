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
            className="rounded-2xl"
            width={320}
            height={470}
            src="/me.jpg"
            alt="me"
          />
        </motion.div>
        <div className="flex flex-col -ml-2">
          <h1 className="text-[160px] font-bold tracking-tighter">
            <AuroraText><Bounce delay={0.5}>full stack</Bounce></AuroraText>
          </h1>
          <motion.h1 
            className="text-[160px] font-bold -mt-26 tracking-tighter z-1"
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
      <div className="-mt-28 z-2">
        <Terminal />
      </div>
    </div>
  );
}
