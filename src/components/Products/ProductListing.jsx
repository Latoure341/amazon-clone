import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";

import { electronicProducts, HealthAndPersonalCare } from "../../assets/data.json";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import RightCartPanel from "../CartItems/RightCartPanel";

const categories = [
  {
    label: "Laptops",
    image:
      "https://m.media-amazon.com/images/G/53/RBSxFELA/2025/Electronics/Revamp/ER-FC-Laptops._CB549178960_UC216,216_.jpg",
  },
  {
    label: "Components & Replacement Parts",
    image:
      "https://m.media-amazon.com/images/G/53/RBSxFELA/2025/Electronics/Revamp/ER-FC-Components._CB549178960_UC216,216_.jpg",
  },
  {
    label: "Tablets",
    image:
      "https://m.media-amazon.com/images/G/53/RBSxFELA/2025/Electronics/Revamp/ER-FC-Tablets._CB549178960_UC216,216_.jpg",
  },
  {
    label: "Data Storage",
    image:
      "https://m.media-amazon.com/images/G/53/RBSxFELA/2025/Electronics/Revamp/ER-FC-DataStorage._CB549178960_UC216,216_.jpg",
  },
  {
    label: "Monitors",
    image:
      "https://m.media-amazon.com/images/G/53/RBSxFELA/2025/Electronics/Revamp/ER-FC-Monitors._CB549178960_UC216,216_.jpg",
  },
];

const brands = [
  "Apple",
  "ASUS",
  "Samsung",
  "ASTRUM",
  "HP",
  "Packard Bell",
  "Belkin",
  "Canon",
];

