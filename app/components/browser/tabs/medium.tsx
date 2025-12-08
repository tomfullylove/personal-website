import { useState, useEffect } from "react";

const formatNumber = (num: number) => {
    if (num >= 1_000_000) {
      return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1_000) {
      return (num / 1_000).toFixed(1).replace(/\.0$/, '') + 'k';
    }
    return num.toString();
  };

export function Medium() {
    const [heartCount, setHeartCount] = useState(50);

    useEffect(() => {
        const interval = setInterval(() => {
            setHeartCount(c => c + 32);
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <a href="https://medium.com/@tomfullylove" target="_blank" className="flex flex-col text-black text-xs bg-white h-full sm:text-sm md:text-base">
            <div className="flex flex-row justify-between items-center bg-white px-4 py-2  border border-b-gray-300 border-gray-200">
                <div className="flex flex-row gap-3 items-center">
                    <div className="flex flex-col gap-[3px]">
                        <div className="h-[2px] w-4 bg-gray-700" />
                        <div className="h-[2px] w-4 bg-gray-700" />
                        <div className="h-[2px] w-4 bg-gray-700" />
                    </div>
                    <p className="text-base sm:text-xl md:text-2xl font-bold">Medium</p>
                </div>
                <div className="flex flex-row items-center relative">
                    <div className="h-6 w-6 pt-1 sm:pt-[2px] md:pt-0 rounded-full bg-purple-400 text-white text-center -ml-3 cursor-pointer">T</div>
                    <div className="top-[-2px] right-[2px] bg-amber-400 h-[12px] w-[4px] absolute border border-white" />
                    <div className="top-[2px] right-[-2px] bg-amber-400 h-[4px] w-[12px] absolute border border-white" />
                    <div className="top-[-1px] right-[3px] bg-amber-400 h-[10px] w-[2px] absolute" />
                    <div className="top-[3px] right-[-1px] bg-amber-400 h-[2px] w-[10px] absolute" />
                </div>
            </div>
            <div className="flex flex-col items-center h-full">
                <div className="flex flex-col max-w-160 p-12">
                    <p className="text-2xl w-full sm:text-3xl md:text-4xl font-bold">My stories</p>
                    <div className="flex flex-row w-full py-6 justify-between items-start gap-2 sm:gap-8 border-gray-200 border-b">
                        <div className="flex flex-col">
                            <p className="text-base sm:text-lg md:text-xl font-bold underline">Building a digital camera.</p>
                            <p className="text-xs sm:text-sm md:text-base">A "guide" to building a digital camera with a raspberry pi.</p>
                            <div className="flex flex-row pt-2">
                                <div className="flex flex-row items-center gap-1 min-w-20">
                                    <img src="./heart.svg" className="w-5 h-auto" />
                                    <p>{formatNumber(heartCount)}</p>
                                </div>
                                <div className="flex flex-row items-center gap-1">
                                    <img src="./comment.svg" className="w-5 h-auto" />
                                    <p>{3}</p>
                                </div>
                            </div>
                        </div>
                        <img src="./medium-post-1.png" className="max-w-20 max-h-12 sm:max-w-32 sm:max-h-20 bg-gray-200 mt-2" />
                    </div>
                </div>
            </div>
        </a>
    );
}
