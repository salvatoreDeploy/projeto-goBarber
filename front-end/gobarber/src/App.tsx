import GlobalStyles from "./styles/global";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { AppProvider } from "./hook";
import { ToastContainer } from "./components/ToatContainer";
function App() {
  return (
    <>
      <GlobalStyles />
      <AppProvider>
        <SignIn />
      </AppProvider>
    </>
  );
}

export default App;
