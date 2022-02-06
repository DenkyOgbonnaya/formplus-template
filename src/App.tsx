import { Provider } from "react-redux";
import Templates from "pages/templates/Templates";
import { store } from "redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Templates />
      </Provider>
    </div>
  );
}

export default App;
