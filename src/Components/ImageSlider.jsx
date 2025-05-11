import React, { useEffect, useState } from "react";

const ImageSlider = ({ images }) => {
    const [index, setIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(null);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setPrevIndex(index);
            setFade(true);
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % images.length);
                setFade(false);
            }, 500); // duration of the fade-out before switching
        }, 5000);

        return () => clearInterval(interval);
    }, [index, images.length]);

    return (
        <div className="relative w-full h-full rounded-lg overflow-hidden">
            {/* Current image */}
            <img
                src={images[index]}
                alt={`Slide ${index}`}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${fade ? "opacity-0" : "opacity-100"
                    }`}
            />

            {/* Previous image (used for fade effect) */}
            {prevIndex !== null && (
                <img
                    src={images[prevIndex]}
                    alt={`Slide ${prevIndex}`}
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${fade ? "opacity-100" : "opacity-0"
                        }`}
                />
            )}
        </div>
    );
};

export default ImageSlider;
