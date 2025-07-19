import Image from "next/image";
import Button from "@/components/ui/Button";
import ScrollFadeIn from "@/components/ScrollFadeIn";

export default function ContactUs() {
  return (
    <main className="bg-white min-h-screen py-12">
      {/* Contact Section */}
      <ScrollFadeIn>
        <section className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col items-center mb-10">
            <span className="flex items-center border border-gray-200 text-black text-sm font-medium px-4 py-1 rounded-full">
              <Image src="/icon.svg" alt="Logo" width={32} height={32} />
              Contact Us
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium text-center mb-2 mt-4 text-black">Contact Us to Start<br />Your Transformation</h1>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Left: Image & Location */}
            <ScrollFadeIn yOffset={30}>
              <div className="flex flex-col items-center">
                <div className="w-full h-48 relative mb-4 rounded-xl overflow-hidden">
                  <Image src="/contact-us.jpg" alt="Logo" width={280} height={400} />
                </div>
                <div className=" items-center w-full border border-gray-200 rounded-xl  p-4">
                  <span className="mr-3">
                    <Image src="/location-icon.svg" alt="Logo" width={32} height={32} />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-black font-normal pb-3">Location</div>
                    <div className="text-xs text-gray-400">1234 Maple Street,<br /> Springfield</div>
                  </div>
                </div>
              </div>
            </ScrollFadeIn>
            {/* Center: Form */}
            <ScrollFadeIn yOffset={30} delay={0.1}>
              <form className="flex flex-col gap-4">
                <label htmlFor="" className="text-black font-normal text-lg">Name</label>
                <input type="text" placeholder="Name" className="border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none text-gray-600 mb-4" required />
                <label htmlFor="" className="text-black font-normal text-lg">Email</label>
                <input type="email" placeholder="Email" className="border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none  text-gray-600 mb-4" required />
                <label htmlFor="" className="text-black font-normal text-lg">Message</label>
                <textarea placeholder="Your Message" className="border border-gray-200 rounded-lg px-4 py-2 text-sm h-24 resize-none focus:outline-none text-gray-600 mb-4" required />
                <Button
                  type="submit"
                  variant="black"
                  size="md"
                  className="flex items-center gap-2 w-full sm:w-auto justify-center"
                >
                  <Image src="/Rocket Launch.svg" alt="Book a call" width={20} height={20} />
                  Send a Message
                </Button>
              </form>
            </ScrollFadeIn>
            {/* Right: Contact Info */}
            <div className="flex flex-col gap-4">
              <ScrollFadeIn yOffset={30} delay={0.2}>
                <div className=" rounded-lg p-4 border border-gray-200 rounded-3xl">
                  <Image src="/email-icon.svg" alt="Book a call" width={40} height={40} />
                  <div className="text-sm font-medium text-black text-xl mb-2">Email</div>
                  <div className="text-xs text-gray-400 text-base font-nedium">Office: <a href=" UIWiki2024@.net" className="underline">info@pixelbloom.net</a></div>
                </div>
              </ScrollFadeIn>
              <ScrollFadeIn yOffset={30} delay={0.3}>
                <div className=" rounded-lg p-4 border border-gray-200 mb-14">
                  <Image src="/phone-icon.svg" alt="Book a call" width={40} height={40} />
                  <div className="text-sm font-medium text-black text-xl mb-2">Phone</div>
                  <div className="text-xs text-gray-500">Office: +123 456 7890</div>
                </div>
              </ScrollFadeIn>
              <ScrollFadeIn yOffset={30} delay={0.4}>
                <div className=" rounded-3xl px-4 py-8 border border-gray-200  flex items-center">
                  <span className="mr-2">
                    <Image src="/phone-icon.svg" alt="Book a call" width={40} height={40} />
                  </span>
                  <span className="text-sm  text-xl text-black font-medium ">Live chat</span>
                </div>
              </ScrollFadeIn>
            </div>
          </div>
        </section>
      </ScrollFadeIn>
      {/* Offices Section */}
      <ScrollFadeIn>
        <section>
          <div className="flex flex-col items-center mb-10">
            <span className=" flex items-center border border-gray-200 text-black text-sm font-medium px-4 py-1 rounded-full">
              <Image src="/icon.svg" alt="Logo" width={32} height={32} />
              Office
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium text-center">Come and Visit us!</h2>
          </div>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            {/* Office 1 */}
            <ScrollFadeIn yOffset={30}>
              <div className="bg-black text-white rounded-xl p-4 flex items-center gap-4 w-80 -lg">
                <div className="w-16 h-16 relative rounded-lg overflow-hidden">
                  <Image src="/services-card-9.jpg" alt="Santa Ana" fill className="object-cover" />
                </div>
                <div>
                  <div className="font-semibold">Santa Ana</div>
                  <div className="text-xs">Westminster Rd, Santa Ana, Illinois 98563</div>
                </div>
              </div>
            </ScrollFadeIn>
            {/* Office 2 */}
            <ScrollFadeIn yOffset={30} delay={0.1}>
              <div className="bg-black text-white rounded-xl p-4 flex items-center gap-4 w-80 -lg">
                <div className="w-16 h-16 relative rounded-lg overflow-hidden">
                  <Image src="/services-card-10.jpg" alt="Preston Rd. Inglewood" fill className="object-cover" />
                </div>
                <div>
                  <div className="font-semibold">Preston Rd. Inglewood</div>
                  <div className="text-xs">4803 Preston Rd, Inglewood, Maine 04563</div>
                </div>
              </div>
            </ScrollFadeIn>
          </div>
          {/* Optional: World map background */}
          <Image src="/earth.svg" alt="World Map" width={1800} height={200} className="opacity-30" />
        </section>
      </ScrollFadeIn>
    </main>
  );
} 