const ProductListing = () => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState('default');

  const sortedProducts = useMemo(() => {
    const products = [...electronicProducts];
    
    switch (sortBy) {
      case 'price-low':
        return products.sort((a, b) => a.price - b.price);
      case 'price-high':
        return products.sort((a, b) => b.price - a.price);
      case 'rating':
        return products.sort((a, b) => {
          const ratingA = typeof a.rating === 'number' ? a.rating : 0;
          const ratingB = typeof b.rating === 'number' ? b.rating : 0;
          return ratingB - ratingA;
        });
      default:
        return products;
    }
  }, [sortBy]);

  const handleProductClick = (item) => {
    const productDetails = {
      title: item.title,
      image: item.image,
      rating: item.rating,
      reviews: item.reviews,
      price: item.price,
      listPrice: item.listPrice || "",
      delivery: item.delivery,
      subText: item.subText,
      description: item.description || ""
    }
    localStorage.setItem("productDetails", JSON.stringify(productDetails))
    navigate("/products")
  }



  return (
    <>
    <NavBar />
    <div className="min-h-screen min-w-0 overflow-x-hidden text-slate-800 bg-white">

      <section className="flex flex-wrap items-center gap-x-3 gap-y-1 bg-gray-100 px-3 sm:gap-4 sm:px-6 border-b border-slate-200 text-sm text-slate-600">
        <span className="text-xs hover:text-blue-500 hover:border-b-2 hover:border-blue-600 p-2 hover:py-1 cursor-pointer">Electronics</span>
        <span className="text-xs hover:text-blue-600 hover:border-b-2 hover:border-blue-600 p-2 hover:py-1 cursor-pointer">Camera & Photo</span>
        <span className="text-xs hover:text-blue-600 hover:border-b-2 hover:border-blue-600 p-2 hover:py-1 cursor-pointer">TV & Home Entertainment</span>
        <span className="text-xs hover:text-blue-600 hover:border-b-2 hover:border-blue-600 p-2 hover:py-1 cursor-pointer">Headphones & Speakers</span>
        <span className="text-xs hover:text-blue-600 hover:border-b-2 hover:border-blue-600 p-2 hover:py-1 cursor-pointer">Phone & Accessories</span>
        <span className="text-xs hover:text-blue-600 hover:border-b-2 hover:border-blue-600 p-2 hover:py-1 cursor-pointer">Wearable Technology</span>
      </section>
      
      <main className="mx-auto max-w-8xl min-w-0 px-3 py-2 sm:px-6 lg:px-8">
        <div className="grid min-w-0 grid-cols-1 gap-4 sm:gap-6 xl:grid-cols-[260px_minmax(0,1fr)]">

          <aside className="">
            <div className=" bg-white px-5 ">
              <h2 className="mb-1 text-lg font-semibold">
                Department
              </h2>
              <ul className="space-y-2 text-sm">
                <li className="text-slate-900 font-medium">Electronics</li>
                <li className="hover:text-blue-600 hover:underline cursor-pointer">
                  Computers, Components & Accessories
                </li>
                <li className="hover:text-blue-600 hover:underline cursor-pointer">
                  Accessories
                </li>
                <li className="hover:text-blue-600 hover:underline cursor-pointer">
                  Barebone PCs
                </li>
                <li className="hover:text-blue-600 hover:underline cursor-pointer">
                  Components & Replacement Parts
                </li>
                <li className="hover:text-blue-600 hover:underline cursor-pointer">
                  Data Storage
                </li>
                <li className="hover:text-blue-600 hover:underline cursor-pointer">
                  Desktops
                </li>
                <li className="hover:text-blue-600 hover:underline cursor-pointer">
                  Laptops
                </li>
                <li className="hover:text-blue-600 hover:underline cursor-pointer">
                  Monitors
                </li>
                <li className="hover:text-blue-600 hover:underline cursor-pointer">
                  Networking Devices
                </li>
                <li className="hover:text-blue-600 hover:underline cursor-pointer">
                  Printers & Accessories
                </li>
                <li className="hover:text-blue-600 hover:underline cursor-pointer">
                  Scanners & Accessories
                </li>
                <li className="hover:text-blue-600 hover:underline cursor-pointer">
                  Servers
                </li>
                <li className="hover:text-blue-600 hover:underline cursor-pointer">
                  Single-Board Computers & Accessories
                </li>
                <li className="hover:text-blue-600 hover:underline cursor-pointer">
                  Tablets
                </li>
              </ul>
            </div>

            <div className="bg-white p-5 shadow-sm">
              <h2 className="mb-2 text-lg font-semibold">
                Filters
              </h2>
              <div className="space-y-4 text-sm text-slate-700">
                <div>
                  <h3 className="mb-2 font-medium text-slate-900">
                    Eligible for free delivery
                  </h3>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-slate-300 text-blue-600"
                    />
                    Free Delivery by Amazon
                  </label>
                  <p className="mt-2 text-slate-500">
                    FREE Delivery on orders over R500 shipped by Amazon
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 font-medium text-slate-900">
                    Delivery Day
                  </h3>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-slate-300 text-blue-600"
                    />
                    Get it today
                  </label>
                  <label className="mt-2 flex items-center gap-2 block">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-slate-300 text-blue-600"
                    />
                    Get it tomorrow
                  </label>
                </div>
                <div>
                  <h3 className="mb-2 font-medium text-slate-900">Brands</h3>
                  <div className="space-y-2">
                    {brands.map((brand) => (
                      <label key={brand} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          className="h-4 w-4 rounded border-slate-300 text-blue-600"
                        />
                        {brand}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <section className="space-y-1">
            <section className="border-b border-slate-200 bg-white p-2 sm:p-3">
              <p className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Computers & Accessories
              </p>
              <img
                src="https://m.media-amazon.com/images/G/53/RBSxFELA/2025/Electronics/Revamp/Artboard_2.jpg"
                alt="Computers & Accessories hero"
                className="h-auto w-full max-w-full object-contain"
              />
            </section>

            <div className="bg-white p-3 sm:p-4 md:p-5">
              <div className="flex flex-col gap-3 sm:gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-xl font-semibold sm:text-2xl">
                    Categories
                  </h2>
                </div>
              </div>
              <div className="mt-2 grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
                {categories.map((category) => (
                  <div
                    key={category.label} className="flex min-w-0 flex-col items-center">                    
                      <img
                        src={category.image}
                        alt={category.label}
                        className="mx-auto aspect-square h-auto w-full max-h-24 max-w-[min(100%,7.5rem)] object-contain sm:max-h-28 sm:max-w-[min(100%,8.5rem)] md:max-h-32 md:max-w-[min(100%,9rem)]"
                      />
                    <p className="text-center text-[11px] font-medium leading-tight sm:text-xs">
                      {category.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-3 sm:p-4 md:p-5">
              <div className="flex min-w-0 flex-wrap items-end gap-3 sm:gap-4">
                <div className="min-w-0">
                  <h2 className="text-xl font-semibold sm:text-2xl">
                    Hot new releases
                  </h2>
                </div>
                <div className="flex min-w-0 flex-wrap items-center gap-2">
                  <label htmlFor="sort-select" className="text-xs font-medium text-slate-700 sm:text-sm">
                    Sort by:
                  </label>
                  <select
                    id="sort-select"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="max-w-full min-w-0 shrink px-2 py-1 text-xs sm:px-3 sm:text-sm border border-slate-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="default">Default</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Rating</option>
                  </select>
                </div>
                <button className="text-sm text-blue-600 underline font-medium sm:text-base">
                  See more
                </button>
              </div>

              <div className="mt-2 grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
                {sortedProducts.map((item) => (
                  <article
                    key={item.title}
                    onClick={()=>{handleProductClick(item)}}
                    className="min-w-0 bg-white p-2 shadow-sm transition hover:-translate-y-0.5 sm:p-3 md:p-4"
                  >
                    <div className="flex aspect-[4/5] w-full max-h-[min(15rem,52vw)] items-center justify-center overflow-hidden p-2 sm:aspect-auto sm:max-h-none sm:p-3 md:p-4 lg:p-5">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="mx-auto h-full w-full max-h-full object-contain object-center sm:h-auto sm:max-h-[min(11rem,38vw)] md:max-h-[min(12rem,34vw)] lg:max-h-52"
                      />
                    </div>
                    <div className="mt-3 space-y-2 sm:mt-4 sm:space-y-3">
                      <p className="text-xs font-medium leading-snug text-slate-900 sm:text-sm">
                        {item.title}
                      </p>
                      <div className="flex flex-wrap items-center gap-1.5 text-xs text-amber-500 sm:gap-2 sm:text-sm">
                        {Array.from({ length: Math.floor(item.rating) }).map(
                          (_, index) => (
                            <AiFillStar key={index} />
                          ),
                        )}
                        {item.rating - Math.floor(item.rating) >= 0.5 && (
                          <AiFillStar className="text-slate-300" />
                        )}
                        <span className="text-slate-800">{item.rating}</span>
                        <span className="text-slate-500">({item.reviews})</span>
                      </div>
                      <p className="text-lg font-semibold text-slate-900 sm:text-xl">
                        R{item.price}
                      </p>
                      <p className="text-xs text-slate-500 sm:text-sm">{item.delivery}</p>
                      {item.subText && (
                        <p className="text-xs text-slate-500 sm:text-sm">{item.subText}</p>
                      )}
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-6 p-3 text-center bg-gray-100 sm:mt-8 sm:p-4">
                <button className="text-base font-bold text-blue-700 sm:text-lg">
                  See all results
                </button>
              </div>
            </div>

          </section>
              
        </div>
      </main>
      <section className="min-w-0 p-3 sm:p-4">
        <p className="w-full min-w-0 text-sm text-black sm:text-base">
                Amazon.co.za offers a wide range of Computers and Accessories
                that you can buy online. Explore laptops, tablets, data storage,
                printers, routers, monitor stands and many more computing
                devices. We make your online shopping experience easier as you
                can buy the laptop of your choice by filtering on the basis of
                price, brands and features. We bring computers, tablets and
                phones from popular brands such as Samsung, Netgear, Micromax
                and others. Also discover a selection of computer accessories
                such as Keyboards, Mice, Networking Devices, Memory cards,
                Webcams, Pen Drives, Laptop Covers and much more. Find a
                convenient way to store your music, pictures and other data with
                our wide selection of Pen Drives and External Hard Drives
                including SSD from brands such as Ryzen, Seagate, NVME, Western
                Digital (WD), Sony, Noctua, Razer, Corsair, Acer, Sandisk, AMD,
                RTX, Thrustmaster, Kingston and more. Amazon.co.za believes in
                enhancing your shopping experience through customer reviews and
                personalised recommendations based on your browsing and
                purchasing history.
              </p>
      </section>

      <Footer />
    </div>
    <RightCartPanel />
    </>
  );
};

export default ProductListing;
