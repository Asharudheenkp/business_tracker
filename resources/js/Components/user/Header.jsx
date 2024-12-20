import { Link } from "@inertiajs/react";
import React from "react";
import ApplicationLogo from "../ApplicationLogo";

const Header = ({ user }) => {
    return (
        <div className="bg-white w-screen">
            <div className="w-[95%] md:w-[80%] mx-auto">
                <header className="grid grid-cols-2 items-center gap-2 py-5 ">
                    <Link href={route("home")}>
                        <div className="flex  lg:justify-start items-center gap-3">
                            <ApplicationLogo width={"w-16"} />

                            <h1 className="text-2xl font-semibold flex">
                                Ponnus kitchen
                            </h1>
                        </div>
                    </Link>
                    <nav className="-mx-3 flex flex-1 justify-end">
                        {user ? (
                            <Link
                                href={route("dashboard")}
                                className="rounded-md px-3 py-2 ring-1 ring-transparent transition   focus:outline-none focus-visible:ring-[#FF2D20] "
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                {/* <Link
                                            href={route("admin.login")}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition focus:outline-none focus-visible:ring-[#FF2D20] "
                                        >
                                            Admin Log in
                                        </Link>
                                        <Link
                                            href={route("admin.register")}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition  focus:outline-none focus-visible:ring-[#FF2D20] "
                                        >
                                            Admin Register
                                        </Link> */}

                                <Link
                                    href={route("login")}
                                    className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] "
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={route("register")}
                                    className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] "
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </nav>
                </header>
            </div>
        </div>
    );
};

export default Header;
