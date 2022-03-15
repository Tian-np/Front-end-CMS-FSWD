import { Fragment, useContext, useState, useEffect } from 'react'
import {useHistory} from 'react-router-dom'
import PostsContext from '../Context/PostContext'
import { sanitize } from "dompurify";
import CategoriesContext from '../Context/CategoryContext';

const Categories = (props) => {
    const { posts } = useContext(PostsContext);
    const { categories } = useContext(CategoriesContext)
    const { location } = useHistory()

    const [currentCategoryId, setCurrentCategoryId] = useState(null)

    useEffect(() => {
        const slug = location.pathname.split('/')[2]

        let localStorage = []
        
        for (let item of categories){
            if (item.name.toUpperCase() === slug.toUpperCase()){
                localStorage.push(item)
            }
        }

        setCurrentCategoryId({id: localStorage[0]?.id, name: localStorage[0]?.name})
    }, [categories, location])


    const renderContent = () => {

        return posts.map((item, index) => {

            let {categories} = item

            if (categories?.indexOf(currentCategoryId?.id) !== -1){
                return (
                    <Fragment>
                        <div className=' flex justify-center flex-wrap'>
                            <div key={index} className='w-full text-4xl' dangerouslySetInnerHTML={{__html: sanitize(item.title.rendered)}}></div>
                            <div className='w-1/2 text-justify' key={index} dangerouslySetInnerHTML={{__html: sanitize(item.content.rendered)}}></div>
                            {/* <hr className="bg-white"/> */}
                        </div>
                    </Fragment>
                )
            }
        })
    }

    return (
        <>
            <div className='w-full h-full justify-center'>
                {renderContent()}   
            </div>
        </>
    )
}


export default Categories