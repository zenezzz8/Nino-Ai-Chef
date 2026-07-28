export async function GetVideo(recipeName) {
    const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
            recipeName + " recipe"
        )}&type=video&maxResults=1&key=${
            import.meta.env.VITE_YT_APIKEY
        }`
    );

    const data = await response.json();

    console.log("YOUTUBE DATA:", data);

    return data;
}