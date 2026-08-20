import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_AI_APIKEY,
});

export async function generateRecipe({ingredients, mode}) {

    let modeInstruction = "";

    if (mode === "normal") {
        modeInstruction = `
        Buat resep makanan secara normal.
        `;
    } 
    else if (mode === "child") {
        modeInstruction = `
        Buat resep yang cocok untuk anak-anak.

        Perhatikan:
        - Gunakan rasa yang ringan.
        - Jangan gunakan makanan yang terlalu pedas.
        - Buat makanan yang mudah dimakan anak.
        - Gunakan bahan yang umum dan sesuai untuk anak.
        - Tambahkan rentang usia yang cocok.
        `;
    } 
    else if (mode === "calorie") {
        modeInstruction = `
        Buat resep dengan memperhatikan jumlah kalori.

        Perhatikan:
        - Gunakan kalori yang terkontrol.
        - Sertakan estimasi kalori per porsi.
        `;
    }

    const prompt = `
        Kamu adalah Chef AI.

        Mode: 
        ${mode}

        Instruksi Mode:
        ${modeInstruction}

        Aturan wajib:
            1. Hanya boleh menjawab tentang resep makanan dan memasak.

            2. Jika input bukan bahan makanan,
            balas tepat dalam format JSON:
            {
                "error":"Maaf, saya hanya dapat membantu mengenai resep makanan dan memasak."
            }

            3. Berdasarkan bahan berikut:
            ${ingredients}

            4.  Field "steps" HARUS berupa array string.
                Jangan gunakan nomor langkah seperti:
                "1.", "2.", "3.", atau format penomoran lainnya.
                Setiap item array hanya berisi instruksi langkah.

            5. Gunakan bahasa yang sama dengan bahasa input pengguna:
                - Jika input mayoritas menggunakan Bahasa Indonesia, maka semua nilai JSON harus menggunakan Bahasa Indonesia.
                - Jika input mayoritas menggunakan Bahasa Inggris, maka semua nilai JSON harus menggunakan Bahasa Inggris.
                - Jangan mencampur Bahasa Indonesia dan Bahasa Inggris dalam satu respons.
                - Nama resep, waktu memasak, tingkat kesulitan, bahan, dan langkah harus mengikuti bahasa input pengguna.

            6. Cooking time hanya boleh diisi dengan waktu saja

            7. totalCarolie hanya boleh diisi berapa banyak calorie dan dalam bahasa ingris

            Balas Hanya JSON Valid.
            Jangan gunakan markdown.
            Jangan gunakan \`\`\`.
            Jangan gunakan penjelasan tambahan.

            Format:
            {
                "recipeName": "",
                "cookingTime": "",
                "difficulty": "",
                "totalCalorie": "",
                "ingredients": [],
                "steps": [],
            }
        `;

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
    });

    const text = response.text.trim();
    return JSON.parse(text);
}