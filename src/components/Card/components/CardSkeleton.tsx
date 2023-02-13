import { Card } from '..';

export function CardSkeleton() {
  return (
    <Card>
      <header className="flex items-baseline flex-1 justify-between animate-pulse">
        {/* Title */}
        <div className="flex flex-col w-[65%] gap-3">
          <div className="h-4 w-[100%] bg-slate-700 rounded"></div>
          <div className="h-4 w-[90%] bg-slate-700 rounded"></div>
        </div>
        {/* Time */}
        <div
          className=" 
          h-4
          w-[20%] 
          max-w-[90px]
          bg-slate-700 
          rounded 
          mt-2
          mb-5"
        ></div>
      </header>
      {/* Description */}
      <div className="flex flex-col gap-3 animate-pulse">
        <div className="h-4 w-[100%] bg-slate-700 rounded"></div>
        <div className="h-4 w-[95%] bg-slate-700 rounded"></div>
        <div className="h-4 w-[95%] bg-slate-700 rounded"></div>
        <div className="h-4 w-[95%] bg-slate-700 rounded"></div>
      </div>
    </Card>
  );
}
