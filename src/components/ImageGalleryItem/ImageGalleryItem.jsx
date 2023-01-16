import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ photos, onClick }) => {
    return (
        <>
        {photos.map(({ id, webformatURL, largeImageURL, tags }) => (
        <li className="gallery-item" key={id} onClick={()=> onClick(largeImageURL)}>
            <img src={webformatURL} alt={tags} className='gallery-item-img'/>
        </li>)
        )
    }</>)
}

ImageGalleryItem.protoTypes = {
    photos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        webformatURL: PropTypes.string,
        largeImageURL: PropTypes.string,
        tags: PropTypes.string,
    })),
    onClick: PropTypes.func,
}