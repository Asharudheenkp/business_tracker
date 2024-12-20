import React from "react";
import image from "../../../../public/site_images/pexels-pixabay-263070.webp";
import { Link } from "@inertiajs/react";
import PrimaryButton from "../PrimaryButton";

const HeroSection = () => {
    return (
        <div>
            <div
                className="relative h-[91vh] bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${image})`,
                }}
            >
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                    <h1
                        className="text-primary text-5xl font-bold px-4 w-[70%] leading-snug mb-10"
                        data-aos="fade-up"
                        data-aos-delay="50"
                    >
                        Every Bite is a Chapter, Every Snack a Story – Take a
                        Bite and Begin!
                    </h1>
                    <Link href={route('products')}>
                        <PrimaryButton data-aos="fade-up" data-aos-delay="100">
                            Shop Now
                        </PrimaryButton>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
