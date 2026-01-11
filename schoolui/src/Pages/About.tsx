import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

export const About: React.FC = () => {
  return (
    <>
      <div className="pt-27">
        <Navbar />
        <div className="text-gray-800">
          {/* Hero Section */}
          <section className=" bg-gradient-to-r from-black to-yellow-600 py-20 text-center text-white">
            <h1 className="text-4xl font-bold md:text-5xl">About Our School</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">
              Empowering young minds with knowledge, values, and innovation for
              a brighter future.
            </p>
          </section>

          {/* About School */}
          <section className="mx-auto max-w-6xl px-6 py-16">
            <h2 className="mb-6 text-3xl font-bold text-yellow-600">
              Who We Are
            </h2>
            <p className="leading-7 text-gray-700">
              Our school is a premier educational institution committed to
              academic excellence, character development, and holistic growth.
              With a strong foundation in values and innovation, we aim to
              nurture students into confident, responsible, and future-ready
              individuals.
            </p>
            <p className="mt-4 leading-7 text-gray-700">
              Through our advanced School Management System, we ensure seamless
              coordination between students, teachers, parents, and
              administrators, creating a transparent and efficient learning
              environment.
            </p>
          </section>

          {/* Vision & Mission */}
          <section className="bg-white py-16">
            <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2">
              <div className="rounded-xl bg-indigo-50 p-6 shadow">
                <h3 className="mb-3 text-xl font-semibold text-yellow-600">
                  Our Vision
                </h3>
                <p className="text-gray-700">
                  To be a center of excellence in education by fostering
                  innovation, inclusivity, and lifelong learning, empowering
                  students to thrive in a global society.
                </p>
              </div>

              <div className="rounded-xl bg-indigo-50 p-6 shadow">
                <h3 className="mb-3 text-xl font-semibold text-yellow-600">
                  Our Mission
                </h3>
                <p className="text-gray-700">
                  To provide high-quality education through modern teaching
                  methods, strong values, and digital solutions that support
                  students, teachers, and parents.
                </p>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="mx-auto max-w-6xl px-6 py-16">
            <h2 className="mb-10 text-center text-3xl font-bold text-yellow-600">
              Why Choose Our School
            </h2>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Experienced Faculty",
                  desc: "Highly qualified teachers dedicated to nurturing academic and personal excellence.",
                },
                {
                  title: "Smart Learning",
                  desc: "Digital classrooms, online assessments, and real-time progress tracking.",
                },
                {
                  title: "Student-Centric Approach",
                  desc: "Focus on individual growth, creativity, and critical thinking.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-white p-6 text-center shadow hover:shadow-lg transition"
                >
                  <h3 className="mb-2 text-lg font-semibold text-yellow-600">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* School Management Features */}
          <section className="bg-indigo-50 py-16">
            <div className="mx-auto max-w-6xl px-6">
              <h2 className="mb-10 text-center text-3xl font-bold text-yellow-600">
                Our School Management System
              </h2>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {[
                  "Student & Staff Management",
                  "Attendance & Timetable",
                  "Online Exams & Results",
                  "Fees & Finance Tracking",
                  "Parent-Teacher Communication",
                  "Reports & Analytics",
                  "Secure Data Management",
                  "Mobile-Friendly Access",
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="rounded-lg bg-white p-4 text-center shadow"
                  >
                    <p className="font-medium text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Achievements */}
          <section className="mx-auto max-w-6xl px-6 py-16">
            <h2 className="mb-10 text-center text-3xl font-bold text-yellow-600">
              Our Achievements
            </h2>

            <div className="grid gap-8 md:grid-cols-3 text-center">
              <div>
                <h3 className="text-4xl font-bold text-yellow-600">15+</h3>
                <p className="mt-2 text-gray-600">Years of Excellence</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-yellow-600">5,000+</h3>
                <p className="mt-2 text-gray-600">Students Educated</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-yellow-600">200+</h3>
                <p className="mt-2 text-gray-600">Qualified Staff</p>
              </div>
            </div>
          </section>

          {/* Leadership Message */}
          <section className="bg-white py-16">
            <div className="mx-auto max-w-4xl px-6 text-center">
              <h2 className="mb-4 text-3xl font-bold text-yellow-600">
                Message from the Principal
              </h2>
              <p className="leading-7 text-gray-700">
                “Education is not just about academics; it’s about shaping
                character, values, and confidence. Our goal is to provide an
                environment where every child can explore their potential and
                grow into a responsible global citizen.”
              </p>
            </div>
          </section>

          {/* Core Values */}
          <section className=" bg-gradient-to-r from-black to-yellow-600  py-12 text-center text-white">
            <h2 className="mb-6 text-3xl font-bold">Our Core Values</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                "Integrity",
                "Innovation",
                "Discipline",
                "Respect",
                "Excellence",
              ].map((value, index) => (
                <span
                  key={index}
                  className="rounded-full bg-white/20 px-6 py-2 font-medium"
                >
                  {value}
                </span>
              ))}
            </div>
          </section>
        </div>
        <hr className="text-white"/>
      </div>
      <Footer />
    </>
  );
};
