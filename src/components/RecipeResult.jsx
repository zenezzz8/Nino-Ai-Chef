import { FaClipboardList } from "react-icons/fa";
import { LuCookingPot } from "react-icons/lu";
import { IoFastFood } from "react-icons/io5";
import { GiCook } from "react-icons/gi";
import { IoMdTime } from "react-icons/io";

function RecipeResult({ 
  recipe, 
  loading,
  language,
  saveStatus,
  onSaveYes,
  onSaveNo,
}) {

  return (
    <div className="w-full max-w-3xl mx-auto">
      
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
        <div className="absolute top-12 left-0 right-0 flex items-center justify-center">
          <div class="bg-red-100 border border-red-400 text-red-700 px-5 py-3 rounded relative" role="alert">
            <span class="block sm:inline">{recipe.error}</span>
          </div>
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
            </div>
          </div>
        </div>
      )}

      {/* result */}
      {!loading &&
        recipe &&
        !recipe.error && (
          <div className="mt-10 mb-24 animate-fade-in">

            {/* name */}
            <h3 className="text-4xl md:text-5xl font-extrabold text-[#345C9A] mb-2 leading-tight">
              {recipe.recipeName}
            </h3>

            <div className="w-full h-px bg-blue-100 rounded-full my-4"></div>

            {/* header */}
            <div className="flex flex-col-reverse md:flex-row gap-8 mb-6">
              
              {/* left */}
              <div className="flex flex-col gap-3 w-full md:w-1/2 justify-center">
                {/* time */}
                <div className="flex items-center gap-2 bg-blue-50 text-[#345C9A] px-4 py-2.5 rounded-2xl font-medium border border-blue-100 w-fit">
                  <IoMdTime className="w-5 h-5"/>
                  <span className="font-bold">{language === "eng" ? "Cooking Time" : "Waktu Memasak"}:</span>
                  <span>{recipe.cookingTime}</span>
                </div>

                {/* difficulty */}
                <div className="flex items-center gap-2 bg-orange-50 text-orange-600 px-4 py-2.5 rounded-2xl font-medium border border-orange-100 w-fit">
                  <GiCook className="w-5 h-5"/>
                  <span className="font-bold">{language === "eng" ? "Difficulty" : "Kesulitan"}:</span>
                  <span>{recipe.difficulty}</span>
                </div>

                {/* calorie */}
                <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2.5 rounded-2xl font-medium border border-green-100 w-fit">
                  <IoFastFood className="w-5 h-5"/>
                  <span className="font-bold">{language === "eng" ? "Calorie" : "Kalori"}:</span>
                  <span>{recipe.totalCalorie}</span>
                </div>
              </div>

              {/* right */}
              <div className="w-full md:w-1/2 flex justify-end">
                {recipe.image && (
                  <div className="relative group w-full">
                    <img
                      src={recipe.image}
                      alt={recipe.recipeName}
                      className="relative w-full h-55 md:h-64 object-cover rounded-[2rem] shadow-lg border-4 border-white"
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="w-full h-px bg-blue-100 rounded-full my-4"></div>

            {/* body */}
            <div className="flex flex-col gap-8">

              {/* ingredients */}
              <div className="bg-white p-6 md:p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-blue-50 rounded-xl text-[#345C9A]">
                    <FaClipboardList className="w-6 h-6"/>
                  </div>
                  <h4 className="font-bold text-2xl text-[#345C9A]">
                    {language === "eng" ? "Ingredients" : "Bahan-bahan"}
                  </h4>
                </div>

                <ul className="space-y-3 text-gray-600">
                  {recipe.ingredients?.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F4D03F] mt-2.5 flex-shrink-0"></span>
                      <span className="text-lg leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* step */}
              <div className="bg-white p-6 md:p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-blue-50 rounded-xl text-[#345C9A]">
                    <LuCookingPot className="w-6 h-6"/>
                  </div>
                  <h4 className="font-bold text-2xl text-[#345C9A]">
                    {language === "eng" ? "Cook Steps" : "Langkah Memasak"}
                  </h4>
                </div>

                <div className="space-y-6 text-gray-600">
                  {recipe.steps?.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-[#345C9A] font-bold text-sm border border-blue-100">
                        {index + 1}
                      </div>
                      <p className="text-lg leading-relaxed pt-0.5">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* video */}
            {recipe.youtube && (
              <div className="mt-8 bg-white p-4 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
                <iframe
                  src={recipe.youtube}
                  title="Tutorial Memasak"
                  className="w-full aspect-video rounded-2xl"
                  allowFullScreen
                />
              </div>
            )}

            {/* quesioner */}
            <div className="mt-12 p-6 bg-blue-50 rounded-2xl text-center border border-blue-100">
              {saveStatus === "idle" && (
                <>
                  <p className="text-lg font-semibold text-[#345C9A] mb-4">
                    {language === "eng"
                      ? "Do you want to cook this recipe?"
                      : "Apakah kamu ingin memasak resep ini?"}
                  </p>
                  <div className="flex gap-3 justify-center">
                    <button
                      onClick={onSaveYes}
                      className="rounded-xl bg-[#345C9A] px-6 py-2.5 font-semibold text-white hover:bg-[#294B80] transition"
                    >
                      {language === "eng" ? "Yes" : "Ya"}
                    </button>
                    <button
                      onClick={onSaveNo}
                      className="rounded-xl bg-white border border-gray-300 px-6 py-2.5 font-semibold text-gray-700 hover:bg-gray-100 transition"
                    >
                      {language === "eng" ? "No" : "Tidak"}
                    </button>
                  </div>
                </>
              )}

              {saveStatus === "saving" && (
                <p className="text-gray-500">
                  {language === "eng" ? "Saving..." : "Menyimpan..."}
                </p>
              )}

              {saveStatus === "saved" && (
                <p className="text-green-600 font-semibold">
                  {language === "eng" ? "Thanks! Saved." : "Terima kasih! Tersimpan."}
                </p>
              )}

              {saveStatus === "declined" && (
                <p className="text-gray-500">
                  {language === "eng" ? "Okay, maybe next time." : "Oke, mungkin lain kali."}
                </p>
              )}
            </div>
          </div>
      )}
    </div>
  );
}

export default RecipeResult;