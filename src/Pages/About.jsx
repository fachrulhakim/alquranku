import React from "react";
import Contact from "../Components/ContactUs";

const about = () => {
  return (
    <div id="about">
      <section id="tentang-kami" className="pt-3">
        <h2>About Us</h2>
        <p>
          Aplikasi Al-Qur'an Ku dibangun untuk menyelesaikan Ujian Tengah Semester
          pada Mata Kuliah Pemrograman Web.{" "}
        </p>
      </section>
      <section>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Contact />
      </section>
    </div>
  );
};

export default about;
