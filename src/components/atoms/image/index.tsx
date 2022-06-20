// @packages
import BootstrapImage from 'react-bootstrap/Image';

// @types
type ImageProps = {
  alt?: string;
  className?: string;
  errorId?: string;
  id?: string;
  width?: number;
  height?: number;
  src: string;
};

const Image = ({
  alt,
  className,
  errorId,
  width,
  height,
  id,
  src
} : ImageProps) => {
  const imgProps: ImageProps = {
    src,
    width,
    height
  };

  if (alt) {
    imgProps.alt = alt;
  }

  if (className) {
    imgProps.className = className;
  }

  if (id) {
    imgProps.id = id;
  }

  const handleErrorImage = (e: any) => {
    if (errorId && e.type === 'error') {
      const card = document.getElementById(errorId);
      if (card) {
        card?.parentNode?.removeChild(card);
      }
    }
  };

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <BootstrapImage {...imgProps} onError={handleErrorImage}/>
  );
};

Image.defaultProps = {
  alt: ''
};

export default Image;
