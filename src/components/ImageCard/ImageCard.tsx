import React from "react";
import { Image } from "../../types/Image";

interface ImageCardProps {
  image: Image;
  onImageClick: (image: Image) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onImageClick }) => {
  const { urls, alt_description } = image;

  return (
    <div onClick={() => onImageClick(image)}>
      <img src={urls.small} alt={alt_description || "No description"} />
    </div>
  );
};

export default ImageCard;
