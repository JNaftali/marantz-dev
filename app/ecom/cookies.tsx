import { createCookieSessionStorage, Session } from '@remix-run/node';

const { getSession, commitSession } = createCookieSessionStorage({
  cookie: {
    name: '__ecom_session',
    path: '/ecom',
    httpOnly: true,
    sameSite: true,
    secrets: [process.env.SESSION_SECRET ?? 'sekret'],
  },
});

export async function withCart(request: Request, f: (cart: Session) => Promise<Response>) {
  const session = await getSession(request.headers.get('Cookie'));
  const response = await f(session);

  response.headers.set('Set-Cookie', await commitSession(session));
  return response;
}