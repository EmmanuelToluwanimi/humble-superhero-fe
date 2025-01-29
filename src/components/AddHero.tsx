import { useState } from "react";
import { ISuperhero } from "../utils/interface";
import { validateSuperHero } from "../utils/validator";
import { addHeroApi, fetchHeroesApi } from "../utils/api";

const defaultHero = {
  name: "",
  superPower: "",
  humilityScore: 0,
};
export default function AddHeroForm({
  setHeroes,
}: {
  setHeroes: (params: ISuperhero[]) => void;
}) {
  const [formData, setFormData] = useState<Omit<ISuperhero, "id">>(defaultHero);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value.trim(),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const validation = validateSuperHero({
      ...formData,
      humilityScore: Number(formData.humilityScore),
    });

    if (validation?.message) {
      setError(validation.message);
      return;
    }
    setLoading(true);

    try {
      await addHeroApi({
        ...formData,
        humilityScore: Number(formData.humilityScore),
      });
      const data = await fetchHeroesApi();
      setHeroes(data);
      setFormData(defaultHero);
    } catch (err) {
      console.log(err);
      setError("Error adding heroes");
    }
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 p-4 border rounded-md"
    >
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        className="p-2 border rounded"
        required
      />
      <input
        name="superPower"
        value={formData.superPower}
        onChange={handleChange}
        placeholder="Super Power"
        className="p-2 border rounded"
        required
      />
      <input
        name="humilityScore"
        type="number"
        value={formData.humilityScore}
        onChange={handleChange}
        placeholder="Humility Score (1-10)"
        className="p-2 border rounded"
        required
        min={1}
        max={10}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">
        {loading ? "Processing..." : "Add Superhero"}
      </button>
    </form>
  );
}
