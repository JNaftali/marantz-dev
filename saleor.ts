import {
  GridProductsQuery,
  ProductDetailQuery,
  ProductDetailQueryVariables,
} from 'generated/graphql';
import { gql, GraphQLClient } from 'graphql-request';

const client = new GraphQLClient('https://laaurora.saleor.cloud/graphql/');

export async function getProducts() {
  const resp = await client.request<GridProductsQuery>(gql`
    query GridProducts {
      products(first: 100) {
        edges {
          node {
            id
            name
            slug
          }
        }
      }
    }
  `);

  return resp.products?.edges.map((edge) => edge.node) ?? [];
}

export async function getProduct(slug?: string) {
  if (!slug) throw new Error('need a slug to fetch product data');
  const resp = await client.request<ProductDetailQuery, ProductDetailQueryVariables>(
    gql`
      query ProductDetail($slug: String!) {
        product(slug: $slug) {
          name
        }
      }
    `,
    { slug },
  );

  if (!resp.product) throw new Error('Product not found');

  return resp.product;
}
