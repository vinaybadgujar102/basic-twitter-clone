import "./App.css";
import Tweet from "./components/Tweet";
function App() {
  return (
    <div>
      <Tweet content="Hello World" likeCount={10} />
    </div>
  );
}

export default App;
