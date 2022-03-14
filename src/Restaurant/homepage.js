import PagesContext from '../Context/PageContext';
import { sanitize } from 'dompurify';
import React from 'react';
import { useContext, Fragment } from 'react'

const Homepage = () => {
  const { pages, createPages } = useContext(PagesContext);

  createPages("PagesComplete");

  return (
    <>
      <div className='flex h-full'>
        <div className='flex w-1/2 h-full items-center justify-center'>
          <a className='font-mono text-9xl pt-20'>HOMEPAGE</a>
        </div>
        <div className='flex w-1/2 h-full items-center justify-center'>
          {pages.map((page, index) => (
            <Fragment key={index}>
              {/* <div dangerouslySetInnerHTML={{__html:sanitize(page.title.rendered)}} key={page.id}></div>  */}
              <a className='font-mono text-xl pr-10 pt-20 text-justify'>
              {page.id === 339 && 
                <div dangerouslySetInnerHTML={{__html:sanitize(page.content.rendered)}}></div> 
              }
              </a>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  )
}

export default Homepage