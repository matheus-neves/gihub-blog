export function PostArticleSkeleton() {
  return (
    <div className="py-5 px-4 md:py-10 animate-pulse">
      <div className="h-4 w-6/12 bg-slate-700 rounded mb-6"></div>

      <div className="flex flex-col gap-3 mb-10">
        <div className="h-3 w-12/12 bg-slate-700 rounded"></div>
        <div className="h-3 w-11/12 bg-slate-700 rounded"></div>
      </div>

      <div className="h-3 w-3/12 bg-slate-700 rounded mb-6"></div>

      <div className="flex flex-col gap-3">
        <div className="h-3 w-12/12 bg-slate-700 rounded"></div>
        <div className="h-3 w-12/12 bg-slate-700 rounded"></div>
        <div className="h-3 w-12/12 bg-slate-700 rounded"></div>
      </div>
    </div>
  );
}
