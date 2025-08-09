import Offer from '../components/Offer'
import { motion } from "framer-motion";


export default function About() {

    const offers = [
        {
            icon: "../about/Commercial.svg",
            title: "outreach",
            pointOne: "Represent the Honors College at panels for prospective and incoming students",
            pointTwo: "Participate in letter writing campaigns to prospective students"
        },
        {
            icon: "../about/Users.svg",
            title: "community building",
            pointOne: "Host memorable, engaging social events",
            pointTwo: "Foster friendships and connections within the Honors Global Challenges & Solutions community"
        },
        {
            icon: "../about/Star.svg",
            title: "exclusive perks",
            pointOne: "Enjoy free coffee credit during finals week at Starbucks in STAMP",
            pointTwo: "Attend events with provided snacks and drinks, courtesy of the Honors College"
        }
    ]


    return (
        <div className="bg-white relative" id="about">
            <h1 className="text-center text-3xl font-bold pt-30">About Us</h1>

            <div className="h-full bg-white">

                <motion.img
                    src="/about/half-blob.svg"
                    className="absolute w-35 left-[10%] -top-5 transform lg:w-55 lg:left-[15%] md:w-50 md:left-[10%] sm:w-40 sm:left-[10%]"
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
                    viewport={{ once: true, amount: 0 }}
                />

                <motion.img
                    src="/about/array.svg"
                    className="absolute -left-10 top-115 w-40 sm:w-45 md:w-50 lg:-left-5 lg:w-60"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
                    viewport={{ once: true }}
                />

                <motion.img
                    src="/about/half-ring.svg"
                    className="absolute w-10 -right-0 sm:w-15 md:w-20 lg:w-30"
                    initial={{ scale: 0.0 }}
                    whileInView={{ scale: [0, 1.2, 1] }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
                    viewport={{ once: true }}
                />

                <motion.img
                    src="/about/waves.svg"
                    className="absolute w-30 bottom-120 -right-10 sm:w-25 md:w-40 lg:w-40 lg:bottom-40"
                    initial={{ x: 50 }}
                    whileInView={{ x: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    viewport={{ once: true }}
                />

                <motion.img
                    src="/about/half-circle.svg"
                    className="absolute transform rotate-180 -bottom-5 md:-bottom-10 lg:-bottom-15 left-10 w-30 sm:w-50 md:left-30 md:w-50 lg:w-60 lg:left-90"
                    initial={{ scale: 0.3 }}
                    whileInView={{ scale: [0.3, 1.2, 1] }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true }}
                />


                <p className="text-center w-[70%] md:w-[50%] m-auto mt-10 md:text-lg xl:text-xl">
                    We are a vibrant community of students from the Global Challenges and Solutions Honors Program at the University of Maryland, College Park. As a branch of the university-wide Honors Ambassadors Program, our mission is to advocate for the Honors College experience and inspire prospective students to join our dynamic academic community.
                </p>
                <h3 className="text-center font-bold text-3xl m-auto mt-35">What We Offer</h3>

                <div className="flex flex-col lg:flex-row justify-center items-center mt-20 pb-20 lg:pb-45 xl:pb-80 lg:gap-x-15 xl:gap-x-25 transform scale-95">
                    {
                        offers.map((offer, index) => (
                            index == 1 ?
                                <Offer
                                    key={index}
                                    elem={offer}
                                    offset="top"
                                    cardClassName="bg-gradient-to-br from-[#689d8b] to-[#82b4c7]"
                                />
                                :
                                <Offer
                                    key={index}
                                    elem={offer}
                                    offset="bottom"
                                    cardClassName="bg-gradient-to-br from-[#689d8b] to-[#82b4c7]"
                                />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
