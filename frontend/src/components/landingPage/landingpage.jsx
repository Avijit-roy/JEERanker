import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Header from './header';
import Footer from './footer';
import { useAuthStore } from "../../store/authStore";
import { useNavigate } from "react-router-dom";


function LandingPage() {

  const navigate = useNavigate();
  const { isAuthenticated } = useAuthStore();
  const styles = {
    btnPrimary: {
      backgroundColor: 'blue',
      color: 'white',
    },
    btnSecondary: {
      backgroundColor: 'transparent',
      color: 'purple',
      border: '2px solid purple',
    },
    alertBtnClose: {
      position: 'absolute',
      top: '0.3rem',
      right: '1rem',
      padding: '0.5rem',
    },
    statCard: {
      padding: '3rem 1.5rem',
      marginBottom: '1rem',
    },
    statCardImg: {
      height: '4rem',
    },
    statCardNumber: {
      fontSize: '2.25rem',
    },
    statCardLabel: {
      fontSize: '1rem',
    },
  };

  const handleCardClick = () => {
    navigate(isAuthenticated ? "/dashboard" : "/login");
  };

  const testimonials = [
    {
      text: 'This platform has truly transformed my learning experience. The notes are top-notch and easy to understand!',
      name: 'Amit Sharma',
      role: 'JEE Aspirant',
      img: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      text: 'The handwritten notes are a lifesaver. They cover everything in detail and are very well-structured.',
      name: 'Priya Verma',
      role: 'NEET Aspirant',
      img: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      text: 'The structured study materials made it so much easier to revise important concepts before exams.',
      name: 'Rahul Gupta',
      role: 'GATE Aspirant',
      img: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
  ];

  return (
    <>
      <div
        className="alert alert-success alert-dismissible fade show text-center mb-0 py-2"
        role="alert"
      >
        🎉 50+ students are in the top 100 rank in JEE 2025. What are you waiting for?
        <button
          style={styles.alertBtnClose}
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        />
      </div>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-10">
        <div className="flex flex-wrap items-center justify-between">
          {/* Hero Content */}
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Getting <span className="text-blue-600">Quality</span> Mock Test Is Now More{' '}
              <span className="text-blue-600">Easy</span>
            </h1>
            <p className="text-gray-600 mb-8">
              Access premium mock tests, daily quizzes, and expert doubt-solving sessions
              designed by top JEE rankers. Aim for a top rank and take a step closer to your
              IIT dream: Your path to success starts here.
            </p>
            <div className="flex gap-4">
              <a href="#" style={styles.btnPrimary} className="btn-primary px-6 py-3 rounded-lg">
                Get Started
              </a>
              <a
                href="#"
                style={styles.btnSecondary}
                className="btn-secondary px-6 py-3 rounded-lg hover:bg-purple-600 hover:text-white transition-colors duration-500"
              >
                Rankers in 2024
              </a>
            </div>
          </div>
          {/* Hero Image */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <img
              src="https://raw.githubusercontent.com/Avijit-roy/Images/refs/heads/main/students-study-clipart-xl.png"
              alt="Student studying"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
      {/* Statistical Section */}
      <section className="bg-purple-100 py-6">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Total Questions */}
          <div style={styles.statCard} className="text-center bg-white p-6 rounded-lg shadow-md stat-card">
            <img
              style={styles.statCardImg}
              src="https://banner2.cleanpng.com/lnd/20240523/ic/ax7xnxu4f.webp"
              alt="Total Questions Logo"
              className="h-16 mx-auto mb-4"
            />
            <div style={styles.statCardNumber} className="text-blue-600 text-4xl font-bold">6248</div>
            <div style={styles.statCardLabel} className="text-gray-600 mt-2">TOTAL QUESTIONS</div>
          </div>
          {/* Students */}
          <div style={styles.statCard} className="text-center bg-white p-6 rounded-lg shadow-md stat-card">
            <img
              style={styles.statCardImg}
              src="https://cdn-icons-png.flaticon.com/512/219/219986.png"
              alt="Students Logo"
              className="h-16 mx-auto mb-4"
            />
            <div style={styles.statCardNumber} className="text-pink-600 text-4xl font-bold">3500</div>
            <div style={styles.statCardLabel} className="text-gray-600 mt-2">STUDENTS</div>
          </div>
        </div>
      </section>
      {/* Explore Handwritten Notes Section */}
      <section className="container mt-10">
        <h1 className="mt-5 text-3xl font-bold text-gray-800 text-center">
          Explore Handwritten Notes
        </h1>
        <p className="text-gray-600 mb-6 text-center">
          Browse top class notes written by toppers for you.
        </p>
        <div className="row">
          {/* First Card */}
          <div className="col-md-6 mb-4 cursor-pointer" onClick={handleCardClick}>
            <div className="note-card shadow-lg rounded-lg p-3 d-flex align-items-center">
              <img
                src="https://jecacracker.in/index/images/computer.png"
                alt="Computer Fundamental Icon"
                className="img-fluid mr-3"
                style={{ width: 50, height: 50 }}
              />
              <div>
                <div className="note-card-title text-xl font-semibold text-primary">
                  Today&apos;s Test
                </div>
                <div className="note-card-subtitle text-sm text-secondary">
                  Handwritten Notes
                </div>
              </div>
            </div>
          </div>
          {/* Second Card */}
          <div className="col-md-6 mb-4 cursor-pointer" onClick={handleCardClick}>
            <div className="note-card shadow-lg rounded-lg p-3 d-flex align-items-center">
              <img
                src="https://jecacracker.in/index/images/computer.png"
                alt="Oops Icon"
                className="img-fluid mr-3"
                style={{ width: 50, height: 50 }}
              />
              <div>
                <div className="note-card-title text-xl font-semibold text-primary">
                  Check your Rank
                </div>
                <div className="note-card-subtitle text-sm text-secondary">
                  Handwritten Notes
                </div>
              </div>
            </div>
          </div>
          {/* Third Card */}
          <div className="col-md-6 mb-4 cursor-pointer" onClick={handleCardClick}>
            <div className="note-card shadow-lg rounded-lg p-3 d-flex align-items-center">
              <img
                src="https://jecacracker.in/index/images/computer.png"
                alt="Operating System Icon"
                className="img-fluid mr-3"
                style={{ width: 50, height: 50 }}
              />
              <div>
                <div className="note-card-title text-xl font-semibold text-primary">
                  Personal Feedback
                </div>
                <div className="note-card-subtitle text-sm text-secondary">
                  Handwritten Notes
                </div>
              </div>
            </div>
          </div>
          {/* Fourth Card */}
          <div className="col-md-6 mb-4 cursor-pointer" onClick={handleCardClick}>
            <div className="note-card shadow-lg rounded-lg p-3 d-flex align-items-center">
              <img
                src="https://jecacracker.in/index/images/computer.png"
                alt="Machine Learning Icon"
                className="img-fluid mr-3"
                style={{ width: 50, height: 50 }}
              />
              <div>
                <div className="note-card-title text-xl font-semibold text-primary">
                  Engage with others
                </div>
                <div className="note-card-subtitle text-sm text-secondary">
                  Handwritten Notes
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          What our students are saying about us
        </h2>
        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation
          pagination={{ clickable: true }}
          className="mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="bg-white shadow-lg rounded-lg p-6">
              <p className="text-gray-700 text-lg">{testimonial.text}</p>
              <div className="mt-4 flex items-center">
                <img
                  src={testimonial.img}
                  className="w-12 h-12 rounded-full"
                  alt={testimonial.name}
                />
                <div className="ml-3">
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <span className="text-sm text-gray-500">{testimonial.role}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      {/* Footer Section */}
      <Footer />
    </>
  );
}

export default LandingPage;