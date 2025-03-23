import NewMainPage from "@/components/Home/MainPage/NewMainPage";
import { GetProductsForMainPageService } from "@/data/Services/productService";

export default async function Home() {
  // سرور مستقیم دیتا رو می‌گیره
  let productsData = null;

  try {
    productsData = await GetProductsForMainPageService();
    return <NewMainPage listProducts={productsData.data} />;

  } catch (error) {
    console.error("Failed to fetch product:", error);
    // خطا رو نمایش بده برای پروداکشن (حذف کن بعدا!)
    return (
      <div>
        <h1>خطا در دریافت اطلاعات</h1>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
    );
  }


}
