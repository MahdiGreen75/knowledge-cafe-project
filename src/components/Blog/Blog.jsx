import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    console.log(blog)
    return (
        <div>
            
        </div>
    );
};

Blog.propTypes = {
    Blog: PropTypes.object.isRequired,
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