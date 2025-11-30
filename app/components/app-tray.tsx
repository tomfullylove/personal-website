import { useWindowManager } from "~/providers/window-manager-provider";

function DockItem({ id, icon }: { id: string, icon: string }) {
    const { open } = useWindowManager(id);

    return (
        <button
            className="flex flex-col items-center text-xs cursor-pointer"
            onClick={open}
        >
            <img className="w-8 h-auto" src={icon} />
        </button>
    );
}

export function AppTray() {
    return (
        <div className="bottom-0 fixed w-full flex justify-center p-4">
            <div className="flex flex-row gap-6">
                <DockItem id="browser" icon="compass.svg" />
                <DockItem id="terminal" icon="terminal.svg" />
            </div>
        </div>
    );
}
