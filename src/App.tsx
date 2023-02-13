import { router } from '@src/routes/Router';
import '@styles/index.css';
import 'react-loading-skeleton/dist/skeleton.css';
import { QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';
import { queryClient } from './lib/react-query';

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
