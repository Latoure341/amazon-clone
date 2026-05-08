import React, { useEffect, useMemo, useState } from 'react'
import { HiOutlineCheckCircle } from 'react-icons/hi'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
  const navigate = useNavigate()
  const [ quantity, setQuantity ] = useState(0);
  const storedCart = JSON.parse(localStorage.getItem('cart') || '[]')
  const [products] = useState(Array.isArray(storedCart) ? storedCart : [])
  const subtotal = useMemo(
    () => products.reduce((sum, item) => sum + Number(item.price || 0), 0),
    [products]
  )
  const freeDelivery = subtotal >= 500

  useEffect(() => {
    document.title = 'Checkout | Amazon Clone'
  }, [])

  const item = products[0] || {
    title: 'PlayStation 5 Wireless Controller',
    image: 'https://via.placeholder.com/180',
    price: 1499,
    quantity: 1,
  }
  const handleCheckoutClick = () => {
    if (products.length !== 0) {
      navigate("/login")
    }
  }
  return (
    <div className='bg-slate-50 min-h-screen text-slate-900'>
      <NavBar />
      <main className='mx-auto max-w-7xl px-4 py-8'>
        <div className='grid gap-6 xl:grid-cols-[1.8fr_0.95fr]'>

          <section className='space-y-6'>
            <div className='space-y-6 rounded-3xl bg-white p-6 shadow-sm'>
              <div className='grid gap-6 xl:grid-cols-[1.7fr_1fr]'>
                <div className='rounded-3xl border border-slate-200 bg-slate-50 p-6'>
                  <div className='flex flex-col gap-4 md:flex-row md:items-center'>
                    <div className='flex h-28 w-28 items-center justify-center rounded-3xl bg-white p-4 shadow-sm'>
                      <img src={item.image} alt={item.title} className='h-full object-contain' />
                    </div>
                    <div className='space-y-3'>
                      <div className='flex items-center gap-2 text-xl font-semibold text-slate-900'>
                        <HiOutlineCheckCircle className='text-emerald-600' />
                        <span>Added to basket</span>
                      </div>
                      <p className='text-sm text-slate-600'>Colour Name: Black/White</p>
                    </div>
                  </div>
                </div>

                <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
                  <p className='mt-3 text-sm text-emerald-700'>
                    {freeDelivery ? 'Your order qualifies for FREE Delivery.' : 'Your order may qualify for FREE Delivery.'}
                  </p>
                  <p className='mt-2 text-sm text-slate-500'>Select this option at checkout.</p>
                  <a href='#delivery' className='mt-3 inline-flex text-sm font-medium text-blue-600 hover:underline'>Delivery Details</a>
                  <div className='mt-5 flex flex-col gap-3'>
                    <button
                      onClick={handleCheckoutClick}
                      className='rounded-full bg-[#f7ca00] px-4 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-[#e5b000]'>
                      Proceed to Checkout
                    </button>
                    <button className='rounded-full border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100'>
                      Go to basket
                    </button>
                  </div>
                  <p className='mt-4 text-xs text-slate-500'>For best experience sign in to your account.</p>
                </div>
              </div>
            </div>

            <section className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
              <div className='flex items-center justify-between'>
                <h2 className='text-xl font-semibold text-slate-900'>Basket items</h2>
                <p className='text-sm text-slate-500'>{products.length} item{products.length === 1 ? '' : 's'}</p>
              </div>
              <div className='mt-6 space-y-4'>
                {products.length > 0 ? (
                  products.map((cartItem, idx) => (
                    <div key={`${cartItem.id ?? idx}-${cartItem.title}`} className='grid gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:grid-cols-[120px_minmax(0,1fr)_120px]'>
                      <div className='flex items-center justify-center rounded-3xl bg-white p-3'>
                        <img src={cartItem.image} alt={cartItem.title} className='h-24 object-contain' />
                      </div>
                      <div className='space-y-2'>
                        <p className='text-base font-semibold text-slate-900'>{cartItem.title}</p>
                        <p className='text-sm text-slate-600'>Quantity: {cartItem.quantity || 1}</p>
                        <p className='text-sm text-slate-600'>Seller: Amazon</p>
                        <p className='text-sm text-slate-600'>Eligible for FREE Delivery</p>
                      </div>
                      <div className='flex flex-col justify-between gap-2 rounded-3xl border border-slate-200 bg-white p-4 text-right'>
                        <p className='text-base font-semibold text-slate-900'>R{Number(cartItem.price || 0).toLocaleString()}</p>
                        <p className='text-sm text-slate-500'>{cartItem.quantity || 1} item{cartItem.quantity === 1 ? '' : 's'}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className='rounded-3xl border border-dashed border-slate-300 bg-white p-8 text-center text-sm text-slate-600'>
                    No items in your basket yet.
                  </div>
                )}
              </div>
            </section>

            <section className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
              <div className='flex items-center justify-between'>
                <h2 className='text-xl font-semibold text-slate-900'>Continue shopping for</h2>
                <p className='text-sm text-slate-500'>Page 1 of 5</p>
              </div>
              <div className='mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-4'>
                <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
                  {[
                    'https://m.media-amazon.com/images/I/81yoyNWn9HS._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/I/71V9q41l+0S._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/I/71GzfzTMVTL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/I/71SINf1tSeL._AC_SL1500_.jpg',
                  ].map((src, idx) => (
                    <div key={idx} className='rounded-3xl bg-white p-4 shadow-sm'>
                      <img src={src} alt={`Continue shopping ${idx + 1}`} className='h-36 w-full object-contain' />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </section>

          <aside className='space-y-6'>
            <div className='sticky top-6 space-y-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm'>
              <div className='flex items-center gap-4'>
                <div className='h-20 w-20 overflow-hidden rounded-3xl bg-slate-100 p-3'>
                  <img src={item.image} alt={item.title} className='h-full w-full object-contain' />
                </div>
                <div>
                  <p className='text-sm font-medium text-slate-900'>R{Number(item.price).toLocaleString()}</p>
                  <p className='mt-1 text-xs text-slate-500'>1 item</p>
                </div>
              </div>
              <div className='flex items-center justify-between rounded-full border border-slate-300 bg-slate-50 px-3 py-2 text-sm'>
                <button onClick={()=>{
                  if(quantity > 0){
                    setQuantity(quantity-1)
                  }
                }}
                type='button' className='rounded-full bg-white px-3 py-1 text-slate-700 shadow-sm transition hover:bg-slate-100'>-</button>
                <span className='font-semibold text-slate-900'>{quantity}</span>
                <button onClick={()=>{
                  setQuantity(quantity+1)
                }}
                type='button' className='rounded-full bg-white px-3 py-1 text-slate-700 shadow-sm transition hover:bg-slate-100'>+</button>
              </div>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Checkout
