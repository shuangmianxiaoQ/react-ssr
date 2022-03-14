import App from './App';
import Home from './container/Home';
import Followers from './container/Followers';
import NotFound from './container/NotFound';

const routes = [
  {
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
        key: 'followers',
        path: '/followers',
        component: Followers,
        loadData: Followers.loadData
      },
      {
        component: NotFound
      }
    ]
  }
];

export default routes;
