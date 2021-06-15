// This page is for page imported.
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/components/DashboardLayout';
import MainLayout from 'src/components/MainLayout';
import Account from 'src/pages/Account';
import Account2 from 'src/pages/Account2';
import NewAlgorithms from 'src/pages/NewAlgorithms';
import CustomerList from 'src/pages/CustomerList';
import Dashboard from 'src/pages/Dashboard';
import Login from 'src/pages/Login';
import NotFound from 'src/pages/NotFound';
import AllAlgorithm from 'src/pages/AllAlgorithm';
import MyAlgorithm from 'src/pages/MyAlgorithm';
import Register from 'src/pages/Register';
import Settings from 'src/pages/Settings';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <Account /> },
      { path: 'account2', element: <Account2 /> },
      { path: 'NewAlgorithms', element: <NewAlgorithms /> },
      { path: 'customers', element: <CustomerList /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'allAlgorithms', element: <AllAlgorithm /> },
      { path: 'myalgorithm', element: <MyAlgorithm /> },
      { path: 'settings', element: <Settings /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
