export function PostHeaderSkeleton() {
  return (
    <header
      className="
        flex
        flex-col
        bg-primary-base-profile
        p-5
        mt-[-30px]
        rounded-[10px]

        md:py-8
        md:px-10
        md:mt-[-80px]
      "
    >
      {/* Links */}
      <div className="flex flex-1 justify-between w-full animate-pulse">
        <div className="h-3 w-16 bg-slate-700 rounded"></div>
        <div className="h-3 w-24 bg-slate-700 rounded"></div>
      </div>

      <div className="flex flex-1 flex-col w-full animate-pulse">
        {/* Title */}
        <div className="h-5 w-8/12 bg-slate-700 rounded mt-7"></div>
        {/* Items */}
        <div className="flex flex-wrap mt-5 gap-3 md:gap-6">
          <div className="h-3 w-32 bg-slate-700 rounded"></div>
          <div className="h-3 w-32 bg-slate-700 rounded"></div>
          <div className="h-3 w-32 bg-slate-700 rounded"></div>
        </div>
      </div>
    </header>
  );
}
