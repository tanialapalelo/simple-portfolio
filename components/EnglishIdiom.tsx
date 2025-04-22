import { englishIdioms } from "@/constants/english";

const EnglishIdioms = () => {
  return (
    <section className="text-center">
      <h2 className="text-2xl font-semibold mb-6">Top Most Used English Idioms</h2>
      <div className="space-y-4">
        {englishIdioms.map((idiom) => (
          <div key={idiom.id} className="p-4 border rounded-lg shadow-md">
            <p className="text-xl font-semibold">{idiom.idiom}</p>
            <p className="text-lg text-gray-600">{idiom.meaning}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EnglishIdioms;
