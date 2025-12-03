import { useState, useCallback } from "react";
import { useOnDrag } from "~/hooks/use-on-drag";

import { useWindowManager } from "~/providers/window-manager-provider";

function minMax(min: number, value: number, max: number) {
    return Math.min(max, Math.max(min, value));
}

export function Window({
    id,
    height,
    width,
    children,
    barComponent,
    onClose,
    initialPostion = { x: 0, y: 40 },
    ...htmlProps
}: { height: number, width: number, onClose?: () => void, children: React.ReactNode, barComponent?: React.ReactNode, initialPostion?: { x: number, y: number } } & React.HTMLAttributes<HTMLDivElement>
) {
    const [postion, setPosition] = useState(initialPostion);
    const { zIndex, focus, close, isOpen } = useWindowManager(id ?? "");
    const onDragMove = useCallback((e: MouseEvent) => {
        setPosition(p => ({
            x: minMax(0, p.x + e.movementX, window.innerWidth - width),
            y: minMax(40, p.y + e.movementY, window.innerHeight - height - 60)
        }))
    }, [height, width]);
    const { onMouseDown } = useOnDrag({ onDragMove, draggable: true })

    if (!isOpen) {
        return null;
    }

    return (
        <div
            onMouseDown={focus}
            className="rounded-xl border border-border absolute"
            style={{
                top: `${postion.y}px`,
                left: `${postion.x}px`,
                zIndex,
            }}
            {...htmlProps}
        >
            <div
                className="flex flex-row h-12 justify-center border-b border-border bg-background rounded-t-xl"
                onMouseDown={onMouseDown}
            >
                <div className="flex flex-row gap-2 absolute top-4 left-4">
                    <button onClick={() => onClose ? onClose() : close()} className="w-3 h-3 rounded-full bg-red cursor-pointer"></button>
                    <button onClick={close} className="w-3 h-3 rounded-full bg-yellow cursor-pointer"></button>
                </div>
                {barComponent}
            </div>
            {children}
        </div>
    );
}
