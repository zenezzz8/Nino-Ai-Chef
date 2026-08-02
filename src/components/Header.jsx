function Header({
    language,
    setLanguage,
}) {
    
    return (
        <div className="fixed top-0 left-0 right-0 py-2 bg-gradient-to-b from-white via-white/100 to-transparent">
            <div className="mx-auto w-[95%]">
                <div className="flex items-center justify-between text-3xl font-bold">
                    <h1>Nino</h1>

                    <select 
                        value={language}
                        onChange={(event) => setLanguage(event.target.value)}
                        className="outline-none text-2xl"
                        >
                        <option value="eng">ENG</option>
                        <option value="id">ID</option>
                    </select>
                
                </div>  
            </div>
        </div>
    );
}

export default Header;