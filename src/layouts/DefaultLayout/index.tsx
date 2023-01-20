import { Outlet } from 'react-router-dom';

export function DefaultLayout() {
  return (
    <>
      <h1>Header</h1>
      <div>
        <Outlet />
      </div>
    </>
  );
}
