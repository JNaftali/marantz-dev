import { DataFunctionArgs, json, redirect } from '@remix-run/node';
import { useFetcher, useLoaderData } from '@remix-run/react';
import { getProduct } from 'saleor';
import { withCart } from '~/ecom/cookies';

export async function loader({ params }: DataFunctionArgs) {
  return json({
    product: await getProduct(params.slug),
  });
}

export async function action({ request, params }: DataFunctionArgs) {
  const formData = Object.fromEntries(await request.formData());
  assertIsNormalForm(formData);
  switch (formData.intent) {
    case 'add-to-cart':
      return withCart(request, async (cart) => {
        const cartItems: { id: string; quantity: number }[] = cart.has('cartItems')
          ? cart.get('cartItems')
          : [];
        const product = await getProduct(params.slug);
        if (cartItems.some((item) => item.id === product.id)) {
          for (let item of cartItems) {
            if (item.id === product.id) item.quantity += 1;
          }
        } else {
          cartItems.push({ id: product.id, quantity: 1 });
        }
        cart.set('cartItems', cartItems);
        return redirect(request.url);
      });
  }
}

function assertIsNormalForm(x: any): asserts x is FormSubmission {
  if (!('intent' in x)) throw new Error('unknown form submission');
}
interface BaseFormSubmission {
  intent: string;
}

interface AddToCartForm extends BaseFormSubmission {
  intent: 'add-to-cart';
}

type FormSubmission = AddToCartForm;

type LoaderData = { product: Awaited<ReturnType<typeof getProduct>> };

export default function ProductPage() {
  const { product } = useLoaderData<LoaderData>();
  const addToCart = useFetcher();
  return (
    <main>
      <h1>{product.name}</h1>
      <addToCart.Form method="post">
        <input type="hidden" name="intent" value="add-to-cart" />
        <button>Add to cart</button>
      </addToCart.Form>
    </main>
  );
}
