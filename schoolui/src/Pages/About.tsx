import React from "react";
import Navbar from "../Components/Navbar/Navbar";

const About: React.FC = () => {
  return (
    <>
      <Navbar />

      {/* 🔥 Offset content from fixed navbar */}
      <div className="pt-27 bg-gray-50 text-gray-800">
        {/* Hero */}
        <section className="bg-indigo-600 py-20 text-center text-white">
          <h1 className="text-4xl font-bold md:text-5xl">
            About Our School
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg">
            Empowering students with quality education and modern
            digital school management.
          </p>
        </section>

        {/* Who We Are */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="mb-4 text-3xl font-bold text-indigo-600">
            Who We Are
          </h2>
          <p className="leading-7 text-gray-700">
            Our school is dedicated to academic excellence, innovation,
            and holistic development. Through our advanced School
            Management System, we connect students, teachers, parents,
            and administrators seamlessly.
          </p>
        </section>

        {/* Vision & Mission */}
        <section className="bg-white py-16">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2">
            <div className="rounded-xl bg-indigo-50 p-6 shadow">
              <h3 className="mb-2 text-xl font-semibold text-indigo-600">
                Our Vision
              </h3>
              <p>
                To be a leading educational institution fostering
                innovation and lifelong learning.
              </p>
            </div>

            <div className="rounded-xl bg-indigo-50 p-6 shadow">
              <h3 className="mb-2 text-xl font-semibold text-indigo-600">
                Our Mission
              </h3>
              <p>
                Deliver quality education supported by modern digital
                solutions and strong values.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="mb-10 text-center text-3xl font-bold text-indigo-600">
            Why Choose Us
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              "Experienced Faculty",
              "Smart Classrooms",
              "Student-Centered Learning",
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-xl bg-white p-6 text-center shadow hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-indigo-600">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="bg-indigo-50 py-16">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 text-center md:grid-cols-3">
            <div>
              <h3 className="text-4xl font-bold text-indigo-600">15+</h3>
              <p>Years of Excellence</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-indigo-600">5000+</h3>
              <p>Students</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-indigo-600">200+</h3>
              <p>Faculty Members</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
