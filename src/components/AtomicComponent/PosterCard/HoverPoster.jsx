import play_button_hover from "../../../assets/play_button_hover.svg";
import check_icon from "../../../assets/check_icon.svg";
import caret_icon from "../../../assets/caret_icon.svg";
import Button from "../Button";

const HoverPoster = ({ src, onFavoritesClick }) => {
  return (
    <div className="flex gap-3 md:gap-5 items-start w-11/12 rounded-lg my-2 mx-2 transform transition duration-700 opacity-0 hover:opacity-100 ease-in-out flex-col bg-[#181A1C] z-10">
      <img
        className="h-[90px] md:h-[185px] w-full object-cover object-top-[25%] rounded-t-lg"
        src={src}
      />
      <div className="bg-[#181a1c] h-max w-full z-50 px-2 md:px-4 flex justify-between">
        <div className="flex gap-2">
          <img src={play_button_hover} className="w-6 md:w-10" />
          <img
            src={check_icon}
            className="w-6 border rounded-full md:w-10 p-1 hover:bg-gray-600"
            onClick={onFavoritesClick}
          />
        </div>
        <img src={caret_icon} className="border rounded-full px-1 md:px-3" />
      </div>
      <div className="px-2 md:px-4">
        <Button className="text-sm px-4 md:px-3 py-0 md:py-1 bg-gray-500">
          13+
        </Button>
      </div>
      <div className="px-2 md:px-4 mb-1 text-xs md:text-base">
        <p>Genres ...</p>
      </div>
    </div>
  );
};

export default HoverPoster;
