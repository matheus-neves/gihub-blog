import { DefaultLayout } from '@src/layouts/DefaultLayout';
import { Home } from '@src/pages/Home';
import { Post } from '@src/pages/Post';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/post',
        element: <Post />
      }
    ]
  }
]);

export { router };
