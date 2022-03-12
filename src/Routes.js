import App from './App';
import Home from './container/Home';
import Login from './container/Login';

const routes = [
  {
    key: 'app',
    path: '/',
    component: App,
    routes: [
      {
        key: 'home',
        path: '/',
        component: Home,
        exact: true,
        loadData: Home.loadData
      },
      {
        key: 'login',
        path: '/login',
        component: Login
      }
    ]
  }
];

export default routes;
