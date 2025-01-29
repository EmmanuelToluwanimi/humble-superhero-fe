import { ISuperhero } from "./interface";

const API_URL = "http://localhost:3000/hero";

export async function fetchHeroesApi(): Promise<ISuperhero[]> {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Failed to fetch superheroes");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function addHeroApi(
  payload: Omit<ISuperhero, "id">
): Promise<ISuperhero> {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
