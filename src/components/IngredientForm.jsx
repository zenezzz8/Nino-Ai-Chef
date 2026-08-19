import { useState } from "react";
import { FaChild } from "react-icons/fa6";
import { GiFruitBowl } from "react-icons/gi";
import { IoFastFood } from "react-icons/io5";


function IngredientForm({
  ingredients,
  setIngredients,
  error,
  handleSearch,
  language,
  mode,
  setMode,
}) {
  const [isOpen, setIsOpen] = useState(false);

  // Logo berdasarkan mode
  let modeIcon;

  if (mode === "normal") {
    modeIcon = <IoFastFood/>;
  } else if (mode === "child") {
    modeIcon = <FaChild/> ;
  } else if (mode === "calorie") {
    modeIcon = <GiFruitBowl/> ;
  } else {
    modeIcon = <IoFastFood/>;
  }

  return (
    <div className="fixed max-w-3xl mx-auto bottom-4 left-0 right-0">
        <div className="relative items-center justify-center border border-gray-100 bg-white rounded-4xl shadow-2xl flex p-1">

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="absolute left-3 h-10 w-10 rounded-full flex items-center justify-center bg-blue-400 text-white hover:bg-[#345C9A]/10 hover:text-black transition">
            <span className="text-lg">
              {modeIcon}
            </span>
          </button>

          {/* DROPDOWN */}
          {isOpen && (
            <div className="absolute bottom-15 left-0 w-48 bg-white border border-gray-100 rounded-2xl shadow-xl p-1 z-50">
              {/* NORMAL */}
              <button
                type="button"
                onClick={() => {
                  setMode("normal");
                  setIsOpen(false);
                }}
                className={` w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left
                  ${ mode === "normal" ? "bg-[#345C9A] text-white" : "text-gray-700 hover:bg-[#345C9A]/10"} `}>
                <span><IoFastFood/></span>

                <span>
                  {language === "eng"
                    ? "Normal"
                    : "Normal"}
                </span>
              </button>

              {/* CHILD */}
              <button
                type="button"
                onClick={() => {
                  setMode("child");
                  setIsOpen(false);
                }}
                className={` w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left
                  ${ mode === "child" ? "bg-[#345C9A] text-white" : "text-gray-700 hover:bg-[#345C9A]/10"} `}>
                <span><FaChild /></span>

                <span>
                  {language === "eng"
                    ? "For Children"
                    : "Untuk Anak"}
                </span>
              </button>

              {/* CALORIE */}
              <button
                type="button"
                onClick={() => {
                  setMode("calorie");
                  setIsOpen(false);
                }}
                className={` w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left 
                  ${ mode === "calorie"   ? "bg-[#345C9A] text-white"   : "text-gray-700 hover:bg-[#345C9A]/10"} `}>
                <span><GiFruitBowl /></span>

                <span>
                  {language === "eng"
                    ? "Low Calorie"
                    : "Rendah Kalori"}
                </span>
              </button>
            </div>
          )}
          
          <textarea
            value={ingredients}
            onChange={(event) =>
              setIngredients(event.target.value)
            }
            placeholder=
            {language === "eng"
              ? "Add food ingredients..."
              : "Masukan bahan makanan"
            }
            rows={1}
            className=" w-full resize-none bg-transparent border-none outline-none py-4 px-15 max-h-40 text-[#345C9A]
            "
          />

          <button
            onClick={handleSearch}
            className="
              absolute right-3 bottom-3 h-10 w-10 rounded-full bg-[#345C9A] text-white flex items-center justify-center hover:opacity-90
            ">
            ↑
          </button>
        </div>

        {error && (
          <p className="text-red-500 mt-2 text-sm">
            {error}
          </p>
        )}

    </div>
  );
}

export default IngredientForm;