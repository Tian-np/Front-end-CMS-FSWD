import { useContext, useState } from "react";
import PostsContext from "../Context/PostContext";
import { sanitize } from "dompurify";
import CommentsContext from "../Context/CommentsContext";
import cat from "../img/cat.png";

const Comments = ({ post_id }) => {
  const { posts } = useContext(PostsContext);
  const { comments } = useContext(CommentsContext);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    let [day, month, year, hour, min, sec] = [
      new Date().getDate(),
      new Date().getMonth() + 1,
      new Date().getFullYear(),
      new Date().getHours(),
      new Date().getMinutes(),
      new Date().getSeconds(),
    ];

    // console.log(day, month, year, hour, min, sec)

    let reDay = String(day).length === 1 ? `0${day}` : day;
    let reMonth = String(month).length === 1 ? `0${month}` : month;
    let reHour = String(hour).length === 1 ? `0${hour}` : hour;
    let reMin = String(min).length === 1 ? `0${min}` : min;
    let reSec = String(sec).length === 1 ? `0${sec}` : sec;

    let datetime = `${year}-${reMonth}-${reDay}T${reHour}:${reMin}:${reSec}`;

    let data = {
      post: post_id,
      author_url: "",
      date: `${datetime}`,
      author_name: `${name}`,
      content: `${comment}`,
      type: "comment",
    };

    await fetch("https://fswd-wp.devnss.com/wp-json/wp/v2/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic ZnN3ZDpmc3dkLWNtcw==",
      },
      body: JSON.stringify(data),
    });
  };

  return (
    <>
      {comments.map((comment, index) => {
        if (comment.post === post_id) {
          return (
            <div key={index} className="mb-3.5 w-full flex justify-center">
              <div className="w-1/4 border border-white rounded-md flex flex-wrap justify-center ">
                <div className="w-full h-1/2 flex mb-2 p-2">
                  <img src={`${cat}`} className="w-12 h-10" />
                  {/* <div dangerouslySetInnerHTML={{__html:sanitize(comment.author_avatar_urls[24])}} /> */}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: sanitize(comment.author_name),
                    }}
                    className="pl-3.5"
                  ></div>
                </div>
                <div className="w-full flex justify-start pb-4">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: sanitize(comment.content.rendered),
                    }}
                    className="pl-5"
                  ></div>
                </div>
              </div>
            </div>
          );
        } else {
          console.log("Error Can't get comment ");
        }
      })}
      <form
        onSubmit={handleOnSubmit}
        className="w-full h-1/4 bg-gray-300 p-5 flex justify-center"
      >
        <div className="h-full w-3/4">
          <input
            className="w-full h-1/3 border border-black p-4 rounded-md bg-gray-500 focus:duration-150 focus:transition hover:bg-gray-700 focus:bg-white focus:outline-none mb-3"
            placeholder="Input name "
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <div className="w-full flex h-1/2">
            <input
              className="w-full h-2/3 border border-black p-4 rounded-md bg-gray-500 hover:bg-gray-700 focus:duration-150 focus:transition focus:bg-white focus:outline-none"
              placeholder="Create comment"
              onChange={(e) => setComment(e.target.value)}
              value={comment}
            />
            <button
              type="submit"
              className="text-white bg-gray-600 h-2/3 ml-4 rounded-md duration-150 transition p-2 hover:bg-gray-900"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Comments;
