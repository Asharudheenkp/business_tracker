import ApplicationLogo from "@/Components/ApplicationLogo";
import Footer from "@/Components/user/Footer";
import Header from "@/Components/user/Header";
import { Link, usePage } from "@inertiajs/react";

export default function WebLayout({ children }) {
    const auth = usePage().props.auth.user;
    return (
        <>
            <Header user={auth} />
            {children}
            <Footer />
        </>
    );
}
