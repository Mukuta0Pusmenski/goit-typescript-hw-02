import { useState } from "react";
import styles from "./App.module.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import { Image } from "./types/Image";

const App: React.FC = () => {
  const [query, setQuery] = useState<string | undefined>(undefined);
  const [images, setImages] = useState<Image[]>([]);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [error, setError] = useState("");

  const fetchImages = async (searchQuery: string, page: number) => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://api.unsplash.com/search/photos?query=${searchQuery}&page=${page}&client_id=YOUR_ACCESS_KEY`);
      const data = await response.json();
      setImages((prevImages) => [...prevImages, ...data.results]);
    } catch (err) {
      setError("Failed to fetch images");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearchSubmit = (searchQuery: string) => {
    setQuery(searchQuery);
    setImages([]);
    setPage(1);
    fetchImages(searchQuery, 1);
  };

  const handleLoadMore = () => {
    fetchImages(query || "", page + 1);
    setPage((prevPage) => prevPage + 1);
  };

  const handleImageClick = (image: Image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.App}>
      <SearchBar onSubmit={handleSearchSubmit} />
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {images.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />}
      <ImageModal isOpen={isModalOpen} onRequestClose={closeModal} image={selectedImage} />
    </div>
  );
};

export default App;
