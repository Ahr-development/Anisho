import GetProductServer from "@/components/ServerComponent/Product/GetProductServer";
import { GetProductByIdService } from "@/data/Services/productService";

export default async function ProductPage({ params }) {
    const { id } = params; // گرفتن آیدی از URL


    try {
        // دریافت محصول بر اساس آیدی
        const response = await GetProductByIdService(id);
        const product = response.data;

        return <GetProductServer initialProduct={product} />;
    } catch (error) {
        console.error("Failed to fetch product:", error);

        return <div>Failed to load product. Please try again later.</div>;
    }
}
