import RegisterPage from '../app/auth/register/register-page';
import LoginPage from '../app/auth/login/login-page';
import HomePage from '../app/home/home-page';
import PackageDetailPage from '../app/package-detail/package-detail-page';
import MorePage from '../app/more/more-page';
import { checkAuthenticatedRoute, checkUnauthenticatedRouteOnly } from '../utils/auth';

export const routes = {
  '/login': () => checkUnauthenticatedRouteOnly(new LoginPage()),
  '/register': () => checkUnauthenticatedRouteOnly(new RegisterPage()),

  '/': () => checkAuthenticatedRoute(new HomePage()),
  '/more': () => checkAuthenticatedRoute(new MorePage()),
  '/package/:id': () => checkAuthenticatedRoute(new PackageDetailPage()),
};