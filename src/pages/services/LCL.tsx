import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Ship, CheckCircle, Clock, DollarSign, Globe } from "lucide-react";
import { getCurrentCountryFromPath } from "@/services/countryDetection";
const ScrollToTop = () => {
  const {
    pathname
  } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [pathname]);
  return null;
};
const LCL = () => {
  const location = useLocation();
  const currentCountry = getCurrentCountryFromPath(location.pathname);
  const features = [{
    icon: CheckCircle,
    title: "Extremely Reliable & Prompt",
    description: "All your LCL cargo is reliably transported through our seamlessly connected network across the globe, and you are assured that your cargo will arrive on time."
  }, {
    icon: DollarSign,
    title: "Flexible and Economical",
    description: "LCL services enable customers to ship small orders at a lower cost and in lower volumes compared to air freight."
  }, {
    icon: Globe,
    title: "Global Network",
    description: "Our LCL network offers unmatched connectivity and cadence across major shipping routes."
  }];
  return <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      <ScrollToTop />
      <Navigation />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-slate-50"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }} className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
                <span className="text-kargon-red">LCL</span> Services
              </h1>
              <p className="text-xl max-w-3xl mx-auto leading-relaxed text-gray-700">
                Less Container Load shipping solutions for optimal convenience and cost efficiency
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              {/* Text Section */}
              <motion.div initial={{
              opacity: 0,
              x: -50
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.8,
              delay: 0.2
            }} viewport={{
              once: true
            }} className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold mb-4 text-kargon-blue">Efficient LCL Solutions</h2>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Amass Freight, Dubai is one of the leading logistics providers in the region providing Less-Than Container load (LCL) for the ultimate convenience of our customers to help in transporting their products to any location required.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    LCL is an ocean freight transportation service that is often preferred by businesses that don't have enough cargo to fill an entire shipping container. LCL is the best service that can be available in such scenario instead of paying for an entire container with much of the unused space, shippers can now consolidate goods with other consignees to fully utilize the available space and thereby reduce the overall costs.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    It is our assurance to our customers that there is no need to worry about deadlines when using our ocean freight services, as we are committed to getting your cargo to its desired destination on time safely.
                  </p>
                </div>
              </motion.div>

              {/* Image Section */}
              <motion.div initial={{
              opacity: 0,
              x: 50
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.8,
              delay: 0.4
            }} viewport={{
              once: true
            }} className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img alt="LCL Shipping" loading="lazy" className="w-full h-96 object-cover" src="/lcl1.JPG" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="absolute -bottom-6 -right-6 p-4 rounded-xl shadow-lg bg-kargon-red">
                  <Ship className="w-8 h-8 text-white" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }} className="text-center mb-16">
              <h2 className="text-4xl font-bold text-kargon-blue mb-6">Why Choose Our LCL Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our LCL network offers unmatched connectivity and cadence across major shipping routes
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: index * 0.1
            }} viewport={{
              once: true
            }} className="rounded-2xl p-8 text-center bg-slate-100">
                  <div className="w-16 h-16 bg-kargon-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-kargon-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-kargon-blue mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-kargon-blue text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Ship with LCL?</h2>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                Contact us today for competitive rates and reliable LCL shipping solutions
              </p>
              <Link to="/contact" className="inline-flex items-center bg-white text-kargon-blue px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors duration-300">
                Get Quote Now
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        
      </main>

      <Footer />
    </div>;
};
export default LCL;