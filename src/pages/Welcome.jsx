import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";
export default function Welcome() {
  return (
    <PageLayout title="Welcome">
      <div className="py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <span className="eyebrow">MUSTARD SEED INTERNATIONAL SCHOOLS</span>
        <h2>Welcome to our school</h2>
        <p className="page-lead">
          We are delighted to introduce you to a community where learners are
          encouraged to explore, contribute and thrive.
        </p>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-1 grid-rows-1">
          <div className="placeholder-card">
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/eGKRXhTf0nw"
              title="School Introduction Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              style={{
                borderRadius: "12px",
                border: "none",
              }}
            />
          </div>
          <div className="placeholder-card">
            <h3>Welcome to Our School</h3>
            <p>
              What a pleasure to have you on your virtual visit of Mustard Seed
              International Schools [MSIS]! This website has information about
              our schools’ operations and cherished values. You will get to read
              about what we have to offer before you get the opportunity to
              undertake the highly recommended in-person visit to our campus
              which grants you a much better feel of who we are; more so because
              the warmness and vibrancies of our immersion into our invaluable
              educational agenda come to live through a one-on-one interaction.
              Our various Sections invite you to visit their pages and learn why
              Mustard Seed International schools continue to be an international
              Centre of excellence in the holistic upbringing of the child. As a
              school accredited by Cambridge Assessment International Education
              (CAIE), we are confident that this is the best place to study. The
              MSIS Community is a vibrant setup with a beehive of activities and
              an extremely warm family that remains an attraction to many who
              treasure education for its true significance. We take great pride
              in ourselves as a caring home of quality. Here education is
              undertaken as a serious business, yet full of fun and memorable
              experiences. As the Head of Center, I must say that we are such an
              imposing center of distinction. MSIS is a great place to work and
              study. Mainly so because we remain steadfast in our endeavours and
              faithful to our values as the key ties that bind us in our ever
              progressive journey to greater heights of success. With well
              trained and supported staff of professionals, committed and
              engaged parents and disciplined students that embrace a cultured
              approach to school life, we are a well-knit fabric of ever ready
              educators and learners. Being around such people is my true
              inspiration as a leader who realizes that such are folks who
              deserve nothing but the best in management and leadership. It then
              follows that I have no option to that of always being on my toes.
              Sydney J. Harris said, “The whole purpose of education is to turn
              mirrors into windows.” At MSIS we strive to open up the eyes and
              minds of our learners to the good opportunities that life has to
              offer through a rich and broad based curriculum and activities.
              Here's hoping that you will have a fun-filled virtual journey
              through our school! <br></br>
              Respectfully,
              <br></br>
              Mr. Abraham Lubanga<br></br>
              Head of Center, MSIS
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
