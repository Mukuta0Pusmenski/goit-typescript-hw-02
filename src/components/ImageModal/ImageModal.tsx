import Modal from "react-modal";
import { Image } from "../../types/Image";

interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  image: Image | null;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onRequestClose, image }) => {
  if (!image) return null;

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <img src={image.urls.full} alt={image.alt_description} />
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default ImageModal;
