"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Photo {
  src: string;
  alt: string;
}

const photos = [
  { src: "/img/img-6.jpeg", alt: "Photo 1" },
  { src: "/img/img-7.jpeg", alt: "Photo 2" },
  { src: "/img/img-8.jpeg", alt: "Photo 3" },
  { src: "/img/img-9.jpeg", alt: "Photo 4" },
  { src: "/img/img-11.jpeg", alt: "Photo 5" },
  { src: "/img/img-12.jpeg", alt: "Photo 6" },
  { src: "/img/img-13.jpeg", alt: "Photo 7" },
  { src: "/img/gallery-2.jpg", alt: "Photo 8" },
];

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [enlargedPhoto, setEnlargedPhoto] = useState<Photo | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const togglePhotoSize = (photo: Photo) => {
    if (enlargedPhoto?.src === photo.src) {
      setEnlargedPhoto(null);
    } else {
      setEnlargedPhoto(photo);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black text-white flex items-center justify-center p-4 h-[80px] text-lg font-bold gap-8 drop-shadow-lg "
        style={{ fontFamily: "var(--font-outfit)" }}
      >
        <Link
          href="https://adandyou.host/spasa/web/"
          className="hover:text-[#faea4f] transition-colors duration-300"
        >
          Reserva
        </Link>
        <div className="relative mb-[-80px] w-[120px] h-[120px] bg-white flex justify-center items-center rounded-[50%]">
          <Image
            src="/img/logo-1.png"
            alt="Logo"
            width={100}
            height={50}
            className="mx-4 w-[80px]"
          />
        </div>
        <Link
          href="#"
          className="hover:text-[#faea4f] transition-colors duration-300"
        >
          Facturación
        </Link>
      </motion.nav>
      <div className="mx-auto pt-32">
        <motion.section
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mx-auto flex flex-col items-center justify-center gap-4 px-4 pb-16"
        >
          <motion.div
            className="w-full sm:w-1/2 mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <Image
              src="/img/auto.png"
              alt="Banner"
              width={1920}
              height={400}
              layout="responsive"
            />
          </motion.div>
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="text-2xl sm:text-4xl font-bold text-center"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            ¡Reserva tu auto ahora!
          </motion.h2>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="text-base sm:text-lg text-center"
          >
            Disfruta de un servicio seguro y eficiente con Aerotaxi
          </motion.p>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.1, duration: 1 }}
          >
            <Link
              href="https://adandyou.host/spasa/web/"
              className="bg-black text-white p-2 font-bold width-[200px] sm:min-w-[200px] text-center mb-10 transition-colors duration-300 hover:text-[#faea4f] border-2 border-black"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Reservar
            </Link>
          </motion.div>
        </motion.section>
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-[#faea4f] text-white py-32 !text-black"
        >
          <h2
            className="text-5xl font-bold text-center mb-8"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Nosotros
          </h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
            {[
              {
                icon: "👤",
                title: "Conductores Bilingües",
                description:
                  "Obtén consejos y recomendaciones de conductores locales que hablan inglés sobre los mejores lugares y atracciones en CDMX.",
              },
              {
                icon: "🛡️",
                title: "Seguridad en el Viaje",
                description:
                  "Vehículos modernos, limpios y cómodos que se desinfectan después de cada viaje para tu tranquilidad.",
              },
              {
                icon: "📞",
                title: "Soporte 24/7",
                description:
                  "Disfruta de asistencia las 24 horas con cambios en la reserva o cualquier pregunta sobre tu taxi desde el Aeropuerto de la Ciudad de México.",
              },
              {
                icon: "📖",
                title: "Viaje Personalizado",
                description:
                  "Accede a una página especial de viaje después de reservar para explorar recorridos por la ciudad, actividades y los mejores lugares para cenar en CDMX.",
              },
              {
                icon: "⏰",
                title: "Monitoreo de Vuelos",
                description:
                  "Los conductores monitorearán tu número de vuelo y estarán esperándote cuando llegues al Aeropuerto de MEX.",
              },
              {
                icon: "💸",
                title: "Cancelación Flexible",
                description:
                  "¿Necesitas cancelar tu viaje? ¡No te preocupes! Cancela o cambia tu reserva sin costo si tus planes cambian.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.3, duration: 0.8 }}
                className="text-center"
              >
                <div className="text-4xl mb-4">
                  <span
                    role="img"
                    aria-label={item.title.toLowerCase().replace(" ", "-")}
                  >
                    {item.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-white text-black py-16"
        >
          <h2
            className="text-5xl font-bold text-center mb-8"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Máxima comodidad y seguridad en tu traslado
          </h2>
          <p className="text-center mb-16 text-lg">
            <span className="inline-block bg-black text-white px-4 py-1 rounded-full">
              Autos confiables, conductores profesionales
            </span>
          </p>
          <div className="max-w-6xl mx-auto flex justify-center items-center gap-8">
            {[
              {
                name: "Auto Compacto",
                passengers: "Hasta 4 pasajeros",
                img: "/img/car.jpg",
              },
              {
                name: "SUV",
                passengers: "Hasta 6 pasajeros",
                img: "/img/car.jpg",
              },
              {
                name: "Van",
                passengers: "Hasta 8 pasajeros",
                img: "/img/car.jpg",
              },
              {
                name: "Autobús",
                passengers: "Hasta 16 pasajeros",
                img: "/img/car.jpg",
              },
            ].map((vehicle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.3, duration: 0.8 }}
                className="text-center"
              >
                <Image
                  src={vehicle.img}
                  alt={vehicle.name}
                  width={200}
                  height={100}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{vehicle.name}</h3>
                <p>{vehicle.passengers}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
        <motion.section
          id="galeria"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-stone-100 pt-24 pb-16 text-black"
        >
          <h2
            className="text-5xl font-bold text-center mb-8"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Galería
          </h2>
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {photos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`cursor-pointer transition-transform duration-300 ${
                  enlargedPhoto?.src === photo.src ? "transform scale-150" : ""
                }`}
                onClick={() => togglePhotoSize(photo)}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.section>
        <motion.section
          id="reviews"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-white text-black py-16"
        >
          <h2
            className="text-5xl font-bold text-center mb-8"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Opiniones de nuestros clientes
          </h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
            {[
              {
                name: "Carlos Pérez",
                review: "Excelente servicio, muy puntual y profesional.",
              },
              {
                name: "María Gómez",
                review:
                  "Los conductores son muy amables y el vehículo estaba impecable.",
              },
              {
                name: "Jorge Ramírez",
                review:
                  "Me sentí muy seguro durante todo el viaje. ¡Recomendado!",
              },
              {
                name: "Ana López",
                review:
                  "La atención al cliente es de primera, siempre dispuestos a ayudar.",
              },
              {
                name: "Luis Fernández",
                review: "Reservar fue muy fácil y el servicio fue excelente.",
              },
              {
                name: "Sofía Martínez",
                review:
                  "El conductor fue muy profesional y el viaje fue muy cómodo.",
              },
            ].map((review, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.3, duration: 0.8 }}
                className="text-center border p-4 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold mb-2">{review.name}</h3>
                <div className="text-yellow-500">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <span key={i} role="img" aria-label="star">
                        ⭐
                      </span>
                    ))}
                </div>
                <p className="mb-4">{review.review}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
      <Link
        href="https://wa.me/tu-numero-de-telefono"
        target="_blank"
        className="fixed bottom-5 right-5 p-3 rounded-full shadow-lg"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <Image src="/img/wa-icon.png" alt="WhatsApp" width={50} height={50} />
      </Link>
      <footer className="bg-black text-white py-16">
        <div className="container mx-auto flex justify-center">
          <div className="flex space-x-8">
            <Link
              href="https://www.instagram.com/allisonband/"
              target="_blank"
              className="flex justify-center items-center gap-2"
            >
              <div className="text-white hover:text-[#faea4f]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  width="20px"
                  height="20px"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
              </div>
            </Link>
            <Link href="https://wa.me/1234567890" passHref>
              <div className="text-white hover:text-[#faea4f]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                </svg>
              </div>
            </Link>
            <Link href="mailto:correo@example.com" passHref>
              <div className="text-white hover:text-[#faea4f]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                </svg>
              </div>
            </Link>
            <Link href="tel:+1234567890" passHref>
              <div className="text-white hover:text-[#faea4f]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
        <div className="text-center mt-4 text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Aerotaxi. Todos los derechos
          reservados.
        </div>
      </footer>
    </>
  );
}
