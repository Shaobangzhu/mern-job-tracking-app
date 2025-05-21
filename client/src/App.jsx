import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomeLayout, AddJob, Admin, AllJobs, DashboardLayout, EditJob, Error, Landing, Login, Profile, Register, Stats } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />
  }
]);

const App = () => {
  return <RouterProvider router={router}/>;
}

export default App