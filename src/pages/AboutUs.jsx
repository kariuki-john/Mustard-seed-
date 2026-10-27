import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
export default function AboutUs() { return <PageLayout title="About Us"><div className="page-feature"><span className="eyebrow">MUSTARD SEED INTERNATIONAL SCHOOL</span><h2>A community built around every learner</h2><p className="page-lead">Discover our vision, values, learning culture, and the people who make our school a welcoming place to learn.</p><div className="placeholder-card"><div><h3>Our approach</h3><p>We bring together academic learning, character development, creativity, and a supportive school community.</p></div></div><div className="page-actions"><Link to="/about-us/welcome">Welcome</Link><Link to="/about-us/faqs">FAQs</Link></div></div></PageLayout>; }
