import React from "react";
import LightGallery from "lightgallery/react";

// Import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-fullscreen.css";

// Import plugins if needed
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgFullscreen from "lightgallery/plugins/fullscreen";

const Gallery = ({ images }) => {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  
  return (
    <div className="max-w-7xl mx-auto">
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail, lgZoom, lgFullscreen]}
        selector=".gallery-item"  // Set selector for individual items
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <a
              key={index}
              href={image.fullImage}
              className="gallery-item block"  // Add the selector class here
            >
              <img
                alt={image.altText}
                src={image.thumbImage}
                className="w-full h-auto object-cover rounded"
              />
            </a>
          ))}
        </div>
      </LightGallery>
    </div>
  );
};

export default Gallery;
