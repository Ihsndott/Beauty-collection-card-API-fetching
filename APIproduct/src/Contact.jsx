import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"
import { faPhone} from "@fortawesome/free-solid-svg-icons"
import {faLocationDot} from "@fortawesome/free-solid-svg-icons"

function Contact (){
    return(
       <section className="text-[#8b3f8e] bg-black mt-20 border border-2 md:mx-[400px] px-[40px]  py-[80px]  rounded-2xl">
      <h2 className="text-4xl font-bold mb-6 md:ml-40 mt-4">Contact Us</h2>
       <h2 className="text-xl font-bold mb-6 text-justify  mt-4 text-white/80">We'd love to hear from you! Whether you have questions about our products, need assistance with your order, or simply want beauty advice, our team is here to help. Reach out to us through the contact form, email, or phone, and we'll respond as quickly as possible. Your satisfaction is our priority, and we're committed to providing you with the best shopping experience.</h2>

      <div className="space-y-4 md:ml-32 mt-12 cursor-pointer">
        <div className="flex items-center gap-3  ">
          <FontAwesomeIcon icon={faEnvelope} className="text-pink-500" />
          <p>support@bookley.com</p>
        </div>

        <div className="flex items-center gap-3">
          <FontAwesomeIcon icon={faPhone} className="text-pink-500" />
          <p>+94 77 123 4567</p>
        </div>

        <div className="flex items-center gap-3 ">
          <FontAwesomeIcon icon={faLocationDot} className="text-pink-500 mb-4" />
          <p className="mb-4">Colombo, Sri Lanka</p>
        </div>
      </div>
    </section>
    );
}

export default Contact