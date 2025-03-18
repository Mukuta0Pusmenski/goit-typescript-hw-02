import Modal from "react-modal";

interface Image {
  urls: {
    full: string;
  };
  alt_description?: string;
}

interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  image: Image | null;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onRequestClose, image }) => {
  const customStyles = {
    content: {
      // CSS стилі (можеш залишити, як у тебе)
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
  };

  if (!image || !image.urls || !image.urls.full) {
    return null;
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Image Modal"
      ariaHideApp={false}
    >
      <button onClick={onRequestClose}>Close</button>
      <img src={image.urls.full} alt={image.alt_description} />
    </Modal>
  );
};

export default ImageModal;
