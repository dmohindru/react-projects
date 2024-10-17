import { LoaderFunctionArgs } from 'react-router-dom';

export const callbackLoader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const authorizationCode = url.searchParams.get('code');
  const error = url.searchParams.get('error');
  console.log(error);
};
