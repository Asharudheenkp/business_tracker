import { Head } from "@inertiajs/react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import image from "../../../public/site_images/pexels-pixabay-263070.webp";
import Footer from "@/Components/user/Footer";
import Header from "@/Components/user/Header";
import WebLayout from "@/Layouts/WebLayout";
import HeroSection from "@/Components/web/HeroSection";
import TagLineSection from "@/Components/web/TagLineSection";
export default function Welcome() {

    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 700,
            easing: "ease-out-cubic",
        });
    }, []);
    return (
        <>
            <Head title="Ponnus kitchen" />
            <WebLayout>
                <HeroSection/>
                <TagLineSection/>
            </WebLayout>
        </>
    );
}
