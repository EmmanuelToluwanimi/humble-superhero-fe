import { ISuperhero } from "../utils/interface";

export default function HeroesList({
  heroes,
  error,
  loading,
}: {
  heroes: ISuperhero[];
  error: string;
  loading: boolean;
}) {
  return (
    <ul className="mt-4 border p-4 rounded-md">
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && heroes.length > 0
        ? heroes.map((hero) => (
            <li
              key={hero.id}
              className="p-4 mb-4 bg-white rounded-lg shadow-md"
            >
              <div>
                <div className="text-xl font-medium text-black">
                  {hero.name}
                </div>
                <p className="text-gray-500">{hero.superPower}</p>
                <p className="text-sm text-gray-400">
                  Humility Score: {hero.humilityScore}
                </p>
              </div>
            </li>
          ))
        : !loading && <p>No superheroes yet. Add some 👆!</p>}
    </ul>
  );
}
