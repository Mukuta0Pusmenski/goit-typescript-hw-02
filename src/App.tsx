import { useState } from "react";
import styles from "./App.module.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

interface Image {
  id: string;
  urls: {
    small: string;
    full: string;
  };
  alt_description: string;
}

const App: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [images, setImages] = useState<Image[]>([]);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [error, setError] = useState<string>("");

  const fetchImages = async (searchQuery: string, page: number) => {
    // Запит до API
  };

  const handleSearchSubmit = (searchQuery: string) => {
    // Логіка пошуку
  };

  const handleImageClick = (image: Image) => {
    // Логіка відкриття модального вікна
  };

  const closeModal = () => {
    // Логіка закриття модального вікна
  };

  const loadMoreImages = () => {
    // Логіка завантаження додаткових зображень
  };

  return (
    <div className={styles.App}>
      <SearchBar onSubmit={handleSearchSubmit} />
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {images.length > 0 && !isLoading && <LoadMoreBtn onClick={loadMoreImages} />}
      <ImageModal isOpen={isModalOpen} onRequestClose={closeModal} image={selectedImage} />
    </div>
  );
};

export default App;
