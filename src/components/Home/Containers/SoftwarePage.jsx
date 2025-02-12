import Footer from "@/components/shared/Footer";
import FirstSection from "../FirstSection";
import CartDrawer from "@/components/shared/CartDrawer";
import SwiperProduct from "../Products/SwiperProduct";
import CategorySectionDesktop from "../CategoriesSectionDesktop";
import CategorySection from "../CategorySection";




const SoftwarePage = () => {

    const images = [
        "https://mobogift.com/cdn/2021/03/26/07-31-41_605df75516c6f.jpg",
        "https://mobogift.com/cdn/2019/11/11/03-05-48_5dc94794e83a1.jpg",
        "https://mobogift.com/cdn/2019/11/11/02-57-50_5dc945b6263e0.jpg",
        "https://mobogift.com/cdn/2019/11/11/03-28-01_5dc94cc9a77ca.jpg",
        "https://mobogift.com/cdn/2023/12/03/06-13-06_656c93fa512dd.jpeg",
        "https://mobogift.com/cdn/2019/11/16/06-28-29_5dd00e95e3d3f.jpg",
      ];
    
    return ( <>
    
    
    <FirstSection/>
    
    <div className="bg-gray-100 mb-20 p-4 max-w-640:block hidden">
        <h1 className="text-center text-2xl font-bold mb-4 mt-4">تمامی گیفت کارت ها</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={image}
                alt={`تصویر ${index + 1}`}
                className="w-full h-32 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      
      <CategorySection />
      <CategorySectionDesktop />
      <SwiperProduct />

      <div class="container mx-auto p-4">
        <div class="flex flex-wrap justify-center gap-4">
          <div class="bg-white shadow-lg rounded-lg overflow-hidden w-full  ">
            <img src="https://www.bleepstatic.com/content/hl-images/2021/03/18/microsoft-fire.jpg" alt="Card 1 Image" class="w-full h-48 object-cover" />

          </div>
          <div class="bg-white shadow-lg rounded-lg overflow-hidden w-full  ">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMMCFwf618nN0snv_lDyaA4ETSJD97w-BatQ&s" alt="Card 2 Image" class="w-full h-48 object-cover" />

          </div>
        </div>
      </div>

      <SwiperProduct />
      <SwiperProduct />
      <CartDrawer/>
    </> );
}
 
export default SoftwarePage;