import PropTypes from 'prop-types';
import bookMarkBtn from '../../assets/bookmark-btn.svg'

const Blog = ({ blog, handleAddToBookmark }) => {
    const { title, cover_pic, author, author_img, posted_date, reading_time, hashtags } = blog
    return (
        <div>
            <div className='w-3/5'>
                <img className='w-full' src={cover_pic} alt={`Cover picture of ${title}`} />
            </div>
            <div className='flex justify-between'>
                <div className='flex items-center'>
                    <div><img className='w-16 h-16 rounded-full' src={author_img}></img></div>
                    <div className='flex flex-col items-center'><span>{author}</span><span>{posted_date}</span></div>
                </div>
                <div className='flex items-center'>
                    <span>{reading_time}</span>
                    <button onClick={() => handleAddToBookmark(blog)}><img src={bookMarkBtn}  /></button>
                </div>
            </div>
            <h4 className="text-3xl">{title}</h4>
            {
                hashtags.map((item, index) =><span key={index}>#{item}</span>)
            }
            <div className='pb-1 border-b-2 mb-3'><button><span className='underline text-blue-400'>Mark as read</span></button></div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired
}

export default Blog;

// "id": "1",
// "cover_pic": "https://i.ibb.co/vPmkCq2/alexander-zabrodskiy-lvsi2ns-Kafo-unsplash.jpg",
// "title": "Lorem Ipsum",
// "author": "John Doe",
// "author_img": "https://i.ibb.co/Krtptwp/aiony-haust-3-TLl-97-HNJo-unsplash.jpg",
// "posted_date": "2023-09-14",
// "reading_time": "10 minutes",
// "hashtags": [
//     "Lorem",
//     "Ipsum",
//     "Article"
// ]