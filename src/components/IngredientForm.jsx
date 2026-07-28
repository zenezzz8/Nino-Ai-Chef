function IngredientForm({
  ingredients,
  setIngredients,
  error,
  handleSearch,
  language,
}) {

  return (
    <div className="fixed bottom-4 left-0 right-0">
      <div className="max-w-3xl mx-auto">
        <div className="relative border border-gray-100 bg-white  rounded-4xl shadow-2xl flex items-center p-1">
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
            className=" w-full resize-none bg-transparent border-none outline-none p-4 pr-16 max-h-40 text-[#345C9A]
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
    </div>
  );
}

export default IngredientForm;