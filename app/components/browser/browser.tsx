import { useState, useEffect } from "react";
import { Window } from "~/components/window";

import { GoogleDocs, Pornhub, Medium, Github } from "./tabs";

const TABS = [
    {
        url: "https://docs.google.com",
        name: "Google Docs",
        component: <GoogleDocs />,
    },
    {
        url: "https://medium.com",
        name: "Medium",
        component: <Medium />,
    },
    {
        url: "https://github.com",
        name: "Github",
        component: <Github />,
    },
    {
        url: "https://xxx.com",
        name: "XXX",
        component: <Pornhub />,
    }
]

const PADDING = 16;

export function Browser() {
    const [show, setShow] = useState(false);
    const [openTab, setOpenTab] = useState(TABS[0]);
    const [dimensions, setDimensions] = useState({ height: 700, width: 700 });

    useEffect(() => {
        const handleResize = () => {
            setDimensions({
                height: window.innerHeight - 40 - 48 - (PADDING * 2),
                width: window.innerWidth - (PADDING * 2),
            });
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true)
        }, 1500)

        return () => clearTimeout(timer)
    }, [])

    if (!show)
        return null;

    return (
        <Window
            id="browser"
            initialPostion={{
                x: PADDING,
                y: PADDING + 40,
            }}
            height={dimensions.height}
            width={dimensions.width}
            barComponent={
                <div className="rounded-lg w-50 sm:w-100 h-8 mt-2 border border-border flex flex-row justify-center items-center text-sm">
                    <p className="text-xs">{openTab.url}</p>
                </div>
            }
        >
            <>
                <div className="w-full flex flex-row -mt-[1px]">
                    {TABS.map((tab) => {
                        const selected = tab.name === openTab.name
                        return (
                            <button key={tab.name} onClick={() => { setOpenTab(tab) }} className={`${selected ? "bg-background-alt" : "bg-background"} border border-border h-8 w-20 sm:w-30 md:w-40 lg:w-60 border-s-0 flex flex-row justify-center items-center cursor-pointer text-xs`}>
                                {tab.name}
                            </button>
                        )
                    })}
                    <div className="bg-background border border-border h-8 flex-1 border-s-0 border-e-0" />
                </div>
                <div className="overflow-scroll rounded-b-xl" style={{
                    width: dimensions.width,
                    height: dimensions.height - 80,
                }}>
                    {openTab.component}
                </div>
            </>
        </Window>
    );
}
