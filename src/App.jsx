import { createTheme, NextUIProvider } from "@nextui-org/react";
import { lazy, Suspense } from "react";
import { Loader } from "./components/Loader";

const HomeView = lazy(() => import("./pages/Home"));

export const App = () => {
  const nextTheme = createTheme({ type: "dark" });
  return (
    <NextUIProvider theme={nextTheme}>
      <Suspense fallback={<Loader />}>
        <HomeView />
      </Suspense>
    </NextUIProvider>
  );
};
