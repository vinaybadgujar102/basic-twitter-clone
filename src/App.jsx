import "./App.css";
import TweetList from "./components/TweetList";

const initialDummyTweets = [
  {
    id: 0,
    content: "Hello, React!",
    likeCount: 10,
  },
  {
    id: 1,
    content: "Bye, React!",
    likeCount: 5,
  },
  {
    id: 2,
    content: "Hi, React! Again",
    likeCount: 2,
  },
];

function App() {
  return (
    <div>
      <TweetList tweets={initialDummyTweets} />
    </div>
  );
}

export default App;
