import { useState } from "react";

import IngredientForm from "../components/IngredientForm";
import RecipeResult from "../components/RecipeResult";

import {generateRecipe} from "../service/gemini";
import { GetImage } from "../service/image";
import { GetVideo } from "../service/youtube";
import { supabase } from "../service/supabase";

function Chat({language}){
    const [ingredients, setIngredients] = useState("");

    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(false);
    
    const [mode, setMode] = useState("normal");

    const [error, setError] = useState("");

    const [saveStatus, setSaveStatus] = useState("idle");

    const handleSearch = async () => {
        const cleanedIngredients = ingredients.trim();

        if (!cleanedIngredients) {
            setError(
            "Silakan masukkan minimal satu bahan makanan."
            );
            return;
        }

        setError("");
        setSaveStatus("idle");

        try {
            setLoading(true);

            // recipe
            const result =
            await generateRecipe({ 
                ingredients: cleanedIngredients,
                mode: mode,
            });

            // youtube
            const YTVideo =
            await GetVideo(
                result.recipeName
            );

            let youtubeUrl = "";

            // check yt exists
            if (
            YTVideo.items &&
            YTVideo.items.length > 0
            ) {
            const videoId =
                YTVideo.items[0].id.videoId;

            youtubeUrl =
                `https://www.youtube.com/embed/${videoId}`;
            }
            
            let imageUrl = "";

            // img
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

    // handle yes
    const handleSaveYes = async () => {
        if (!recipe || recipe.error) return;

        setSaveStatus("saving");

        try {
            const { error: saveError } = await supabase
                .from("recipe_searches")
                .insert({
                    recipe_name: recipe.recipeName,
                    image_url: recipe.image,
                });

            if (saveError) throw saveError;

            setSaveStatus("saved");
        } catch (err) {
            console.error(err);
            setSaveStatus("idle");
        }
    };

    // handle no
    const handleSaveNo = () => {
        setSaveStatus("declined");
    };


    return (
        <div className="w-full h-full min-h-[500px]">     
        
            <RecipeResult
                recipe= {recipe}
                loading= {loading}
                language= {language}
                saveStatus={saveStatus}
                onSaveYes={handleSaveYes}
                onSaveNo={handleSaveNo}
            />

            {/*  */}
            <IngredientForm
                ingredients= {ingredients}
                setIngredients= {setIngredients}
                handleSearch= {handleSearch}
                mode= {mode}
                setMode = {setMode}
                language= {language}
                error= {error}
            />

        </div>
  );
}

export default Chat;