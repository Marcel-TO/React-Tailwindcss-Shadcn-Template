import "./App.css";
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { MainPage } from "./pages/main-page";
import { ThemeProvider } from "@/components/ui/theme-provider"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      [
        (<Route path={'/'} element={<MainPage />}></Route>),
      ]
    )
  )
  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
