import NewMainPage from "@/components/Home/MainPage/NewMainPage";

async function getProducts() {
  const res = await fetch('https://access.anishoo.com/api/product/getAllProductsForMainPage', {
    cache: 'no-store', // هر بار درخواست بفرسته، کش نکنه!
  });

  if (!res.ok) {
    console.error('Failed to fetch products:', res.status);
    return null;
  }

  const data = await res.json();
  console.log(data);
  return data;
}


export default async function Home() {
  const products = await getProducts();

  if (!products) {
    return <div>Failed to fetch products.</div>;
  }

  return <NewMainPage listProducts={products} />;
}
