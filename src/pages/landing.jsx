import { Link } from "react-router-dom";

import { IoFastFood } from "react-icons/io5";
import { FaChild } from "react-icons/fa6";
import { GiFruitBowl } from "react-icons/gi";

function Landing({language}) {
    return(
        <div className="min-h-screen">
            <section id="home" className="min-h-lvh flex items-center px-5 py-10">
                <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">
                    {/* left */}
                    <div>
                        <h1 className="mt-5 text-5xl font-bold leading-tight text-gray-900 md:text-6xl">
                            <span className="text-[#345C9A]">Nino</span>
                            {language === "eng"
                                ? " AI Your Private Chef."
                                : " AI Chef Pribadi Anda"
                            }
                        </h1>

                        <p>
                            {/* Temukan resep lezat dari bahan yang kamu punya. Nino AI siap membantu menemukan ide masakan yang tepat untukmu. */}
                            {language === "eng"
                                ? "Have ingredients but don't know what to cook? Nino AI helps you discover delicious recipes based on the ingredients you have."
                                : "Punya bahan makanan tapi bingung mau masak apa? Nino AI membantu menemukan resep yang sesuai dengan bahan yang kamu punya."
                            }
                        </p>

                        <div className="mt-7">
                            <Link
                                to="/chat"
                                className="rounded-xl bg-[#345C9A] px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-200 
                                transition hover:bg-[#294B80]"
                            >
                                {language === "eng"
                                    ? "Find a Recipe "
                                    : "Mulai Cari Resep "
                                }
                                →
                            </Link>
                        </div>
                    </div>

                    {/* right */}
                    <div className="w-full flex justify-end">
                        <div className="flex flex-col items-center justify-center w-full max-w-md rounded-3xl border border-gray-100 bg-white p-5 shadow-xl">

                            {/* header */}
                            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-400">
                                {language === "eng"
                                    ? "Explore Nino AI Modes"
                                    : "Jelajahi Mode Nino AI"
                                }
                            </p>

                            <div className="w-full max-w-md space-y-3">

                                {/* normal */}
                                <button className=" group w-full rounded-2xl border border-gray-200 bg-white p-4 text-left shadow-sm transition duration-200 
                                        hover:-translate-y-1 hover:border-[#345C9A] hover:shadow-lg" >
                                    <div className="flex items-center gap-4">

                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                                            <IoFastFood/>
                                        </div>

                                        <div className="flex-1">
                                            <h3 className="font-bold text-gray-900">
                                                Normal
                                            </h3>

                                            <p className="text-sm text-gray-500">
                                                {language === "eng"
                                                    ? "Everyday recipes"
                                                    : "Resep untuk sehari-hari"
                                                }
                                            </p>
                                        </div>
                                    </div>
                                </button>

                                {/* child */}
                                <button className=" group w-full rounded-2xl border border-gray-200 bg-white p-4 text-left shadow-sm transition duration-200 
                                        hover:-translate-y-1 hover:border-[#345C9A] hover:shadow-lg">
                                    <div className="flex items-center gap-4">

                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                                            <FaChild/>
                                        </div>

                                        <div className="flex-1">
                                            <h3 className="font-bold text-gray-900">
                                                {language === "eng"
                                                    ? "Kids"
                                                    : "Anak"
                                                }
                                            </h3>

                                            <p className="text-sm text-gray-500">
                                                {language === "eng"
                                                    ? "Recipes for children"
                                                    : "Resep untuk anak-anak"
                                                }
                                            </p>
                                        </div>

                                    </div>
                                </button>

                                {/* Calorie */}
                                <button className=" group w-full rounded-2xl border border-gray-200 bg-white p-4 text-left shadow-sm transition duration-200 
                                        hover:-translate-y-1 hover:border-[#345C9A] hover:shadow-lg">
                                    <div className="flex items-center gap-4">

                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                                            <GiFruitBowl/>
                                        </div>

                                        <div className="flex-1">
                                            <h3 className="font-bold text-gray-900">
                                                {language === "eng"
                                                    ? "Calorie"
                                                    : "Kalori"
                                                }
                                            </h3>

                                            <p className="text-sm text-gray-500">
                                                {language === "eng"
                                                    ? "Recipes based on calories"
                                                    : "Resep berdasarkan kebutuhan kalori"
                                                }
                                            </p>
                                        </div>

                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="w-full h-50 text-white bg-[#345C9A]">
                <div className="mx-auto w-[90%]">
                    <div className="h-40 flex justify-between p-5">
                        <div className="text-lg flex-col">
                            <h1 className="text-3xl font-bold">Navigator</h1>
                            <div><a href="#home">Home</a></div>
                            <Link to="/chat">Chatbot</Link>
                        </div>

                        <div className="text-lg">
                            <h1 className="text-3xl font-bold">{language === "eng" ? "Create By" : "Dibuat Oleh"}</h1>
                            <p>Ghazlan Radiga P</p>
                            
                        </div>

                        <div className="text-lg">
                            <h1 className="text-3xl font-bold">Nino</h1>
                            {language === "eng"
                                ? "Cook Easier, Live Tastier"
                                : "Masak Lebih Mudah, Hidup Lebih Lezat"
                            }
                        </div>
                    </div>
                    
                    <div className="mx-auto w-[80%] h-10 border-t border-t-white p-2 text-center">
                        <p>CopyRight@2026</p>
                    </div>
                </div>
            </footer>
        </div>
        
    );
}

export default Landing;