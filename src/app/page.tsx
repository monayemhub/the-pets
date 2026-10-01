import cats from "@/data/cat-data";
import CatCard from "@/app/ui/cat-card";

const HomePage = () => {
  return (
    <div className="container mx-auto px-3">
      <h1 className="font-bold text-3xl text-center mb-10">My Pets</h1>

      <ul className="grid grid-cols-3 gap-3 auto-rows-125">
        {cats.map((cat) => (
          <CatCard
            key={`${cat.name}-${cat.skills[0]}-${cat.skills[1]}`}
            cat={cat}
          />
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
