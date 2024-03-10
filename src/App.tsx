import { BrowserRouter } from "react-router-dom";

import Root from "./routes/root";
import { UserProgressContextProvider } from "./context/UserProgressContext";
import { RecordFakeDataContextProvider } from "./context/recordFakeData";
import "../src/styles/globals.scss";

function App() {
  return (
    <BrowserRouter>
      <RecordFakeDataContextProvider>
        <UserProgressContextProvider>
          <Root />
        </UserProgressContextProvider>
      </RecordFakeDataContextProvider>
    </BrowserRouter>
  );
}

export default App;
