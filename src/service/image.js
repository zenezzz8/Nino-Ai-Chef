export async function GetImage(recipeName) {
  const response = await fetch(
    `https://api.pexels.com/v1/search?query=${encodeURIComponent(
      recipeName
    )}&per_page=1`,
    {
      headers: {
        Authorization:
          import.meta.env.VITE_PIXELES_APIKEY,
      },
    }
  );

  const data = await response.json();

  return data;
}