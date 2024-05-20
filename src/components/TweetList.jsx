import Tweet from "./Tweet";
import "../CSS/TweetList.css";
function TweetList({ tweets }) {
  return (
    <ul className="tweet-list">
      {tweets.map((tweet) => (
        <li className="tweet-like-wrapper">
          <Tweet
            content={tweet.content}
            likeCount={tweet.likeCount}
            createdAt={tweet.createdAt.toString()}
          />
        </li>
      ))}
    </ul>
  );
}

export default TweetList;
