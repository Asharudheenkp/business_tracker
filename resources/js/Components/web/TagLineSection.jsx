import React from "react";
import image from "../../../../public/site_images/pexels-pixabay-263070.webp";

const TagLineSection = () => {
    return (
        <div className="w-[80%] mx-auto">
            <main>
                <div className="grid grid-cols-1 md:grid-cols-2 mt-24 gap-10 items-center">
                    <img
                        src={image}
                        alt="snack image"
                        className="w-full h-[30rem] object-cover rounded-lg"
                        data-aos="fade-right"
                        data-aos-delay="50"
                    />
                    <div className="flex justify-end">
                        <h2
                            className="text-right text-3xl md:text-5xl font-extrabold leading-snug w-4/5 text-secondary"
                            data-aos="fade-left"
                            data-aos-delay="50"
                        >
                            Always Delicious! 🌮 and the best Porikadis in the
                            town!
                        </h2>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default TagLineSection;
