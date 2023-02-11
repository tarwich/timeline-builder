import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app';

const rootNode =
  document.getElementById('root') ||
  document.body.appendChild(document.createElement('div'));
rootNode.id = 'root';

createRoot(rootNode).render(<App />);
