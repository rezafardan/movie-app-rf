const HoverPoster = ({ src, children, genre, index }) => {
  return (
    <div className="relative w-full transform transition duration-700 hover:scale-125 opacity-0 hover:opacity-100 ease-in-out flex flex-col bg-[#e5e8ed]">
      <img
        className="absolute inset-0 top-0 left-0 right-0 object-fill object-top rounded-t-lg"
        src={src}
      />
      <div className="bg-[#fcfcfc] absolute h-max w-full bottom-0 right-0 left-0 z-50 rounded-b-lg p-7 flex flex-col gap-4">
        <p className="text-xs">{children}</p>
        <p className="text-xs">logo</p>x
        {{ index } > 0 && (
          <p className="text-xs font-normal text-center w-full">{genre}</p>
        )}
      </div>
    </div>
  );
};

export default HoverPoster;
