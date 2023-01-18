import Link from "next/link";

export default function Navbar()
{
    return(<>
    

<header aria-label="Site Header" className="shadow-sm">
  <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4">
    

    <div className="flex items-center gap-4">      
        <span className="sr-only">Logo</span>                    
        <div className="relative fw-semibold text-xl font-sans"><Link href="/" legacyBehavior><a className="text-gray-900" >ImageConvert</a></Link></div>      
    </div>    
    <nav
      aria-label="Site Nav"
      className="hidden items-center justify-center gap-8 text-sm font-medium lg:flex lg:w-0 lg:flex-1"
    >
      <Link href="/" legacyBehavior><a className="text-gray-900" >Convert</a></Link>
      <Link href="/Resize/" legacyBehavior><a className="text-gray-900" >Resize</a></Link>
      <Link href="/compressor/" legacyBehavior><a className="text-gray-900" >Compressor</a></Link>
      <Link href="/about/" legacyBehavior><a className="text-gray-900" >About us</a></Link>
      
      
      
    </nav>

    <div className="hidden items-center gap-4 lg:flex">
    <Link href="/contact/" legacyBehavior><a
        
        className="rounded-lg bg-gray-100 px-5 py-2 text-sm font-medium text-gray-600"      >
        Contact us
      </a></Link>
      
      <Link href="/privacy_policy/" legacyBehavior><a className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white">
        Privacy Policy
      </a></Link>
      
    </div>
  </div>

  <div className="border-t border-gray-100 lg:hidden">
    <nav
      className="flex items-center justify-center overflow-x-auto p-4 text-sm font-medium"
    >
      <Link href="/" legacyBehavior><a className="flex-shrink-0 pl-4 text-gray-900" >Convert</a></Link>
      <Link href="/Resize/" legacyBehavior><a className="flex-shrink-0 pl-4 text-gray-900" >Resize</a></Link>
      <Link href="/compressor/" legacyBehavior><a className="flex-shrink-0 pl-4 text-gray-900" >Compressor</a></Link>
      <Link href="/about/" legacyBehavior><a className="flex-shrink-0 pl-4 text-gray-900" >About us</a></Link>
      
      
      
      
    </nav>
  </div>
</header>

<div className="bg-blue-600 px-4 py-2 text-white">
  <p className="text-center text-sm font-medium ">
    File Size Must be equal to 50mb less than 50mb
  </p>
</div>

    </>)
}