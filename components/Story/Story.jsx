import { useState } from "react";
import 'react-animated-slider/build/horizontal.css';
import img2 from "../../assests/profile-icon/img.jpg";
import img1 from "../../assests/profile-icon/profile-icon.png";
const Story = () => {
  const [active, setActive] = useState(0);
  const imgArray = [
    img1,
    img2,
    img1,
    img2,
    img1,
    img2,
    img1,
    img2,
    img1,
    img2,
    img1,
    img2,
  ];

  const nextOne = () => {
    setActive(imgArray.length + 1);
  };

  return (
    <>
     
    </>
  );
};

export default Story;
