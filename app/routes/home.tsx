import { useState, useEffect } from "react";

import { WindowManagerProvider } from "~/providers/window-manager-provider"
import { Error } from "~/components/error";

import { NavBar } from "~/components/nav-bar";
import { AppTray } from "~/components/app-tray";

import { Browser } from "~/components/browser/browser";
import { Terminal } from "~/components/terminal/terminal"

export default function Home() {
  const [fatalError, setFatalError] = useState(false);
  const [wallpaper, setWallpaper] = useState<string | null>(null);

  useEffect(() => {
    if (fatalError) {
      setWallpaper(null);
    }
  }, [fatalError]);

  if (fatalError) {
    return (
      <Error clearFatalError={() => setFatalError(false)} />
    );
  }

  return (
    <WindowManagerProvider initialWindows={["terminal", "browser", "settings"]} initialOpen={["terminal", "browser"]}>
      <NavBar />
      <div>
        <Terminal onFatalError={() => setFatalError(true)} />
        <Browser />
      </div>
      <AppTray />
    </WindowManagerProvider>
  );
}
