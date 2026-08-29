import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { IoFastFood } from "react-icons/io5";
import { FaChild } from "react-icons/fa6";
import { GiFruitBowl } from "react-icons/gi";

import { supabase } from "../service/supabase";

function Landing({language}) {
    const [popular, setPopular] = useState([]);
    const [loadingPopular, setLoadingPopular] = useState(true);

    useEffect(() => {
        const fetchPopular = async () => {
            const { data, error } = await supabase.rpc(
                "get_top_recipes_this_week"
            );

            if (!error) {
                setPopular(data || []);
            } else {
                console.error(error);
            }

            setLoadingPopular(false);
        };

        fetchPopular();
    }, []);

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
                            {language === "eng"
                                ? "Have ingredients but don't know what to cook? Nino AI helps you discover delicious recipes based on the ingredients you have."
                                : "Punya bahan makanan tapi bingung mau masak apa? Nino AI membantu menemukan resep yang sesuai dengan bahan yang kamu punya."
                            }
                        </p>

                        <div className="mt-7 flex gap-3">
                            <Link to="/chat"
                                className="rounded-xl bg-[#345C9A] px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-200 
                                transition hover:bg-[#294B80]"
                            >
                                {language === "eng"
                                    ? "Find a Recipe "
                                    : "Mulai Cari Resep "
                                }
                                →
                            </Link>

                            <a href="#popular"
                                className="rounded-xl bg-[#345C9A] px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-200 
                                transition hover:bg-[#294B80]"
                            >
                                {language === "eng"
                                    ? "Popular This Week"
                                    : "Populer Minggu Ini"
                                }
                            </a>
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

            {/* popular */}
            <section id="popular" className="min-h-lvh pt-10 scroll-mt-10">
                <div className="mx-auto w-full max-w-7xl px-5">
                    {/* Header Section */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#345C9A] sm:text-4xl">
                            {language === "eng"
                                ? "Popular This Week"
                                : "Terpopuler Minggu Ini"
                            }
                        </h2>
                        <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-[#345C9A]/30"></div>
                    </div>

                    {/* Loading Skeleton */}
                    {loadingPopular && (
                        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className="animate-pulse rounded-2xl border border-gray-100 bg-white p-3 shadow-sm">
                                    <div className="h-36 w-full rounded-xl bg-gray-200"></div>
                                    <div className="mt-3 space-y-2">
                                        <div className="h-4 w-3/4 rounded bg-gray-200"></div>
                                        <div className="h-3 w-1/2 rounded bg-gray-200"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Empty State */}
                    {!loadingPopular && popular.length === 0 && (
                        <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-12 text-center">
                            <p className="text-gray-400">
                                {language === "eng"
                                    ? "No popular recipes yet this week."
                                    : "Belum ada resep populer minggu ini."
                                }
                            </p>
                        </div>
                    )}

                    {/* Card Grid - Fixed 5 Columns Layout */}
                    {!loadingPopular && popular.length > 0 && (
                        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                            {popular.slice(0, 5).map((item, index) => (
                                <div key={index}
                                    className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-100 bg-white p-3 
                                    shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-[#345C9A]/20 hover:shadow-xl"
                                >
                                    <div>
                                        {/* Image Container with Zoom Effect */}
                                        <div className="relative h-36 w-full overflow-hidden rounded-xl bg-gray-100">
                                            {item.image_url ? (
                                                <img
                                                    src={item.image_url}
                                                    alt={item.recipe_name}
                                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                            ) : (
                                                <div className="flex h-full w-full items-center justify-center text-gray-300">
                                                    <IoFastFood className="text-4xl" />
                                                </div>
                                            )}
                                        </div>

                                        {/* Title */}
                                        <h3 className="mt-3 font-bold text-gray-800 text-sm line-clamp-2 transition-colors group-hover:text-[#345C9A]">
                                            {item.recipe_name}
                                        </h3>
                                    </div>

                                    {/* Footer Info */}
                                    <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-2.5 text-xs text-gray-400">
                                        <span>
                                            {item.total || 0} {language === "eng" ? "searches" : "kali dicari"}
                                        </span>
                                        <span className="font-semibold text-[#345C9A] opacity-0 transition-opacity group-hover:opacity-100">
                                            →
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
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