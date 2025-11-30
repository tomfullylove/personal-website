import { createContext, useContext, useState, useCallback } from "react";

type WindowManagerContextValue = {
  bringToFront: (id: string) => void;
  getZIndex: (id: string) => number;
  isOpen: (id: string) => boolean;
  open: (id: string) => void;
  close: (id: string) => void;
};

export const WindowManagerContext = createContext<WindowManagerContextValue | null>(null);

type WindowManagerProviderProps = {
  children: React.ReactNode;
  initialWindows?: string[];
  initialOpen?: string[];
};

export function WindowManagerProvider({
  children,
  initialWindows = [],
  initialOpen = [],
}: WindowManagerProviderProps) {
  const [order, setOrder] = useState<string[]>(initialWindows);
  const [openState, setOpenState] = useState<Record<string, boolean>>(
    Object.fromEntries(initialOpen.map(id => [id, true]))
  );

  const bringToFront = useCallback((id: string) => {
    setOrder(prev => {
      const filtered = prev.filter(w => w !== id);
      return [...filtered, id];
    });
  }, []);

  const getZIndex = useCallback(
    (id: string) => {
      const idx = order.indexOf(id);
      return idx === -1 ? 1 : idx + 1;
    },
    [order]
  );

  const isOpen = useCallback((id: string) => openState[id] === true, [openState]);

  const open = useCallback((id: string) => {
    setOpenState(prev => ({ ...prev, [id]: true }));
    bringToFront(id);
  }, [bringToFront]);

  const close = useCallback((id: string) => {
    setOpenState(prev => ({ ...prev, [id]: false }));
  }, []);

  const value: WindowManagerContextValue = {
    bringToFront,
    getZIndex,
    isOpen,
    open,
    close,
  };

  return (
    <WindowManagerContext value={value}>
      {children}
    </WindowManagerContext>
  );
}

export function useWindowManager(id: string) {
  const ctx = useContext(WindowManagerContext);
  if (!ctx) {
    throw new Error("useWindowManager must be used within WindowManagerProvider");
  }

  const { bringToFront, getZIndex, isOpen, open, close } = ctx;

  return {
    zIndex: getZIndex(id),
    isOpen: isOpen(id),
    focus: () => bringToFront(id),
    open: () => open(id),
    close: () => close(id),
  };
}

