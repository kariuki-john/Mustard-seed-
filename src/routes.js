export const routes = [
  {
    "name": "Home",
    "path": "/"
  },
  {
    "name": "About Us",
    "path": "/about-us"
  },
  {
    "name": "Welcome",
    "path": "/about-us/welcome"
  },
  {
    "name": "FAQs",
    "path": "/about-us/faqs"
  },
  {
    "name": "Our School",
    "path": "/our-school"
  },
  {
    "name": "Early Years",
    "path": "/our-school/early-years"
  },
  {
    "name": "Junior School",
    "path": "/our-school/junior-school"
  },
  {
    "name": "Senior School",
    "path": "/our-school/senior-school"
  },
  {
    "name": "Flex Boarding",
    "path": "/our-school/flex-boarding"
  },
  {
    "name": "Transport",
    "path": "/our-school/transport"
  },
  {
    "name": "Calendar",
    "path": "/our-school/calendar"
  },
  {
    "name": "Job Board",
    "path": "/our-school/job-board"
  },
  {
    "name": "Admissions",
    "path": "/admissions"
  },
  {
    "name": "School Fees",
    "path": "/admissions/school-fees"
  },
  {
    "name": "Student Application Form",
    "path": "/admissions/application"
  },
  {
    "name": "Gallery",
    "path": "/gallery"
  },
  {
    "name": "News",
    "path": "/news"
  },
  {
    "name": "Contact Us",
    "path": "/contact-us"
  },
  {
    "name": "Policies",
    "path": "/policies"
  }
];
export const urlFor = name => routes.find(r => r.name === name)?.path || "/";
