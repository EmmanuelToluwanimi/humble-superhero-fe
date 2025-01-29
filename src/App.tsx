import { useEffect, useState } from "react";
import "./App.css";
import AddHeroForm from "./components/AddHero";
import HeroesList from "./components/HeroesList";
import { ISuperhero } from "./utils/interface";
import { fetchHeroesApi } from "./utils/api";

function App() {
  const [heroes, setHeroes] = useState<ISuperhero[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  async function GetHeroes() {
    setLoading(true);
    try {
      const data = await fetchHeroesApi();
      setHeroes(data);
    } catch (err) {
      console.log(err);
      setError("Failed to load superheroes");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    GetHeroes();
  }, []);

  return (
    <main>
      <div className="max-w-lg mx-auto mt-10">
        <h1 className="text-2xl font-bold text-center mb-4">
          Humble Superheroes
        </h1>
        <AddHeroForm setHeroes={(data) => setHeroes(data)} />
        <HeroesList heroes={heroes} error={error ?? ""} loading={loading} />
      </div>
    </main>
  );
}

export default App;
