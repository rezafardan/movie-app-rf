const HoverPoster = ({ src, children, genre, index }) => {
  return (
    <div className="relative w-full rounded-lg transform transition duration-700 hover:scale-x-125 opacity-0 hover:opacity-100 ease-in-out flex flex-col bg-[#181A1C] z-10">
      <img
        className="absolute inset-0 top-0 left-0 right-0 object-fill object-top rounded-t-lg"
        src={src}
      />
      <div className="bg-[#181A1C] absolute h-max w-full bottom-0 right-0 left-0 z-50 rounded-b-lg p-7 flex flex-col gap-4">
        <p className="text-xs">{children}</p>
        <p className="text-xs">[Play Button Logo]</p>x
        {{ index } > 0 && (
          <p className="text-xs font-normal text-center w-full">{genre}</p>
        )}
      </div>
    </div>
  );
};

export default HoverPoster;
