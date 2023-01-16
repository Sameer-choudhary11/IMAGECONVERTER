import Footer from "../../components/footer";
import Navbar from "../../components/Navbar";


export default function About()
{
    return(<>
        <Navbar />
        <section className="mx-auto container py-2 mb-8 ">
            <h1 className="text-center text-4xl fw-semibold m-8">About Us</h1>
            
            <div className="container text-sm  fw-semibold lg:w-1/2">      
            <hr />
            <h2 className="text-2xl fw-bold mt-2">Introduction</h2>
            <p className="mb-3">&#8226; imageconvert.in is a free online tool that allows you to quickly and easily convert your images from one format to another. Whether you need to change the file type, resize the image, or adjust the quality, our image converter makes it simple and hassle-free.</p>
            <h2 className="text-2xl fw-bold">Features</h2>
            <p className="mb-3">&#8226; Our image converter offers a range of features to help you get the most out of your images. You can convert your images to and from popular file types like JPEG, PNG, GIF, and more. You can also adjust the size, quality, and other settings to suit your needs.</p>            
            <h2 className="text-2xl fw-bold">How to Use</h2>
            <p className="mb-3">&#8226; Using our image converter is simple. Just visit our website, select the images you want to convert, choose your conversion settings, and hit `&#34;convert&#34;. Your images will be processed and ready to download within seconds.</p>            
            <h2 className="text-2xl fw-bold">Why Choose Us</h2>
            <p className="mb-3">&#8226; Our tool is free to use, with no registration or sign-up required.</p>
            <p className="mb-3">&#8226; Our user-friendly interface makes it easy for anyone to use, even if you &#34;re&#34; not a tech-savvy.</p>
            <p className="mb-3">&#8226; We take your privacy seriously and do not collect any personal information from our users.</p>            
            <h2 className="text-2xl fw-bold">Contact Us</h2>
            <p className="mb-3">&#8226; If you have any questions or feedback about [imageconvert.in], please contact us at [sameerchoudhary956036@gmail.com]. We are always happy to hear from you and will do our best to address any issues you may have.</p>            
            </div>
        </section>
        <Footer />
    </>)
}