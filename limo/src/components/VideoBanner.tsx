export function VideoBanner() {
  return (
    <div className="relative h-[70vh] overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
        <div className="text-center text-white z-20">
          <div className="bg-gray-200 border-2 border-dashed border-gray-400 rounded-xl w-full h-full absolute"></div>
          <div className="relative z-30 flex items-center justify-center h-full">
            <p className="text-xl">Luxury Limousine Video</p>
          </div>
        </div>
      </div>
    </div>
  );
}
