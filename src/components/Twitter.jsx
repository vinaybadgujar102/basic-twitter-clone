import { memo, useCallback, useState } from "react";
import AddTweet from "./AddTweet";
import TweetList from "./TweetList";

const initialDummyTweets = [
  {
    id: 0,
    content: "Hello, React!",
    likeCount: 10,
    createdAt: new Date(),
  },
  {
    id: 1,
    content: "Bye, React!",
    likeCount: 5,
    createdAt: new Date(),
  },
  {
    id: 2,
    content: "Hi, React! Again",
    likeCount: 2,
    createdAt: new Date(),
  },
];

const MemoisedAddTweet = memo(AddTweet);

function Twitter() {
  const [tweets, setTweets] = useState(initialDummyTweets);

  const handleAddTweet = useCallback(
    (text) => {
      let nextId = tweets.length > 0 ? tweets[tweets.length - 1].id + 1 : 0;
      setTweets([
        ...tweets,
        {
          content: text,
          likeCount: Math.floor(Math.random() * 10),
          id: nextId,
          createdAt: new Date(),
        },
      ]);
    },
    [tweets]
  );

  const handleEditTweet = useCallback(
    (tweet) => {
      // this incoming tweet is updated tweet
      setTweets(
        tweets.map((currentTweet) => {
          if (currentTweet.id === tweet.id) {
            return tweet;
          }
          return currentTweet;
        })
      );
    },
    [tweets]
  );

  const sortTweets = useCallback(() => {
    tweets.sort((t1, t2) => t2.createdAt.getTime() - t1.createdAt.getTime());
    setTweets([...tweets]);
  }, [tweets]);

  return (
    <>
      <MemoisedAddTweet onAddTweet={handleAddTweet} />
      <button onClick={sortTweets}>Sort Tweet By CreatedAt</button>
      <TweetList tweets={tweets} onEditTweet={handleEditTweet} />
    </>
  );
}

export default Twitter;
