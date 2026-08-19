function Header({
    language,
    setLanguage,
}) {
    
    return (
        <div className="fixed top-0 left-0 right-0 py-2 bg-gradient-to-b from-white via-white/100 to-transparent z-50">
            <div className="mx-auto w-[95%] flex justify-between font-bold">
                <h1 className="text-3xl">Nino</h1>

                <div className="inline-flex items-center gap-2 text-2xl">
                    <span className="text-slate-600">ID</span>

                    <div className="relative inline-block w-11 h-7">
                        <input
                            id="language-switch"
                            type="checkbox"
                            checked={language === "eng"}
                            onChange={(event) =>
                                setLanguage(event.target.checked ? "eng" : "id")
                            }
                            className="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-slate-800 cursor-pointer transition-colors duration-300"
                        />

                        <label
                            htmlFor="language-switch"
                            className="absolute top-1 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer"
                        />
                    </div>

                    <span className="text-slate-600">ENG</span>
                </div>
            </div>
        </div>
    );
}

export default Header;