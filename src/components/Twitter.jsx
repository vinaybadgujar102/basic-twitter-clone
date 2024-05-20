import { useState } from "react";
import AddTweet from "./AddTweet";
import TweetList from "./TweetList";

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

function Twitter() {
  const [tweets, setTweets] = useState(initialDummyTweets);

  const handleAddTweet = (text) => {
    let nextId = tweets.length > 0 ? tweets[tweets.length - 1].id + 1 : 0;
    setTweets([
      ...tweets,
      {
        content: text,
        likeCount: Math.floor(Math.random() * 10),
        id: nextId,
      },
    ]);
  };

  return (
    <>
      <AddTweet onAddTweet={handleAddTweet} />
      <TweetList tweets={tweets} />
    </>
  );
}

export default Twitter;