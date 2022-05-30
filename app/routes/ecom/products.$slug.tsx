import { DataFunctionArgs, json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { getProduct } from 'saleor';

export async function loader({ params }: DataFunctionArgs) {
  return json({
    product: await getProduct(params.slug),
  });
}

type LoaderData = { product: Awaited<ReturnType<typeof getProduct>> };

export default function ProductPage() {
  const { product } = useLoaderData<LoaderData>();
  return <h1>{product.name}</h1>;
}
