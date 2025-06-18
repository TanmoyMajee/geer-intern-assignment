import Link from 'next/link'


const Header = () => {
  return (
    
      <div className="flex items-center justify-between bg-gray-600 text-white">
        <div className="px-5 text-2xl">
          <Link href="/" className=" ">
            E-Commerce
          </Link>
        </div>

      <div className="space-x-6 px-6 py-3.5 text-xl">
        <Link href="/" className="">
          Home
        </Link>
        <Link href="/products" className="">
           Add Products
        </Link>
        <Link href="/cart" className=" ">
          Cart
        </Link>
      </div>

      </div>
  )
}

export default Header