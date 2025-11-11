export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">

        <div className="flex-col gap-4 w-full flex items-center justify-center">
            <div
                className="w-20 h-20 border-4 border-transparent text-purple-900 text-4xl animate-spin flex items-center justify-center border-t-purple-900 rounded-full"
            >
                <div
                className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-gray-600 rounded-full"
                ></div>
            </div>
        </div>

        <div className="flex gap-4 justify-center items-center mt-4 text-gray-600 font-medium text-bold text-purple-900">
          <div
                className="w-2 bg-[#d991c2] animate-pulse h-2 rounded-full animate-bounce"
            ></div>
            <div
                className="w-2 animate-pulse h-2 bg-[#9869b8] rounded-full animate-bounce"
            ></div>
            <div
                className="w-2 h-2 animate-pulse bg-[#6756cc] rounded-full animate-bounce"
            ></div>

        </div>
      </div>
    </div>
  );
}