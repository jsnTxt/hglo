import "../App.css"
import Event from '../components/Event';
import Modal from '../components/Modal';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";

export default function Events() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [tab, setTab] = useState("current")

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/data/events.json')
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((error) => console.error('Error loading data', error))

  }, [])
  const today = new Date();

  const currentEvents = data.filter((event) => {
    const eventDate = new Date(`${event.month} ${event.day} , ${new Date().getFullYear()}`);
    return eventDate >= today;
  })

  const pastEvents = data.filter((event) => {
    const eventDate = new Date(`${event.month} ${event.day} , ${new Date().getFullYear()}`);
    return eventDate < today;
  })

  const eventsToShow = tab === "current" ? currentEvents : pastEvents

  return (
    <>
      {/* Wave divider */}
      <div className="relative
                left-0 w-full overflow-hidden leading-0"
      >
        <img
          className="block w-full h-auto transform -scale-x-[100%]"
          src="wavy-border-top.svg"
        />
      </div>

      {/* flex flex-col justify-center items-center bg-blue */}
      <div
        className=" w-screen pt-20 pb-25
          flex flex-col gap-15 justify-center items-center
          bg-[linear-gradient(#F9FBFB,_#CFE0D8)]"
        id="events"
      >

        <div
          className="w-[70%] md:w-[50%]
            text-base md:text-lg xl:text-xl text-center"
        >
          <h1 className="text-3xl font-bold mb-5">Events</h1>
          <h3>Come join us and socialize + have fun at one of our events!</h3>
          <h3>They're open to all prospective students.</h3>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => setTab("current")}
            className={`px-4 py-2 rounded-full font-semibold transition cursor-pointer
      ${tab === "current" ? "bg-hglo-main-500 text-white" : "bg-gray-200"}`}
          >
            Current Events
          </button>
          <button
            onClick={() => setTab("past")}
            className={`px-4 py-2 rounded-full font-semibold transition cursor-pointer
      ${tab === "past" ? "bg-hglo-main-500 text-white" : "bg-gray-200"}`}
          >
            Past Events
          </button>
        </div>

        {/* Events Cards with Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, x: tab === "current" ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: tab === "current" ? -50 : 50 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="w-[90%] sm:w-[75%]
              grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 
              gap-6 lg:gap-10 justify-center"
            id="event-cards"
          >

            {/* Events cards */}
            {eventsToShow.map((eventCard, index) => (
              <Event
                key={index}
                event={eventCard}
                click={setSelectedEvent}
                open={setIsOpen}
              />

            ))}
          </motion.div>
        </AnimatePresence>

        <Modal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          event={selectedEvent}
        />
      </div>

      <div className="relative
                left-0 w-full overflow-hidden leading-0"
      >
        <img
          className="block w-full h-auto transform "
          src="wavy-border-bottom.svg"
        />
      </div>
    </>
  );
}