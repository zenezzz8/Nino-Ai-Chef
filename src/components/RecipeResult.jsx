function RecipeResult({ 
  recipe, 
  loading,
  language,
}) {

  return (
    <div>
      {/* default */}
      {!loading && !recipe && (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center max-w-2xl">

            <h2 className="text-5xl font-bold text-[#345C9A] mb-4">
              {language === "eng"
                ? "Nino Your ai chef"
                : "Nino Chef ai mu"
              }
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {language === "eng"
                ? "Turn simple ingredients into special meal"
                : "Dari bahan sederhana menjadi hidangan istimewa."
              }
            </p>

            <div className="w-24 h-1 bg-[#F4D03F] mx-auto rounded-full"></div>

          </div>
        </div>
      )}

      {/* error */}
      {!loading && recipe?.error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-600">
            {recipe.error}
          </p>
        </div>
      )}

      {/* loading */}
      {loading && (
        <div className="mt-15 mb-25">
          <div className="flex gap-2 items-center">
           <div className="w-full animate-pulse space-y-6">
              {/* Name */}
              <div className="h-10 w-2/3 bg-gray-300 rounded-lg"></div>

              {/* Header */}
              <div className="flex gap-6">
                {/* Time and Dificulty */}
                <div className="flex-1 space-y-4">
                  <div className="h-6 w-35 bg-gray-300 rounded-full"></div>
                  <div className="h-6 w-28 bg-gray-300 rounded-full"></div>
                  <div className="h-6 w-35 bg-gray-300 rounded-full"></div>
                  <div className="h-6 w-28 bg-gray-300 rounded-full"></div>
                </div>

                {/* Image */}
                <div className="w-64 h-48 bg-gray-300 rounded-2xl"></div>
              </div>

              {/* Ingredients */}
              <div className="space-y-3">
                <div className="h-7 w-40 bg-gray-300 rounded"></div>

                <div className="h-4 bg-gray-300 rounded"></div>
                <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
                <div className="h-4 w-1/6 bg-gray-300 rounded"></div>
                <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
                <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
                <div className="h-4 w-1/6 bg-gray-300 rounded"></div>
              </div>

              {/* Step */}
              <div className="space-y-3">
                <div className="h-7 w-36 bg-gray-300 rounded"></div>

                <div className="h-4 bg-gray-300 rounded"></div>
                <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
                <div className="h-4 w-3/6 bg-gray-300 rounded"></div>
                <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
                <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
                <div className="h-4 w-1/6 bg-gray-300 rounded"></div>
                <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
              </div>

              {/* Video */}
              {/* <div className="w-full h-80 bg-gray-300 rounded-xl"></div> */}
            </div>
          </div>
        </div>
      )}

      {/* result */}
      {!loading &&
        recipe &&
        !recipe.error && (
          <div className="mt-15 mb-30">
            {/* name */}
            <h3 className="text-4xl font-bold text-[#345C9A] mb-2">
              {recipe.recipeName}
            </h3>

            <div className="w-[99%] h-0.5 mx-auto rounded-full m-2"></div>

            {/* header */}
            <div className="flex">
              <div className="flex flex-col gap-3 mb-6 flex-wrap w-[50%]">
                {/* time */}
                <div className="flex flex-col text-lg">
                  <span className="font-bold text-2xl text-[#345C9A]">
                    {language === "eng"
                      ? "Cooking Time"
                      : "Waktu Memasak"
                    } :
                  </span>
                  
                  {recipe.cookingTime}
                </div>
                

                {/* difficulty */}
                <div className="flex flex-col text-lg">
                  <span className="font-bold text-2xl text-[#345C9A]">
                    {language === "eng"
                      ? "Difficulty"
                      : "Kesulitan"
                    } :
                  </span>

                  {recipe.difficulty}
                </div>
              </div>

              {/* image */}
              <div className="w-[50%] flex justify-end">
                {recipe.image && (
                  <img
                    src={recipe.image}
                    alt={recipe.recipeName}
                    className="border border-transparent w-80 h-55 object-cover rounded-2xl overflow-hidden"
                  />
                )}
              </div>
            </div>
              
            <div className="w-[99%] h-0.5 mx-auto rounded-full m-2"></div>

            {/* body */}
            <div>

              {/* ingredients */}
              <div className="mb-6">
                <h4 className="font-bold text-2xl text-[#345C9A] mb-2">
                  {language === "eng"
                    ? "Ingredients"
                    : "Bahan-bahan"
                  }
                </h4>

                <ul className="list-disc pl-5 text-lg">
                  {recipe.ingredients?.map(
                    (item, index) => (
                      <li key={index}>
                        {item}
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* step */}
              <div>
                <h4 className="font-bold text-2xl text-[#345C9A] mb-2">
                  {language === "eng"
                    ? "Cook Steps"
                    : "Langkah Memasak"
                  }
                </h4>

                <ol className="list-decimal pl-5 space-y-2 text-lg">
                  {recipe.steps?.map(
                    (step, index) => (
                      <li key={index}>
                        {step}
                      </li>
                    )
                  )}
                </ol>
              </div>
            </div>

            {/* video */}
            <div className="mt-10">
              <iframe
                src={recipe.youtube}
                title="Tutorial Memasak"
                className="w-full h-[400px] rounded-xl"
                allowFullScreen
              />
            </div>
          </div>    
      )}
    </div>
  );
}

export default RecipeResult;