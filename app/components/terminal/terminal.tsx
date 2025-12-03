import { useState, useEffect } from "react";
import { Window } from "~/components/window";

export function Terminal({ onFatalError }: { onFatalError: () => void }) {
    function handleKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "c") {
            e.preventDefault();
            onFatalError();
        }
    }

    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true)
        }, 100)

        return () => clearTimeout(timer)
    }, [])

    if (!show)
        return null;

    return (
        <Window
            id="terminal"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            initialPostion={{
                x: 50,
                y: 70,
            }}
            height={248}
            width={300}
            onClose={onFatalError}
        >
            <div className="overflow-scroll rounded-b-xl" style={{
                width: "300px",
                height: "200px",
            }}>
                <div className="flex flex-col bg-background-inverse h-full text-foreground-inverse text-sm p-4">
                    <p>&gt; dev</p>
                    <p>&gt; react-router dev</p>
                    <p className="pt-2 pl-1">
                        <span className="text-green-300">➜ </span>
                        <span className="font-bold">Local: </span>
                        <span className="text-blue-200">http://localhost: <span className="font-bold text-blue-300">5173</span>/</span>
                    </p>
                    <p className="pt-1 text-background-alt">press ctrl c to quit</p>
                </div>
            </div>
        </Window>
    );
}
