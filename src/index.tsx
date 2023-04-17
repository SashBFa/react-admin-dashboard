import ReactDOM from 'react-dom/client';
import { App } from './app';
import './styles/index.css';
import { ContextProvider } from './contexts/ContextProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
