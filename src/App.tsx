import { BrowserRouter } from "react-router-dom";

import Root from "./routes/root";
import { UserProgressContextProvider } from "./context/UserProgressContext";
import "../src/styles/globals.scss";

function App() {
  return (
    <BrowserRouter>
      <UserProgressContextProvider>
        <Root />
      </UserProgressContextProvider>
    </BrowserRouter>
  );
}

export default App;
