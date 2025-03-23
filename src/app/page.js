import NewMainPage from "@/components/Home/MainPage/NewMainPage";
import { GetProductsForMainPageService } from "@/data/Services/productService";

export default async function Home() {
  // سرور مستقیم دیتا رو می‌گیره
  let productsData = null;

  try {
    productsData = await GetProductsForMainPageService();
  } catch (error) {
    console.error("Failed to fetch product:", error);
    return <div>Failed to fetch products.</div>;
  }

  // اگر مشکلی نبود، دیتا رو پاس بده به کامپوننت
  return <NewMainPage listProducts={productsData.data} />;
}
