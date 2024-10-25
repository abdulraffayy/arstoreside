const Footer = () => {
  return (
    <>
      <div className="footer-section bg-black p-4 mt-10 text-white h-[100%] w-[100%]">
        <div className="footer-sides flex flex-col sm:flex-row items-center justify-around p-10 gap-6">
          <div className="beauty text-center sm:text-left">
            <h1 className="text-xl font-bold mb-2 text-red-400">AR Beauty Store</h1>
            <p>Discover premium beauty products to enhance your natural radiance effortlessly</p>
          </div>

          <div className="shopping text-center sm:text-left">
          <h1 className='text-red-400'>Shopping</h1>
            <ul>
              <li >Beauty Product</li>
              <li>Whitening Cream</li>
              <li>Facial kits</li>
              <li>Trimmer</li>
            </ul>
          </div>

          <div className="shopping text-center sm:text-left">
            <h1 className='text-red-600'>Shopping</h1>
            <ul>
              <li>Beauty Product</li>
              <li>Whitening Cream</li>
              <li>Facial kits</li>
              <li>Trimmer</li>
            </ul>
          </div>

          <div className="beauty text-center sm:text-left">
            <h1 className="text-xl font-bold mb-2 text-red-400">Newsletter</h1>
            <p>Be the first to know about new arrivals, look books, sales & promos!</p>
            <input
              type="text"
              placeholder="Your Email"
              className="mt-2 p-2 rounded-md text-black w-full"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
