import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {



    return (
        <div className="md:w-1/3">
            <h1 className="text-xl text-center">Bookmarked blogs: {bookmarks.length}</h1>
            {
                bookmarks.map((bookmark, index)=><Bookmark key={index} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired
}

export default Bookmarks;