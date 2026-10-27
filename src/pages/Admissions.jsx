import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
export default function Admissions() { return <PageLayout title="Admissions"><div className="page-feature"><span className="eyebrow">MUSTARD SEED INTERNATIONAL SCHOOL</span><h2>Your journey starts here</h2><p className="page-lead">Explore how to join our school, review school fees and begin an application.</p><div className="placeholder-card"><div><h3>How to apply</h3><p>Review programme options, contact admissions, and complete the student application enquiry form.</p></div></div><div className="page-actions"><Link to="/admissions/school-fees">View School Fees</Link><Link to="/admissions/application">Apply Now</Link></div></div></PageLayout>; }
