import { Global } from '@emotion/react';
import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { store } from '../store';
import { globalStyles } from '../styles/globalStyles.ts';

function Layout() {
  return (
    <Provider store={store}>
      <Global styles={globalStyles} />
      <Outlet />
    </Provider>
  );
}

export { Layout };
