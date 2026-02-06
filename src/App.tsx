import { BrowserRouter } from "react-router";
import { Router } from "./routes/Routes";

export function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}
