import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    lazy: async () => {
      const { default: DashboardPage } = await import('./pages/Dashboard/DashboardPage');
      return { Component: DashboardPage };
    },
  },
  {
    path: '/practice',
    lazy: async () => {
      const { default: PracticePage } = await import('./pages/Practice/PracticePage');
      return { Component: PracticePage };
    },
  },
]);
