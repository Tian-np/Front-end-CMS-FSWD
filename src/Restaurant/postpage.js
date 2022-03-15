import PostsContext from "../Context/PostContext";
import { sanitize } from "dompurify";
import React, { Fragment } from "react";
import { useContext } from "react";
import { NavLink } from 'react-router-dom'

const Postpage = () => {
  const { posts, createPost } = useContext(PostsContext);
  // const history = useHistory() 

  createPost("PostComplete");

  const renderTitle = () => {
        let mainHeader = []
        // let content = []
        let isTitle = true

        posts.map((post, index) => {

          // let Category = post.categories()
          // post.categories && catHeader.push({categoryTitle: post.categories})
          // for (let catTitle of Category){
          //   if (catTitle('[3]') !== -1) {
          //     catHeader.push({categoryTitle: catTitle})
          //   } else if (catTitle('[77]')!== -1) {
          //     catHeader.push({categoryTitle: catTitle})
          //   } else if (catTitle('[78]')!== -1) {
          //     catHeader.push({categoryTitle: catTitle})
          //   }
          // }

          let Pagetitle = post.content.rendered.split('\n')
          // post.title.rendered && mainHeader.push(post.title.rendered)
          post.title.rendered && mainHeader.push({title: post.title.rendered, isTitle: isTitle, slug: post.slug})
          for (let item of Pagetitle){
            if (item.search('<h1>') !== -1) {
              // content.push({[`${post.title.rendered}`]: item})
                mainHeader.push({title: item})
            }
            else if (item.search('<h4>') !== -1) {
              // content.push({[`${post.title.rendered}`]: item})
                mainHeader.push({title: item})
            }
            else if (item.search('<p><img') !== -1){
              // console.log(item)
              mainHeader.push({img: item.slice(item.search('src') + 5, item.search('.jpg') + 4)})
            }
          }
      })

      // console.log(mainHeader, content)

      let slugByItem = ''

      for (let counter = 0; counter < mainHeader.length; counter++){
        if (mainHeader[counter]?.slug){
          slugByItem = mainHeader[counter]?.slug
        }
        if (counter < mainHeader.length && mainHeader[counter + 1]?.isTitle && !mainHeader[counter]?.isTitle){
          mainHeader[counter] = {title: mainHeader[counter].title , final: true, slug: slugByItem}
        }

      }
      console.log(mainHeader)

      return mainHeader.map((item, index) => {
        return (
          <article>
            <Fragment key={index}>
                {
                  item?.isTitle && (
                    <div className='text-4xl mb-5 mt-3' dangerouslySetInnerHTML={{__html: sanitize(item.title)}}></div>
                  )
                }
                {
                  item?.img && (
                    <div className='flex justify-center w-full'>
                      <img src={`${item.img}`} className='w-1/2 h-1/2' />
                    </div>
                  )
                }
                {
                  !item?.isTitle && (
                    <article>
                      <div className=' mb-2 text-lg' dangerouslySetInnerHTML={{__html: sanitize(item.title)}}></div>                
                    </article>
                  )
                }
                {
                  item?.final && (
                    <div>
                      <NavLink className='text-blue-600 hover:text-blue-800 transition duration-150 cursor-pointer' to={`/${item.slug}/`}>Read more</NavLink>
                      <hr className="bg-white"/>
                    </div>
                  )
                }
            </Fragment>
          </article>
        )
      })
    }

  return (
    <Fragment>
      <article>
        <div className='w-full h-full flex-col pr-20 pl-20'> 
          {renderTitle()}
        </div>
      </article>
        
    </Fragment>
  );
};
export default Postpage;
