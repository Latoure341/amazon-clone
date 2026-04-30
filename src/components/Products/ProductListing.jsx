import React from 'react'
import { AiFillStar, AiOutlineSearch } from 'react-icons/ai'
import Footer from '../Footer/Footer'

const categories = [
  { label: 'Laptops', image: 'https://m.media-amazon.com/images/G/53/RBSxFELA/2025/Electronics/Revamp/ER-FC-Laptops._CB549178960_UC216,216_.jpg' },
  { label: 'Components & Replacement Parts', image: 'https://m.media-amazon.com/images/G/53/RBSxFELA/2025/Electronics/Revamp/ER-FC-Components._CB549178960_UC216,216_.jpg' },
  { label: 'Tablets', image: 'https://m.media-amazon.com/images/G/53/RBSxFELA/2025/Electronics/Revamp/ER-FC-Tablets._CB549178960_UC216,216_.jpg' },
  { label: 'Data Storage', image: 'https://m.media-amazon.com/images/G/53/RBSxFELA/2025/Electronics/Revamp/ER-FC-Storage._CB549178960_UC216,216_.jpg' },
  { label: 'Monitors', image: 'https://m.media-amazon.com/images/G/53/RBSxFELA/2025/Electronics/Revamp/ER-FC-Monitors._CB549178960_UC216,216_.jpg' },
]

const products = [
  {
    title: 'Apple iPad with A16 chip: 11-inch Liquid Retina display, 128 GB, Wi-Fi 6',
    image: 'https://m.media-amazon.com/images/I/81yoyNWn9HS._AC_SL1500_.jpg',
    rating: 4.7,
    reviews: 193,
    price: '6 599',
    delivery: 'FREE delivery Sat, 2 May',
    subText: 'Or fastest delivery Today 17:00 - 20:00',
  },
  {
    title: 'TP-Link Deco X55 3-Pack AX3000 Whole Home Mesh Wi-Fi 6 System',
    image: 'https://m.media-amazon.com/images/I/61vfa6DvN5L._AC_SL1500_.jpg',
    rating: 4.4,
    reviews: 240,
    price: '3 999',
    delivery: 'FREE delivery Sat, 2 May',
    subText: 'Or fastest delivery Today 17:00 - 20:00',
  },
  {
    title: 'HP Laptop 15.6" FHD Intel® Core™ Ultra 7 16GB RAM 512GB SSD Windows 11 Home',
    image: 'https://m.media-amazon.com/images/I/71SINf1tSeL._AC_SL1500_.jpg',
    rating: 4.3,
    reviews: 86,
    price: '16 999',
    delivery: 'FREE delivery Sat, 2 May',
    subText: 'Or fastest delivery Today 17:00 - 20:00',
  },
  {
    title: 'Belkin BoostCharge Pro Flex Braided USB-C to USB-C Cable (2m)',
    image: 'https://m.media-amazon.com/images/I/61x8FYgyG3L._AC_SL1500_.jpg',
    rating: 4.5,
    reviews: 77,
    price: '450',
    delivery: 'FREE delivery Sat, 2 May',
    subText: '',
  },
  {
    title: 'Mondi Rotatrim A4 Printing Paper Ream 80gsm',
    image: 'https://m.media-amazon.com/images/I/61uF2V7UEfL._AC_SL1500_.jpg',
    rating: 4.7,
    reviews: 45,
    price: '699',
    delivery: 'FREE delivery Sat, 2 May',
    subText: '',
  },
]

const brands = ['Apple', 'ASUS', 'Samsung', 'ASTRUM', 'HP', 'Packard Bell', 'Belkin', 'Canon']

