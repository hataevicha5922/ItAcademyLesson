import { renderPosts, postFormHandler } from './dom-handlers/posts-renerer';
import { signInHandler } from './components/sign-in/sign-in';
import { routes, paths } from './shared/constants/routes';
import './styles/styles.scss';

window.onload = () => {
  const pathname = Object.values(paths).find(
    (path) => path === window.location.pathname
  );

  switch (pathname) {
    case paths.home:
      postFormHandler();
      renderPosts();

      window.location.href = routes.sign_in;
      break;
    case paths.sign_in:
      signInHandler();
      break;
    default:
      break;
  }
};
