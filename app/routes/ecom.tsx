import { Link, Outlet } from '@remix-run/react';

export default function Ecom() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="products">Product grid</Link>
          </li>
          <li>
            <Link to="cart">Cart</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
