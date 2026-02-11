import { BrowserRouter } from "react-router";
import { Router } from "./routes/Routes";
import { UserProvider } from "./contexts/UserContext";

export function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </UserProvider>
  )
}
