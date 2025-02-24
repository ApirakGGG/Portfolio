import Detail_Swiper from "./Detail_Swiper";
import InfinitSlide from "./InfinitSlide";
import Slide from "./Slide";

export default function PersonalDetials() {
  return (
    <div className="mt-36">
      <div className="my-10 flex justify-center rotate-6">
        <h1 className="text-5xl bg-gradient-to-t from-orange-500 to-purple-700 text-transparent bg-clip-text">
          ABOUT <span className="text-sky-300 underline">ME</span>
        </h1>
      </div>
      <div className="px-5 py-5 gap-3 space-y-36">
        {/* Detail Swiper*/}
        <Detail_Swiper />
        {/* Slide */}
        <Slide />
        {/* InfinitSlide */}
        <InfinitSlide />
      </div>
    </div>
  );
}
