import { Fragment, useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import PostsContext from "../Context/PostContext";
import { sanitize } from "dompurify";
import TagsContext from "../Context/TagContext";

const Tags = (props) => {
  const { posts } = useContext(PostsContext);
  const { tags } = useContext(TagsContext);
  const { location } = useHistory();

  const [currentTagsId, setCurrentTagsId] = useState(null);

  useEffect(() => {
    const slug = location.pathname.split("/")[2];

    let localStorage = [];

    for (let item of tags) {
      if (item.name.toUpperCase() === slug.toUpperCase()) {
        localStorage.push(item);
      }
    }

    setCurrentTagsId({
      id: localStorage[0]?.id,
      name: localStorage[0]?.name,
    });
  }, [tags, location]);

  const renderContent = () => {
    return posts.map((item, index) => {
      let { tags } = item;

      if (tags?.indexOf(currentTagsId?.id) !== -1) {
        return (
          <Fragment>
            <div className=" flex justify-center flex-wrap">
              <div
                key={index}
                className="w-full text-4xl"
                dangerouslySetInnerHTML={{
                  __html: sanitize(item.title.rendered),
                }}
              ></div>
              <div
                className="w-1/2 text-justify"
                key={index}
                dangerouslySetInnerHTML={{
                  __html: sanitize(item.content.rendered),
                }}
              ></div>
              {/* <hr className="bg-white"/> */}
            </div>
          </Fragment>
        );
      }
    });
  };

  return (
    <>
      <div className="w-full h-full justify-center">{renderContent()}</div>
    </>
  );
};

export default Tags;
