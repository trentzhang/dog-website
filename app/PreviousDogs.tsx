import { Image } from "@nextui-org/react";
import React from "react";
const importAll = (r: any) => r.keys().map(r);

const imageContext = require.context(
  "../public/previous-dogs",
  false,
  /\.(png|jpe?g|svg)$/
);

const images = importAll(imageContext);

console.log("images", images[0].default);
const PreviousDogs: React.FC = () => (
  <div className="carousel rounded-box gap-3 mt-8">
    {images.map((image: any, index: any) => (
      <div className="carousel-item " key={index}>
        <Image
          isZoomed
          src={image.default.src}
          alt={`Image ${index}`}
          className="object-cover w-full h-96"
        />
      </div>
    ))}
  </div>
);

export default PreviousDogs;
