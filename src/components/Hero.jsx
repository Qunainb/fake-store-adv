import { Link } from "react-router-dom";
import WomanImage from "../image/woman_hero.png";

export default function Hero() {
  return (
    <section className="bg-pink-200 h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24">
      <div className="container mx-auto flex justify-around h-full">
        {/* text */}
        <div className="flex flex-col justify-center">
          {/* pretitle */}
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-red-500 mr-3"></div>New Trend
          </div>
          {/* title */}
          <h1 className="text-[70px] leading-[1.1] font-light">
            AUTUMN SALE STYLISH <br />
            <span className="font-semibold">WOMENS</span>
          </h1>
          <Link
            className="self-start uppercase font-semibold border-b-2 border-primary"
            to="/"
          >
            Discover More
          </Link>
        </div>
        {/* image */}
        <div className="hidden lg:block">
          <img src={WomanImage} />
        </div>
      </div>
    </section>
  );
}
