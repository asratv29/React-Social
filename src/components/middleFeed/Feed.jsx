import Post from "../post/Post";
import Shared from "../post/shared/Shared";
import Story from "../stories/Story";

export default function Feed() {
  return <div>
    <Story />
    <Post />
    <Shared />
  </div>;
}
