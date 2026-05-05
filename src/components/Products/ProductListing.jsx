import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import { electronicProducts, HealthAndPersonalCare } from "../../assets/data.json";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

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
      "https://m.media-amazon.com/images/G/53/RBSxFELA/2025/Electronics/Revamp/ER-FC-Storage._CB549178960_UC216,216_.jpg",
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

  const handleProductClick = (item) => {
    console.log("clicked, item details:", item)
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
    <div className="min-h-screen text-slate-800 bg-white">

      <section className="flex items-center gap-4 bg-gray-100 px-6 border-b border-slate-200 text-sm text-slate-600">
        <span className="text-xs hover:text-blue-500 hover:border-b-2 hover:border-blue-600 p-2 hover:py-1 cursor-pointer">Electronics</span>
        <span className="text-xs hover:text-blue-600 hover:border-b-2 hover:border-blue-600 p-2 hover:py-1 cursor-pointer">Camera & Photo</span>
        <span className="text-xs hover:text-blue-600 hover:border-b-2 hover:border-blue-600 p-2 hover:py-1 cursor-pointer">TV & Home Entertainment</span>
        <span className="text-xs hover:text-blue-600 hover:border-b-2 hover:border-blue-600 p-2 hover:py-1 cursor-pointer">Headphones & Speakers</span>
        <span className="text-xs hover:text-blue-600 hover:border-b-2 hover:border-blue-600 p-2 hover:py-1 cursor-pointer">Phone & Accessories</span>
        <span className="text-xs hover:text-blue-600 hover:border-b-2 hover:border-blue-600 p-2 hover:py-1 cursor-pointer">Wearable Technology</span>
      </section>
      
      <main className="mx-auto max-w-8xl px-4 py-2">
        <div className="grid gap-6 xl:grid-cols-[260px_minmax(0,1fr)]">

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
            <section className="border-b border-slate-200 bg-white p-2">
              <p className="text-3xl font-bold text-slate-900">
                Computers & Accessories
              </p>
              <img
                src="https://m.media-amazon.com/images/G/53/RBSxFELA/2025/Electronics/Revamp/Artboard_2.jpg"
                alt="Computers & Accessories hero"
                className="w-full"
              />
            </section>

            <div className="bg-white p-5">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold">
                    Categories
                  </h2>
                </div>
              </div>
              <div className="mt-2 grid gap-4 sm:grid-cols-2 lg:grid-cols-5 gap-2">
                {categories.map((category) => (
                  <div
                    key={category.label} className="flex flex-col items-center">                    
                      <img
                        src={category.image}
                        alt={category.label}
                        className="h-full w-full object-contain"
                      />
                    <p className="text-xs font-medium">
                      {category.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-5">
              <div className="flex flex-wrap items-end gap-4">
                <div>
                  <h2 className="text-2xl font-semibold">
                    Hot new releases
                  </h2>
                </div>
                <button className="text-md text-blue-600 underline font-medium">
                  See more
                </button>
              </div>

              <div className="mt-2 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {electronicProducts.map((item) => (
                  <article
                    key={item.title}
                    onClick={()=>{handleProductClick(item)}}
                    className="bg-white p-4 shadow-sm transition hover:-translate-y-0.5"
                  >
                    <div className="flex items-center justify-center overflow-hidden p-6">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-48 object-contain"
                      />
                    </div>
                    <div className="mt-4 space-y-3">
                      <p className="text-sm font-medium text-slate-900">
                        {item.title}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-amber-500">
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
                      <p className="text-xl font-semibold text-slate-900">
                        R{item.price}
                      </p>
                      <p className="text-sm text-slate-500">{item.delivery}</p>
                      {item.subText && (
                        <p className="text-sm text-slate-500">{item.subText}</p>
                      )}
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-8 p-4 text-center bg-gray-100">
                <button className="font-bold text-blue-700 text-lg">
                  See all results
                </button>
              </div>
            </div>

          </section>
              
        </div>
      </main>
      <section className="p-4">
        <p className="w-full text-black">
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
    </>
  );
};

export default ProductListing;
