import './global.css';
import 'normalize.css';
import 'react-loading-skeleton/dist/skeleton.css';

import { App } from '@app';
import { store } from '@store';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { SkeletonTheme } from 'react-loading-skeleton';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <HelmetProvider>
      <SkeletonTheme baseColor="#72727240" highlightColor="#FFFFFF30">
        <App />
      </SkeletonTheme>
    </HelmetProvider>
  </Provider>,
);
