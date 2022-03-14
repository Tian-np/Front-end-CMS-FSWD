import { Fragment, useContext, useMemo } from 'react'
import {useHistory} from 'react-router-dom'
import PostsContext from '../Context/PostContext'
import { sanitize } from "dompurify";
import Comments from './Comments';

const Content = () => {
    const { posts } = useContext(PostsContext);
    const {location} = useHistory()

    const getSlug = location.pathname.slice(1, location.pathname.length - 1).split('-')
    const getSlugUpperCase = location.pathname.replace(/-/g, ' ').slice(1, location.pathname.length - 1).toUpperCase()

    const renderContent = () => {

        let counterChar = 1
        let wrongChar = 0

        return posts.map((content, index) => {

            // if (content.title.rendered)
            if(content.title.rendered.toUpperCase() === getSlugUpperCase){
                return (
                    <Fragment key={index}>
                        <div className='w-full h-full justify-center flex flex-wrap'>
                            <div className='text-4xl w-full ' dangerouslySetInnerHTML={{__html:sanitize(content.title.rendered)}}></div>
                            <div className='w-1/2 nest text-justify mt-5' dangerouslySetInnerHTML={{__html:sanitize(content.content.rendered)}}></div>
                            <div className='w-full nest mt-10'>
                                <h1>
                                    Comments
                                </h1>

                            </div>
                            <div className='w-full flex-wrap flex justify-center'>
                                <Comments post_id={content?.id} />
                            </div>
                        </div>
                    </Fragment>
                )
            }
        })
    }



    return (
        <>
            {renderContent()}
        </>
    )
}


export default Content