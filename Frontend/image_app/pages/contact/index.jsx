import Footer from "../../components/footer";
import Navbar from "../../components/Navbar";


export default function Contact()
{
    return(<>
        <Navbar />
        <section className="mx-auto container py-2 mb-8 ">
            <h1 className="text-center text-4xl fw-semibold m-8">Contact Us</h1>
            
            <div className="container text-sm  fw-semibold lg:w-1/2">      
            <hr />
            <h2 className="text-2xl fw-bold mt-2">Introduction</h2>
            <p className="mb-3">&#8226; Welcome to the imageconvert.in contact page. We are here to help you with any questions or issues you may have while using our image converter.</p>
            <h2 className="text-2xl fw-bold">How to Contact Us</h2>
            <p className="mb-3">&#8226; If you have any questions or feedback about imageconvert.in, please contact us at sameerchoudhary956036@gmail.com. We will do our best to respond to your inquiry as soon as possible.</p>                        
            <h2 className="text-2xl fw-bold">Thank You</h2>
            <p className="mb-3">&#8226; Thank you for choosing imageconvert.in for your image conversion needs. We appreciate your business and look forward to serving you in the future.</p>            
            <h2 className="text-2xl fw-bold">Contact Us</h2>
            <p className="mb-3">&#8226; If you have any questions or feedback about imageconvert.in, please contact us at sameerchoudhary956036@gmail.com. We are always happy to hear from you and will do our best to address any issues you may have.</p>            
            </div>
        </section>
        <Footer />
    </>)
}