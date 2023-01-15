import { useEffect, useState } from "react";
import { Button } from "./Button/Button";

import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Modal } from "./Modal/Modal";
import { Searchbar } from './Searchbar/Searchbar';
import {Loader} from './Loader/Loader'
import { useRef } from "react";

export function App() {
  
  const [photos, setPhotos] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [largeImg, setLargeImg] = useState('');
  const [loading, setLoading] = useState(false);
  const [totalHits, setTotalHits] = useState(0);
  
  useEffect(() => {
    if (searchName === '') {
      return;
    }

    fetch(`https://pixabay.com/api/?q=${searchName}&page=${page}&key=31406001-9559e1c679da811c7e2a75baf&image_type=photo&orientation=horizontal&per_page=12`)
      .then(response => {
        setLoading(true);

        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(data => {
        setPhotos([...photos, ...data.hits]);
        setTotalHits(Math.ceil(data.totalHits / 12));
      })
      .catch(error => {
      })
      .finally(() => setLoading(false));
  }, [searchName, page]);

  const toggleModal = () => (setIsModalOpen(!isModalOpen));

  const handleSearch = (searchName) => {
    setPhotos([]);
    setPage(1);
    setSearchName(searchName);
  };

  const handleLoadMore = () => {
    setPage(page + 1); 
  }

  const handleGalleryClick = (img) => {
    setLargeImg(`${img}`);
    toggleModal();
  }


    return (
      <div className="app" >
        <Searchbar onSub={handleSearch} />

        {(photos.length > 0) && (<ImageGallery >
          <ImageGalleryItem photos={photos} onClick={handleGalleryClick}/>
        </ImageGallery>)}
        
        {(photos.length > 0 && ( totalHits !== page)) &&  <Button onClick={handleLoadMore} />}
        
        {isModalOpen && <Modal src={largeImg} toggleModal={toggleModal} />}

        {loading && <Loader/>}
        
     </div>
    );
  };
