import { Link, Outlet } from '@remix-run/react';

export default function Ecom() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Back</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
