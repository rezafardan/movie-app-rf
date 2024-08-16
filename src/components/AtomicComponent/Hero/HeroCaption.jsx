import Button from "../Button";
import information_outline from "../../../assets/information_outline.svg";
import volume_off from "../../../assets/volume_off.svg";

const HeroCaption = ({ title, extract }) => {
  return (
    <div className="absolute w-full px-[5%] bottom-[5%] flex flex-col gap-10">
      <div>
        <p className="text-4xl md:text-6xl font-bold mb-4">{title}</p>
        <p className="text-sm md:text-lg font-light">{extract}</p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Button className="bg-[#0f1e93] px-5 ">Mulai</Button>
          <Button className="bg-[#22282a] px-5">
            <img src={information_outline} alt="" />
            Selengkapnya
          </Button>
          <Button className="border-solid border-[1px] border-[#c1c2c4] p-0 px-1.5 font-light text-gray-300 hover:text-gray-50">
            18+
          </Button>
        </div>
        <Button className="border-solid border-[1px] border-[#c1c2c4] p-0 px-2">
          <img src={volume_off} />
        </Button>
      </div>
    </div>
  );
};

export default HeroCaption;
