import { LoaderArgs, json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import { getProducts } from 'saleor';

export async function loader({}: LoaderArgs) {
  return json({ products: await getProducts() });
}

export default function ProductGrid() {
  const { products } = useLoaderData<typeof loader>();

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link to={product.slug}>{product.name}</Link>
        </li>
      ))}
    </ul>
  );
}
