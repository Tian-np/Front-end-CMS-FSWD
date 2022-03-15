import { sanitize } from "dompurify";
import React, { Fragment } from "react";
import { useContext } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import TagsContext from "../Context/TagContext";

const Tagspage = () => {
  const { tags, createTags } = useContext(TagsContext);

  createTags("TagsComplete");

  return (
    <>
      {tags.map((tag, index) => (
        <Fragment key={index}>
          <li>
            <NavLink to={`/tag/${tag.slug.toLowerCase()}`}>
              <div
                dangerouslySetInnerHTML={{ __html: sanitize(tag.slug) }}
              ></div>
            </NavLink>
          </li>
        </Fragment>
      ))}
    </>
  );
};

export default Tagspage;
