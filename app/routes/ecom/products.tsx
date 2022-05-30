import { DataFunctionArgs, json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import { getProducts } from 'saleor';

export async function loader({}: DataFunctionArgs) {
  return json({ products: await getProducts() });
}

type LoaderData = { products: Awaited<ReturnType<typeof getProducts>> };

export default function ProductGrid() {
  const { products } = useLoaderData<LoaderData>();

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
