import Footer from "../../components/footer";
import Navbar from "../../components/Navbar";


export default function Privacy_policy()
{
    return(<>
        <Navbar />
        <section className="mx-auto container py-2 mb-8 ">
            <h1 className="text-center text-4xl fw-semibold m-8">Privacy Policy</h1>
            
            <div className="container text-sm  fw-semibold lg:w-1/2">      
            <hr />
            <h2 className="text-2xl fw-bold mt-2">Introduction</h2>
            <p className="mb-3">&#8226; At imageconvert.in, we value your privacy and do not collect any personal information from our users. We do not use cookies or other tracking technologies on our website.</p>
            <h2 className="text-2xl fw-bold">Use of Our Services</h2>
            <p className="mb-2">&#8226; We do not require you to create an account or provide any personal information in order to use our image converter. You can simply visit our site and upload the images you want to convert without providing any information about yourself.</p>
            <p className="mb-3">&#8226; However, we do store information about the steps you take on our site, such as which pages you visit and which images you upload. We use this information to improve our services and to analyze user behavior. We do not link this information to any personal information that could identify you.</p>
            <h2 className="text-2xl fw-bold">Sharing of Information</h2>
            <p className="mb-3">&#8226; We do not share the images you upload with anyone, and they are automatically deleted from our servers after they are converted. We do not keep any record of the images or the conversion process.</p>            
            <h2 className="text-2xl fw-bold">Security</h2>
            <p className="mb-3">&#8226; We take reasonable steps to protect the security of our website and services, but we cannot guarantee the absolute security of your images. We encourage you to take steps to protect your own personal information and images, such as by using a secure connection and not sharing your images with others.</p>
            <h2 className="text-2xl fw-bold">Contact Us</h2>
            <p className="mb-3">&#8226; If you have any questions or concerns about our privacy policy, please contact us at sameerchoudhary956036. We are always happy to hear from you and will do our best to address any issues you may have.</p>
            <h2 className="text-2xl fw-bold">Acceptance of Privacy Policy</h2>
            <p className="mb-3">&#8226; By using our website and services, you agree to the terms of this privacy policy. We may update this policy from time to time, so please check back periodically to stay informed of any changes.</p>
            </div>
        </section>
        <Footer />
    </>)
}