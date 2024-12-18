import { Head, Link } from "@inertiajs/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="bg-">
                <div className="w-[95%] md:w-[80%] mx-auto min-h-screen ">
                    <header className="grid grid-cols-2 items-center gap-2 py-10">
                        <div className="flex  lg:justify-start">
                            <h1 className="text-2xl font-semibold">Ponnus kitchen</h1>
                        </div>
                        <nav className="-mx-3 flex flex-1 justify-end">
                            {auth.user ? (
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

                    <main>
                        <h2 className="mt-28 text-4xl font-extrabold w-2/5 leading-snug text-left">
                        🕒 Anytime Snacks, Always Delicious! 🌮 Satisfy Your Cravings, Day or Night!
                        </h2>
                    </main>

                    <footer className="absolute bottom-0 left-0 w-full py-5">
                        <div className="text-center text-sm text-black">
                            Developed by{" "}
                            <a
                                href="https://github.com/Asharudheenkp"
                                target="_blank"
                            >
                                Asharudheen Kp
                            </a>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
}
