export const revalidate = 60;

import NewMainPage from "@/components/Home/MainPage/NewMainPage";
import { GetProductsForMainPageService } from "@/data/Services/productService";

export default async function Home() {
  const productsData = await GetProductsForMainPageService();

  if (!productsData || !productsData.data) {
    return <div>Failed to fetch products.</div>;
  }

  return <NewMainPage listProducts={productsData.data} />;
}