const ProductListing = () => {
  return (
    <div className='bg-slate-50 min-h-screen text-slate-800'>
      <section className='border-b border-slate-200 bg-white py-4'>
        <div className='mx-auto max-w-7xl px-4'>
          <div className='rounded-3xl border border-slate-200 bg-gradient-to-r from-emerald-100 via-cyan-100 to-slate-50 p-5 shadow-sm'>
            <div className='flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between'>
              <div>
                <p className='text-3xl font-bold text-slate-900'>Computers & Accessories</p>
                <p className='mt-2 max-w-2xl text-sm text-slate-700'>Upgrade your setup with laptops, tablets, computer parts, storage and accessories.</p>
              </div>
              <img
                src='https://m.media-amazon.com/images/G/53/RBSxFELA/2025/Electronics/Revamp/Artboard_2.jpg'
                alt='Computers & Accessories hero'
                className='h-40 w-full max-w-md rounded-3xl object-cover lg:h-52'
              />
            </div>
          </div>
        </div>
      </section>

      <main className='mx-auto max-w-7xl px-4 py-8'>
        <div className='grid gap-6 xl:grid-cols-[260px_minmax(0,1fr)]'>
          <aside className='space-y-6'>
            <div className='rounded-3xl border border-slate-200 bg-white p-5 shadow-sm'>
              <h2 className='mb-4 text-lg font-semibold text-slate-900'>Department</h2>
              <ul className='space-y-2 text-sm text-slate-700'>
                <li className='text-slate-900 font-medium'>Electronics</li>
                <li className='hover:text-blue-600 hover:underline cursor-pointer'>Computers, Components & Accessories</li>
                <li className='hover:text-blue-600 hover:underline cursor-pointer'>Accessories</li>
                <li className='hover:text-blue-600 hover:underline cursor-pointer'>Barebone PCs</li>
                <li className='hover:text-blue-600 hover:underline cursor-pointer'>Components & Replacement Parts</li>
                <li className='hover:text-blue-600 hover:underline cursor-pointer'>Data Storage</li>
                <li className='hover:text-blue-600 hover:underline cursor-pointer'>Desktops</li>
                <li className='hover:text-blue-600 hover:underline cursor-pointer'>Laptops</li>
                <li className='hover:text-blue-600 hover:underline cursor-pointer'>Monitors</li>
                <li className='hover:text-blue-600 hover:underline cursor-pointer'>Networking Devices</li>
                <li className='hover:text-blue-600 hover:underline cursor-pointer'>Printers & Accessories</li>
                <li className='hover:text-blue-600 hover:underline cursor-pointer'>Scanners & Accessories</li>
                <li className='hover:text-blue-600 hover:underline cursor-pointer'>Servers</li>
                <li className='hover:text-blue-600 hover:underline cursor-pointer'>Single-Board Computers & Accessories</li>
                <li className='hover:text-blue-600 hover:underline cursor-pointer'>Tablets</li>
              </ul>
            </div>

            <div className='rounded-3xl border border-slate-200 bg-white p-5 shadow-sm'>
              <h2 className='mb-4 text-lg font-semibold text-slate-900'>Filters</h2>
              <div className='space-y-4 text-sm text-slate-700'>
                <div>
                  <h3 className='mb-2 font-medium text-slate-900'>Eligible for free delivery</h3>
                  <label className='flex items-center gap-2'>
                    <input type='checkbox' className='h-4 w-4 rounded border-slate-300 text-blue-600' />
                    Free Delivery by Amazon
                  </label>
                  <p className='mt-2 text-slate-500'>FREE Delivery on orders over R500 shipped by Amazon</p>
                </div>
                <div>
                  <h3 className='mb-2 font-medium text-slate-900'>Delivery Day</h3>
                  <label className='flex items-center gap-2'>
                    <input type='checkbox' className='h-4 w-4 rounded border-slate-300 text-blue-600' />
                    Get it today
                  </label>
                  <label className='mt-2 flex items-center gap-2 block'>
                    <input type='checkbox' className='h-4 w-4 rounded border-slate-300 text-blue-600' />
                    Get it tomorrow
                  </label>
                </div>
                <div>
                  <h3 className='mb-2 font-medium text-slate-900'>Brands</h3>
                  <div className='space-y-2'>
                    {brands.map((brand) => (
                      <label key={brand} className='flex items-center gap-2'>
                        <input type='checkbox' className='h-4 w-4 rounded border-slate-300 text-blue-600' />
                        {brand}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <section className='space-y-8'>
            <div className='rounded-3xl border border-slate-200 bg-white p-5 shadow-sm'>
              <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
                <div>
                  <h2 className='text-2xl font-semibold text-slate-900'>Categories</h2>
                  <p className='mt-2 text-sm text-slate-600'>Browse by popular categories in Computers & Accessories.</p>
                </div>
                <div className='flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-sm text-slate-700'>
                  <AiOutlineSearch className='text-slate-500' />
                  Search categories
                </div>
              </div>
              <div className='mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5'>
                {categories.map((category) => (
                  <div key={category.label} className='group overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-emerald-100 via-sky-100 to-slate-50 p-4 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md'>
                    <div className='mx-auto mb-4 h-40 w-40 overflow-hidden rounded-full bg-white p-4'>
                      <img src={category.image} alt={category.label} className='h-full w-full object-contain' />
                    </div>
                    <p className='text-sm font-medium text-slate-900'>{category.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className='rounded-3xl border border-slate-200 bg-white p-5 shadow-sm'>
              <div className='flex flex-wrap items-end justify-between gap-4'>
                <div>
                  <h2 className='text-2xl font-semibold text-slate-900'>Hot new releases</h2>
                  <p className='mt-1 text-sm text-slate-600'>Popular products in Computers & Accessories.</p>
                </div>
                <button className='rounded-full border border-slate-300 bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-200'>See more</button>
              </div>

              <div className='mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3'>
                {products.map((item) => (
                  <article key={item.title} className='rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md'>
                    <div className='flex items-center justify-center overflow-hidden rounded-3xl bg-slate-50 p-6'>
                      <img src={item.image} alt={item.title} className='h-48 object-contain' />
                    </div>
                    <div className='mt-4 space-y-3'>
                      <p className='text-sm font-medium text-slate-900'>{item.title}</p>
                      <div className='flex items-center gap-2 text-sm text-amber-500'>
                        {Array.from({ length: Math.floor(item.rating) }).map((_, index) => (
                          <AiFillStar key={index} />
                        ))}
                        {item.rating - Math.floor(item.rating) >= 0.5 && <AiFillStar className='text-slate-300' />}
                        <span className='text-slate-800'>{item.rating}</span>
                        <span className='text-slate-500'>({item.reviews})</span>
                      </div>
                      <p className='text-xl font-semibold text-slate-900'>R{item.price}</p>
                      <p className='text-sm text-slate-500'>{item.delivery}</p>
                      {item.subText && <p className='text-sm text-slate-500'>{item.subText}</p>}
                    </div>
                  </article>
                ))}
              </div>

              <div className='mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6 text-center text-sm text-slate-700'>
                <button className='font-semibold text-blue-700 underline'>See all results</button>
              </div>
            </div>

            <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
              <p className='text-sm text-slate-600'>Amazon.co.za offers a wide range of Computers and Accessories that you can buy online. Explore laptops, tablets, data storage, printers, routers, monitor stands and many more computing devices. We make your online shopping experience easier as you can buy the laptop of your choice by filtering on the basis of price, brands and features. We bring computers, tablets and phones from popular brands such as Samsung, Netgear, Micromax and others. Also discover a selection of computer accessories such as Keyboards, Mice, Networking Devices, Memory cards, Webcams, Pen Drives, Laptop Covers and much more. Find a convenient way to store your music, pictures and other data with our wide selection of Pen Drives and External Hard Drives including SSD from brands such as Ryzen, Seagate, NVME, Western Digital (WD), Sony, Noctua, Razer, Corsair, Acer, Sandisk, AMD, RTX, Thrustmaster, Kingston and more. Amazon.co.za believes in enhancing your shopping experience through customer reviews and personalised recommendations based on your browsing and purchasing history.</p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default ProductListing
