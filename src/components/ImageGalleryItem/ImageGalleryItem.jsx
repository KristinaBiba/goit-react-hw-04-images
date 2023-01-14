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
