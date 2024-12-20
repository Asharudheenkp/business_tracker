import Logo from "../../../public/site_images/logo.webp"
export default function ApplicationLogo({width}) {
    return (
        <img src={Logo} alt="Logo" className={`${width ? width :'w-28'}`}/>
    );
}
