import React, { useEffect, useCallback, useState } from "react";
import * as Font from "expo-font";
import Home from "./screens/home";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();
const getFonts = () =>
  Font.loadAsync({
    "font-reg": require("./assets/fonts/Poppins-Regular.ttf"),
    "font-bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          "font-reg": require("./assets/fonts/Poppins-Regular.ttf"),
          "font-bold": require("./assets/fonts/Poppins-Bold.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return <Home onLayout={onLayoutRootView} />;
}
