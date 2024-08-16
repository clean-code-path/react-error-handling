import { createBrowserRouter } from 'react-router-dom';

import { PATH } from '../constants';
import { Main } from '../pages';
import { Layout } from '../shared';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: PATH.ROOT,
        element: <Main />,
      },
    ],
  },
]);

export { router };
