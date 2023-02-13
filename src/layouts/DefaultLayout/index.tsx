import { Header } from '@src/components/Header';
import { Outlet } from 'react-router-dom';

export function DefaultLayout() {
  return (
    <>
      <Header />
      <div
        className="
          flex
          flex-col
          flex-1

          max-w-[calc(864px+20px)]
          h-full
          m-auto
          px-[10px]
          pb-10

          md:max-w-[calc(864px+40px)]
          md:px-[20px]
          md:pb-20
        "
      >
        <Outlet />
      </div>
    </>
  );
}
