import { useState } from "react";

import IngredientForm from "./components/IngredientForm";
import RecipeResult from "./components/RecipeResult";
import Header from "./components/Header";

import {generateRecipe} from "./service/gemini";
import { GetImage } from "./service/image";
import { GetVideo } from "./service/youtube";

// berikan resep onion ring dan sausnya

function App() {

  const [ingredients, setIngredients] = useState("");

  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);

  const [language, setLanguage] = useState("eng");

  const [error, setError] = useState("");

  const handleSearch = async () => {
    const cleanedIngredients =
      ingredients.trim();

      if (!cleanedIngredients) {
        setError(
          "Silakan masukkan minimal satu bahan makanan."
        );
        return;
      }

      setError("");

      try {
        setLoading(true);

        // recipe
        const result =
          await generateRecipe(
            cleanedIngredients
          );

        // setRecipe(result);

        // youtube
        const YTVideo =
          await GetVideo(
            result.recipeName
          );

        let youtubeUrl = "";

        if (
          YTVideo.items &&
          YTVideo.items.length > 0
        ) {
          const videoId =
            YTVideo.items[0].id.videoId;

          youtubeUrl =
            `https://www.youtube.com/embed/${videoId}`;
        }

        // img
        let imageUrl = "";

        const imageData = await GetImage(
          result.recipeName
        );

        if (
          imageData.photos &&
          imageData.photos.length > 0
        ) {
          imageUrl =
            imageData.photos[0].src.large;
        }

        // set recipe
        const FullRecipe = {
          ...result,
          youtube: youtubeUrl,
          image: imageUrl,
        };

        setRecipe(FullRecipe);

      // error
      } catch (error) {
        console.error(error);

        setRecipe({
          error:
            "Terjadi kesalahan saat mengambil resep.",
        });

      // finish
      } finally {
        setLoading(false);
      }
    
  };

  return (
    <div className="w-full h-full min-h-[500px] flex items-center">     

      {/*  */}
      <Header
        language= {language}
        setLanguage= {setLanguage}
      />
       
      <div className="w-full max-w-3xl mx-auto">
        {/*  */}
        <RecipeResult
          recipe= {recipe}
          loading= {loading}
          language= {language}
        />
      </div>

      {/*  */}
      <IngredientForm
        ingredients= {ingredients}
        setIngredients= {setIngredients}
        handleSearch= {handleSearch}
        language= {language}
        error= {error}
      />

    </div>
  );
}

export default App;