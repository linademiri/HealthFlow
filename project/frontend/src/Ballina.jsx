import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from './assets/Ballina.png';
import HealthyLifeImage from './assets/HealthyLifeImage.png';
import Tips1 from './assets/Tips1.png';
import Meals from './assets/Meals.png';
import Ending from './assets/Ending.png';

function Ballina() {
  return (
    <>
      <Image src={image1} fluid />
      <Image src={HealthyLifeImage} fluid  />
      <Image src={Tips1} fluid className="w-100" />
      <Image src={Meals} fluid className="w-100" />
      <Image src={Ending} fluid className="w-100" />

    </>
  );
}

export default Ballina;
