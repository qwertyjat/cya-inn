import Header from '../components/Header.jsx';
import Hero from '../components/Hero.jsx';
import BookingBar from '../components/BookingBar.jsx';
import About from '../components/About.jsx';
import Rooms from '../components/Rooms.jsx';
import Facilities from '../components/Facilities.jsx';
import Restaurant from '../components/Restaurant.jsx';
import Gallery from '../components/Gallery.jsx';
import Testimonials from '../components/Testimonials.jsx';
import Blog from '../components/Blog.jsx';
import Location from '../components/Location.jsx';
import Contact from '../components/Contact.jsx';
import Reservation from '../components/Reservation.jsx';
import Footer from '../components/Footer.jsx';
import FloatingButtons from '../components/FloatingButtons.jsx';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BookingBar />
        <About />
        <Rooms />
        <Facilities />
        <Restaurant />
        <Gallery />
        <Testimonials />
        <Blog />
        <Location />
        <Contact />
        <Reservation />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
