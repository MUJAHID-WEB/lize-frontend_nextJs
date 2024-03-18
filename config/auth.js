import Auth from 'auth-now/client';

const auth = new Auth({
  clientUrl: process.env.NEXT_PUBLIC_URL,
});

export default auth;
