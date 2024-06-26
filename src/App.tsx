import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import MainPage from "./page/MainPage/MainPage"; 

function App() {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
}

export default App;
