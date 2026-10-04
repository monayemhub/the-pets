import cats from "@/data/cat-data";
import CatCard from "@/app/ui/cat-card";
import Logo from "../../public/logo.png";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="container mx-auto px-3">
      <div className="flex justify-center items-center gap-3 my-10">
        <h1 className="font-bold text-3xl">My Pets</h1>

        <div className="w-12">
          <Image src={Logo} alt="Pet paw logo" />
        </div>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 auto-rows-125">
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
