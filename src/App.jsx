import { createTheme, NextUIProvider, CssBaseline } from "@nextui-org/react";
import { lazy, Suspense } from "react";
import { Loader } from "./components/Loader";
import "./style.css";

const HomeView = lazy(() => import("./pages/Home"));

export const App = () => {
  const nextTheme = createTheme({ type: "dark" });
  return (
    <NextUIProvider theme={nextTheme}>
      <CssBaseline />
      <Suspense fallback={null}>
        <HomeView />
      </Suspense>
    </NextUIProvider>
  );
};
