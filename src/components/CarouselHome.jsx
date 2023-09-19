
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';


const CarouselHome=()=>{
  const images = [
    {
      src: "src/images/hero_img.png",
      alt: "Imagen 1",
    },
    {
      src: "src/images/hero_img.png",
      alt: "Imagen 2",
    },
    {
      src: "src/images/hero_img.png",
      alt: "Imagen 3",
    },
  ];

  return (
    <Carousel className=''>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <Image src={image.src} alt={image.alt} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselHome