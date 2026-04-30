import React, { useState } from 'react'
import Footer from '../Footer/Footer'
import { BsFillStarFill, BsStarHalf, BsStar } from 'react-icons/bs'

const product = {
  title:
    'Apple iPad with A16 chip: 11-inch Liquid Retina display, 128 GB, Wi-Fi 6, 12MP Front / 12MP Back Camera, Touch ID, All-Day Battery Life — Blue',
  rating: 4.7,
  reviews: 193,
  price: '6 599',
  listPrice: '7 999',
  savings: '1 400',
  availability: 'In stock',
  deliveryDate: 'Sat, 2 May',
  deliverByText: 'Or fastest delivery Today 17:00 - 20:00',
  images: [
    'https://m.media-amazon.com/images/I/81yoyNWn9HS._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/71V9q41l+0S._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/81gnlGrxh2S._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/71GzfzTMVTL._AC_SL1500_.jpg',
  ],
  features: [
    '11-inch Liquid Retina display with True Tone and wide color',
    'A16 Bionic chip for fast performance and graphics',
    '128 GB storage with Wi-Fi 6 and long battery life',
    '12MP Ultra Wide front camera with Center Stage',
    'Works with Apple Pencil (2nd generation) and Magic Keyboard',
  ],
}

const Products = () => {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const filledStars = Math.floor(product.rating)
  const hasHalfStar = product.rating - filledStars >= 0.5
  const emptyStars = 5 - filledStars - (hasHalfStar ? 1 : 0)

  return (
    <main className='bg-slate-50 min-h-screen'>
      <section className='border-b border-slate-200 bg-white py-3'>
        <div className='mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-4 text-sm text-slate-600'>
          <span className='text-blue-600 hover:underline cursor-pointer'>Electronics</span>
          <span>/</span>
          <span className='text-blue-600 hover:underline cursor-pointer'>Computers & Accessories</span>
          <span>/</span>
          <span className='text-slate-900'>Apple iPad 11-inch</span>
        </div>
      </section>

      <section className='mx-auto max-w-7xl px-4 py-8'>
        <div className='grid gap-6 lg:grid-cols-[1.5fr_2fr_1fr]'>
          <div className='rounded-3xl border border-slate-200 bg-white p-4 shadow-sm'>
            <div className='overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 p-4'>
              <img
                src={product.images[selectedImage]}
                alt={`Product image ${selectedImage + 1}`}
                className='h-[440px] w-full object-contain'
              />
            </div>
            <div className='mt-4 grid grid-cols-4 gap-3'>
              {product.images.map((image, idx) => (
                <button
                  key={image}
                  type='button'
                  onClick={() => setSelectedImage(idx)}
                  className={`overflow-hidden rounded-2xl border p-1 transition ${
                    selectedImage === idx
                      ? 'border-blue-500 ring-2 ring-blue-400/30'
                      : 'border-slate-200 hover:border-slate-400'
                  }`}
                >
                  <img src={image} alt={`Thumbnail ${idx + 1}`} className='h-20 w-full object-contain' />
                </button>
              ))}
            </div>
          </div>

          <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
            <h1 className='text-2xl font-semibold text-slate-900 leading-tight'>
              {product.title}
            </h1>
            <div className='mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-600'>
              <div className='flex items-center gap-1 text-amber-500'>
                {Array.from({ length: filledStars }).map((_, index) => (
                  <BsFillStarFill key={`filled-${index}`} />
                ))}
                {hasHalfStar && <BsStarHalf />}
                {Array.from({ length: emptyStars }).map((_, index) => (
                  <BsStar key={`empty-${index}`} className='text-slate-300' />
                ))}
              </div>
              <span className='font-medium text-slate-800'>{product.rating}</span>
              <span className='text-slate-500'>({product.reviews} ratings)</span>
              <span className='text-slate-400'>|</span>
              <span className='cursor-pointer text-blue-600 hover:underline'>See all reviews</span>
            </div>

            <div className='mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-5'>
              <div className='flex items-end gap-3'>
                <span className='text-4xl font-semibold text-slate-900'>R{product.price}</span>
                <span className='text-sm text-slate-500 line-through'>R{product.listPrice}</span>
              </div>
              <p className='mt-2 text-sm text-emerald-700'>Save R{product.savings}</p>
            </div>

            <div className='mt-6 space-y-4 text-sm text-slate-700'>
              <div className='rounded-3xl border border-slate-200 bg-slate-50 p-4'>
                <p className='font-medium text-slate-900'>Delivery</p>
                <p className='mt-1 text-base text-slate-900'>FREE delivery {product.deliveryDate}</p>
                <p className='text-slate-500'>{product.deliverByText}</p>
              </div>

              <div className='rounded-3xl border border-slate-200 bg-slate-50 p-4'>
                <p className='font-medium text-slate-900'>About this item</p>
                <ul className='mt-3 list-disc space-y-2 pl-5 text-slate-700'>
                  {product.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <aside className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
            <div className='space-y-4'>
              <div className='text-sm text-slate-600'>Buy now</div>
              <div className='text-3xl font-semibold text-slate-900'>R{product.price}</div>
              <div className='flex items-center gap-3 text-sm text-slate-500'>
                <span className='line-through'>R{product.listPrice}</span>
                <span className='text-emerald-700'>Save R{product.savings}</span>
              </div>
              <div className='rounded-2xl bg-emerald-50 p-3 text-sm font-medium text-emerald-900 border border-emerald-100'>
                {product.availability}
              </div>

              <div className='grid gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm'>
                <div className='text-slate-600'>Delivery</div>
                <div className='text-slate-900 font-medium'>FREE delivery {product.deliveryDate}</div>
                <div className='text-slate-500'>{product.deliverByText}</div>
              </div>

              <div className='flex items-center justify-between gap-3'>
                <label htmlFor='qty' className='text-sm font-medium text-slate-700'>Qty:</label>
                <select
                  id='qty'
                  value={quantity}
                  onChange={(event) => setQuantity(Number(event.target.value))}
                  className='h-11 rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200'
                >
                  {[1, 2, 3, 4, 5].map((amount) => (
                    <option key={amount} value={amount}>
                      {amount}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type='button'
                className='w-full rounded-md bg-[#ffd814] px-4 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-[#f7ca00]'
              >
                Add to Cart
              </button>
              <button
                type='button'
                className='w-full rounded-md bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800'
              >
                Buy Now
              </button>

              <div className='mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600'>
                <p>
                  Ships from: <span className='font-medium text-slate-900'>Amazon</span>
                </p>
                <p>
                  Sold by: <span className='font-medium text-slate-900'>Amazon</span>
                </p>
                <p className='mt-2 text-slate-700'>Returns accepted</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default Products
