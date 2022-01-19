import "./App.css";
import FeedComponent from "./components/FeedComponent/FeedComponent";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";

function App() {
  return (
    <>
      <HeaderComponent />
      <div className="wrapper">
        <FeedComponent />
      </div>
    </>
  );
}

export default App;
