
import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div>
            <h1 className='text-4xl font-bold p-4 my-2 bg-gray-500 rounded-md '>{title}</h1>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
}

export default Bookmark;