import CommentsContext from '../Context/CommentsContext';
import { sanitize } from 'dompurify';
import React from 'react';
import { useContext } from 'react'

const Commentpage = () => {
  const { comments, createComments, getComments } = useContext(CommentsContext);
  createComments("CommentComplete");

  return (
      <>
        {comments.map((comment, index) => (
          <>
            <div dangerouslySetInnerHTML={{__html:sanitize(comment.auther_name)}} key={comment.id}></div> 
            <div dangerouslySetInnerHTML={{__html:sanitize(comment.content.rendered)}} key={index}></div> 
          </>
        ))}
      </>
        )
        }

export default Commentpage