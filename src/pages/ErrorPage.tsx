import { Navbar, Wrapper } from '@/components';
import { useRouteError, Link } from 'react-router-dom';

export function ErrorPage() {
  const error = useRouteError() as Error & { statusText?: string };

  console.error(error);

  return (
    <Wrapper>
      <Navbar />
      <div id="error-page" className="flex flex-col items-center justify-center h-screen">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to="/" className="mt-5 text-gray ease-in duration-200 hover:text-purple-light">
          Go back to home
        </Link>
      </div>
    </Wrapper>
  );
}
