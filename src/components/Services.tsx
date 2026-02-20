"use client";

import { motion } from "framer-motion";

const services = [
  { name: "THE SIGNATURE CUT", price: "FROM 850 SEK", duration: "60 MIN", desc: "A bespoke experience tailored to your unique features." },
  { name: "COLOR ALCHEMY", price: "FROM 1400 SEK", duration: "120+ MIN", desc: "Dimensional, natural hues crafted with premium color." },
  { name: "BALAYAGE RITUAL", price: "FROM 2100 SEK", duration: "150+ MIN", desc: "Hand-painted highlights for sun-kissed perfection." },
  { name: "THE REVIVAL TREATMENT", price: "FROM 600 SEK", duration: "30 MIN", desc: "Deep conditioning and scalp therapy." },
];

export default function Services() {
  return (
    <section className="py-24 px-5 md:px-10 lg:px-20 max-w-5xl mx-auto bg-background text-foreground" id="rituals">
      <div className="mb-16 md:text-center text-left">
        <h2 className="font-serif text-3xl md:text-4xl tracking-wide font-light mb-4">OUR RITUALS</h2>
        <p className="font-sans text-sm md:text-base opacity-70 tracking-wide max-w-xl mx-auto">
          Every service is a transformative journey for your hair and spirit.
        </p>
      </div>

      <div className="flex flex-col border-t-[0.5px] border-foreground/10">
        {services.map((service, index) => (
          <motion.div
            key={service.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileTap={{ backgroundColor: "rgba(0,0,0,0.02)" }}
            className="group py-8 md:py-10 border-b-[0.5px] border-foreground/10 flex flex-col md:flex-row md:items-center justify-between cursor-pointer transition-colors hover:bg-black/5 px-4 md:px-8 -mx-4 md:mx-0"
          >
            <div className="md:w-2/3 pr-4">
              <h3 className="font-sans text-base md:text-lg font-medium tracking-wide mb-2 transition-colors group-hover:text-accent">
                {service.name}
              </h3>
              <p className="text-sm opacity-60 font-serif italic mb-4 md:mb-0">
                {service.desc}
              </p>
            </div>
            <div className="flex items-center justify-between md:w-1/3 md:justify-end text-sm md:text-base">
              <span className="opacity-50 font-sans tracking-widest text-xs md:mr-8">
                {service.duration}
              </span>
              <span className="font-sans font-medium tracking-wider text-xs md:text-sm">
                {service.price}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
