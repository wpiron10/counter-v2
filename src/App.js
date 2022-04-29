import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  const [counter, setCounter] = useState([0]);

  const HandleLess = () => {
    return setCounter(counter - 1);
  };
  const HandleMore = () => {
    return setCounter(counter + 1);
  };

  const AddTab = () => {
    const newTab = [
      ...setCounter(
        <Content
          counter={counter}
          HandleLess={HandleLess}
          HandleMore={HandleMore}
          AddTab={AddTab}
        />
      ),
    ];
    return newTab;
  };

  return (
    <div className="App">
      <Header />
      <div className="content-box">
        <Content
          counter={counter}
          HandleLess={HandleLess}
          HandleMore={HandleMore}
          AddTab={AddTab}
        />
      </div>
    </div>
  );
}

export default App;
