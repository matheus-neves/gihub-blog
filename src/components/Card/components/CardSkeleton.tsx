import { Card } from '..';

export function CardSkeleton() {
  return (
    <Card>
      <header className="flex items-baseline flex-1 justify-between animate-pulse mb-4">
        {/* Title */}
        <div className="flex flex-col w-8/12 gap-3">
          <div className="h-4 w-12/12 bg-slate-700 rounded"></div>
          <div className="h-4 w-11/12 bg-slate-700 rounded"></div>
        </div>
        {/* Time */}
        <div
          className=" 
          h-3
          w-2/12
          max-w-[90px]
          bg-slate-700 
          rounded 
          mt-2
          mb-5"
        ></div>
      </header>
      {/* Description */}
      <div className="flex flex-col gap-4 animate-pulse">
        <div className="h-3 w-12/12 bg-slate-700 rounded"></div>
        <div className="h-3 w-11/12 bg-slate-700 rounded"></div>
        <div className="h-3 w-11/12 bg-slate-700 rounded"></div>
        <div className="h-3 w-11/12 bg-slate-700 rounded"></div>
      </div>
    </Card>
  );
}
