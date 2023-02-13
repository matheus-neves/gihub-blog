import { ReactNode } from 'react';

function Card({ children, ...props }: { children: ReactNode }) {
  return (
    <div
      className="
        flex
        flex-col
        gap-5
        p-8
        rounded-[10px]
        bg-primary-base-post
        border-2 
        border-transparent 
        cursor-pointer
        transition
        hover:border-2
        hover:border-primary-base-label
      
        md:min-h-[260px]
      "
      {...props}
    >
      {children}
    </div>
  );
}

interface HeaderProps {
  title: string;
  date: string;
  created_at: string;
}

function Header({ date, title, created_at }: HeaderProps) {
  return (
    <header className="flex items-baseline flex-1 justify-between gap-5">
      <h3 className="md:line-clamp-2 text-xl">{title}</h3>
      <time
        className="whitespace-nowrap text-sm text-right text-primary-base-span"
        dateTime={created_at}
      >
        {date}
      </time>
    </header>
  );
}

function Description({ children }: { children: ReactNode }) {
  return <p className="line-clamp-4">{children}</p>;
}

Card.Header = Header;
Card.Description = Description;

export { Card };
