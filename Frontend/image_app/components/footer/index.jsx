import Link from "next/link";



export default function Footer()
{
    return(<>
<div className="bg-indigo-600 px-4 py-3 text-white">
  <p className="text-center text-sm font-medium">
    Thank you for visiting our site 
  </p>
</div>

<footer aria-label="Site Footer" className=" dark:bg-gray-900">
  <div className="mx-auto max-w-screen-xl px-4 pt-12 pb-8 sm:px-6 lg:px-8">
    

    <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
      <div className="mx-auto max-w-sm lg:max-w-none">
        <h1 className="text-center text-white fw-semibold text-2xl">ImageConvert</h1>
        <p
          className="mt-4 text-start text-sm text-gray-400 dark:text-gray-400 lg:text-left lg:text-sm font-medium">
          ImageConvert.in is a web-based platform that allows users to easily convert their images from one format to another. With a simple drag-and-drop interface, users can quickly and easily convert their files, supporting a wide range of popular formats such as JPEG, PNG, GIF, and more. The site also offers advanced options for resizing and editing images, making it the perfect tool for anyone looking to manipulate their image files.
        </p>
      </div>

      <div
        className="grid grid-cols-1 gap-8 text-center  lg:grid-cols-3 lg:text-start"
      >
        <div>
          <strong className="font-medium text-gray-100">
            Services
          </strong>

          <nav
            aria-label="Footer Services Nav"
            className="mt-6 flex flex-col space-y-1"
          >
            <Link href="/" legacyBehavior><a className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75 font-medium">
              Image Convert
            </a></Link>
            <Link href="/Resize/" legacyBehavior><a  className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75 font-medium">
              Image Resize
            </a></Link>
            <Link href="/compressor/" legacyBehavior><a className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75 font-medium">
              Image Compressor
            </a></Link>
            
          </nav>
        </div>

        <div>
          <strong className="font-medium text-gray-100 ">
            About
          </strong>

          <nav
            aria-label="Footer About Nav"
            className="mt-6 flex flex-col space-y-1"
          >
            <Link href="/about" legacyBehavior><a className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75 font-medium">
              About Us
            </a></Link>
            <Link href="/privacy_policy" legacyBehavior><a
              className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75 font-medium">
              Privacy Policy
            </a></Link>
            <Link href="/contact" legacyBehavior><a className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75 font-medium">
              Contact Us
            </a></Link>
            
            
            
          </nav>
        </div>

        <div>
          <strong className="font-medium text-gray-100">
            Support
          </strong>

          <nav
            aria-label="Footer Support Nav"
            className="mt-6 flex flex-col space-y-1"
          >
            

            <Link href="/contact" legacyBehavior><a className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75 font-medium">
              Contact Us
            </a></Link>     
          </nav>
        </div>
      </div>
    </div>

    <div className="mt-16 border-t border-gray-100 pt-8 dark:border-gray-800">
      <p
        className="text-center text-xs leading-relaxed text-gray-500 dark:text-gray-400"
      >
        © {new Date().getFullYear()}. All rights reserved.

        <br />        
      </p>
    </div>
  </div>
</footer>


    </>)
}