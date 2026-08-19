import { Link } from "react-router-dom";
// import { FaRobot } from "react-icons/fa";

function Landing() {
    return(
        <div>
            <div className="h-lvh flex items-center px-5 py-10 overflow-hidden bg-white">
                <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">
                    <div>
                        <h1 className="mt-5 text-5xl font-bold leading-tight text-gray-900 md:text-6xl">
                            Nino ai your private chef
                        </h1>

                        <p>
                            Temukan resep lezat dari bahan yang kamu punya. Nino AI siap membantu menemukan ide masakan yang tepat untukmu.
                        </p>

                        <div className="mt-7">
                            <Link
                                to="/chat"
                                className="rounded-xl bg-[#345C9A] px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-200 
                                transition hover:bg-[#294B80]"
                            >
                                Mulai Cari Resep →
                            </Link>
                        </div>
                    </div>

                    {/* <div className="grid justify-end text-end gap-3"> */}
                        {/* chatbot */}
                        {/* <div className="bg-blue-300 font-bold text-2xl px-6 py-3 rounded-xl">
                            <h2>Chatbot ai</h2>
                        </div> */}

                        {/* cek kalori makanan */}
                        {/* <div className="bg-blue-300 font-bold text-2xl px-6 py-3 rounded-xl">
                            <h2>Calori</h2>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Landing;