import React from "react";
import "./App.scss";
import { Banner, Profile, Footer, Testimonials } from "./components";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import image1 from "./assets/images/_DSC3622.jpg";
import image2 from "./assets/images/_DSC3623.jpg";
import image3 from "./assets/images/_DSC3629.jpg";
import image4 from "./assets/images/_DSC3632.jpg";
import image5 from "./assets/images/_DSC3643.jpg";
import image6 from "./assets/images/_DSC3671.jpg";
import image7 from "./assets/images/_DSC3681.jpg";
import image8 from "./assets/images/_DSC3688.jpg";
import image9 from "./assets/images/_DSC3689.jpg";
import image10 from "./assets/images/_DSC3692.jpg";
import image11 from "./assets/images/_DSC3696.jpg";
import image12 from "./assets/images/_DSC3698.jpg";
import image13 from "./assets/images/_DSC3700.jpg";
import image14 from "./assets/images/_DSC3701.jpg";
import image15 from "./assets/images/_DSC3704.jpg";
import image16 from "./assets/images/_DSC3710.jpg";
import image17 from "./assets/images/_DSC3722.jpg";
import image18 from "./assets/images/_DSC3728.jpg";

function App() {
  return (
    <>
      <Banner />
      <Profile />
      <ImageGallery images={[image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12,image13,image14,image15,image16,image17,image18]} />
      {/* <Testimonials /> */}
      <Footer />
    </>
  );
}

export default App;
