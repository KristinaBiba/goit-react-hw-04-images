import { Component } from "react";
import { Button } from "./Button/Button";

import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Modal } from "./Modal/Modal";
import { Searchbar } from './Searchbar/Searchbar';
import {Loader} from './Loader/Loader'

export class App extends Component {
  state = {
    photos: [],
    searchName: '',
    page: 1,
    isModalOpen: false,
    largeImg: '',
    loading: false,
    totalHits: 0,
  };


  componentDidUpdate(_, prevState) {

    if (prevState.searchName !== this.state.searchName || prevState.page !== this.state.page ) {

      fetch(`https://pixabay.com/api/?q=${this.state.searchName}&page=${this.state.page}&key=31406001-9559e1c679da811c7e2a75baf&image_type=photo&orientation=horizontal&per_page=12`)
        .then(response => {
          this.setState({ loading: true });

          if (!response.ok) {
            throw new Error(response.status);
          }
          return response.json();
        })
        .then(data => {
          this.setState(prevState => { return { photos: [...prevState.photos, ...data.hits], totalHits: Math.ceil(data.totalHits / 12) } }) 
        })
        .catch(error => {
        })
        .finally( () => this.setState({ loading: false }));
    }
    return;
  };

  toggleModal = () => (this.setState(state => ({ isModalOpen: !state.isModalOpen })));

  handleSearch = (searchName) => {
    this.setState({searchName: searchName, page: 1, photos: []})
  };

  handleLoadMore = () => {
    this.setState(prevState => { return { page: prevState.page + 1 } })
  }

  handleGalleryClick = (img) => {
    this.setState({ largeImg: `${img}` });
    this.toggleModal();
  }

  render() {

    return (
      <div className="app" >
        <Searchbar onSub={this.handleSearch} />

        {(this.state.photos.length > 0) && (<ImageGallery >
          <ImageGalleryItem photos={this.state.photos} onClick={this.handleGalleryClick}/>
        </ImageGallery>)}
        
        {(this.state.photos.length > 0 && ( this.state.totalHits !== this.state.page)) &&  <Button onClick={this.handleLoadMore} />}
        
        {this.state.isModalOpen && <Modal src={this.state.largeImg} toggleModal={this.toggleModal} />}

        {this.state.loading && <Loader/>}
        
     </div>
    );
  };
}
