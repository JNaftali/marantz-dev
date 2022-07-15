import { LoaderArgs, json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { withCart } from '~/ecom/cookies';

export async function loader({ request }: LoaderArgs) {
  return withCart(request, async (cart) => {
    const cartItems = (cart.has('cartItems') ? cart.get('cartItems') : []) as Array<{
      id: string;
      quantity: number;
    }>;
    return json({ cartItems });
  });
}

export default function CartPage() {
  const { cartItems } = useLoaderData<typeof loader>();

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
