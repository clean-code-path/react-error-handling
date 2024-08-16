import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { router } from './router';

async function enableMocking() {
  if (import.meta.env.VITE_MOCKING_ENABLED !== 'ENABLED') {
    return;
  }

  const { worker } = await import('./__mock__/worker');

  return worker.start();
}

enableMocking().then(() =>
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
);
