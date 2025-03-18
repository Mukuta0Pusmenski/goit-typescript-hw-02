import styles from "./ImageCard.module.css";

interface Image {
  urls: {
    small: string;
    full: string;
  };
  alt_description: string;
}

interface ImageCardProps {
  image: Image;
  onImageClick: (image: Image) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onImageClick }) => {
  const { urls, alt_description } = image;

  if (!urls || !urls.small) {
    console.error("Image URLs are missing", image);
    return null;
  }

  return (
    <div className={styles.card} onClick={() => onImageClick(image)}>
      <img src={urls.small} alt={alt_description} className={styles.image} />
    </div>
  );
};

export default ImageCard;
