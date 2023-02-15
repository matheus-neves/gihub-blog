export function ProfileSkeleton() {
  return (
    <div
      className="
        flex
        flex-col
        relative
        bg-primary-base-profile
        p-5
        mt-[-30px]
        rounded-[10px]

        md:flex-row
        md:py-8
        md:px-10
        md:mt-[-80px]
      "
    >
      {/* Image */}
      <div
        className="
        rounded-lg 
        w-[148px] 
        h-[148px] 
        mr-8 
        bg-slate-700 
        animate-pulse"
      ></div>

      <div className="flex flex-1 flex-col w-full animate-pulse">
        {/* Title */}
        <div className="h-4 w-[236px] bg-slate-700 rounded mt-5 mb-5"></div>
        {/* Description */}
        <div className="flex flex-col gap-3">
          <div className="h-3 w-11/12 bg-slate-700 rounded"></div>
          <div className="h-3 w-10/12 bg-slate-700 rounded"></div>
        </div>
        {/* Items */}
        <div className="flex flex-wrap mt-5 gap-3 md:gap-6">
          <div className="h-3 w-32 bg-slate-700 rounded"></div>
          <div className="h-3 w-32 bg-slate-700 rounded"></div>
        </div>
        {/* Link */}
        <div
          className="
            absolute
            top-5
            right-5
            h-3 
            w-14
            bg-slate-700 
            rounded
            
            md:top-8
            md:right-10
          "
        ></div>
      </div>
    </div>
  );
}
