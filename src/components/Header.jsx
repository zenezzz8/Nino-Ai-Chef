function Header({
    language,
    setLanguage,
}) {
    
    return (
        <div className="fixed top-0 left-0 right-0 h-15 p-3">
            <div className="mx-auto w-[95%]">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold">Nino</h1>
                    </div>

                    <div className="font-bold">
                        <select 
                            value={language}
                            onChange={(event) => setLanguage(event.target.value)}
                            className="outline-none text-xl text-center"
                            >
                            <option value="eng">ENG</option>
                            <option value="id">ID</option>
                        </select>
                    </div>
                
                </div>  
            </div>
        </div>
    );
}

export default Header;