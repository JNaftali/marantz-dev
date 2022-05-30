import { DataFunctionArgs, json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { withCart } from '~/ecom/cookies';

export function loader({ request }: DataFunctionArgs) {
  return withCart(request, async (cart) => {
    const cartItems = cart.has('cartItems') ? cart.get('cartItems') : [];
    return json({ cartItems });
  });
}

type LoaderData = {
  cartItems: { id: string; quantity: number }[];
};

export default function CartPage() {
  const { cartItems } = useLoaderData<LoaderData>();

  return (
    <main>
      <h1>Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.quantity}x {item.id}
          </li>
        ))}
      </ul>
    </main>
  );
}
