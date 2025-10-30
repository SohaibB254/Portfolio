import React from 'react'
import frontend from '../../assets/images/illustrations/frontend.png'
import backend from '../../assets/images/illustrations/backend.png'
import uiux from '../../assets/images/illustrations/uiux.png'

const Services = () => {
    let services = [
        {id:1,title:'Frontend',detail:'I build fast, accessible, and intuitive user experiences that bring your vision to life. My focus is on creating clean, maintainable code that performs flawlessly on any device.Pixel-Perfect Interfaces: Translating complex UI/UX designs into responsive, interactive code that matches the brief perfectly.Modern Frameworks: Leveraging the power of modern JavaScript libraries and frameworks (like React, Vue, or Svelte) to build fast, scalable, and dynamic single-page applications.Performance Optimization: Focusing on fast load times, efficient rendering, and smooth animations to keep users engaged and reduce bounce rates.Accessibility (a11y): Ensuring applications are compliant with WCAG and WAI-ARIA standards, making your product usable and inclusive for everyone.Cross-Browser Compatibility: Rigorously testing and debugging to ensure a consistent, flawless experience across all major browsers and devices.',img: frontend},
        {id:2,title:'Backend',detail:'I architect the robust, scalable, and secure server-side logic that powers your application. My approach ensures your platform is reliable, efficient, and ready to grow with your user base.Robust API Design: Designing and implementing secure, high-performance RESTful or GraphQL APIs to manage data and power your frontend.Database Architecture: Managing complex data models with both SQL (e.g., PostgreSQL) and NoSQL (e.g., MongoDB) databases, optimized for speed and integrity.Security & Authentication: Implementing ironclad security measures, including data encryption, secure authentication (e.g., JWT, OAuth), and authorization logic to protect your users and data.Scalable Infrastructure: Building scalable microservices and deploying applications on cloud platforms (like AWS, Azure, or Google Cloud) that can handle high traffic.System Efficiency: Writing clean, efficient server-side code (in languages like Node.js, Python, or Go) that minimizes server costs and maximizes speed.',img: backend},
        {id:3,title:'UI/UX Design',detail:'I design intuitive, engaging, and beautiful interfaces by putting the user at the center of every decision. My process is built on research and empathy to solve real-world problems.User-Centered Research: Conducting user interviews, surveys, and competitive analysis to understand user needs, pain points, and business goals.Information Architecture: Creating logical user flows, sitemaps, and low-fidelity wireframes to build an intuitive and easy-to-navigate product structure.High-Fidelity Prototyping: Crafting pixel-perfect, visually appealing mockups and interactive prototypes (in tools like Figma or Sketch) that you can test and feel.Design Systems: Building and maintaining comprehensive design systems to ensure brand consistency, streamline development, and create a cohesive user experience.Usability Testing: Iteratively testing designs with real users to gather feedback, identify friction points, and refine the product until its a delight to use.',img: uiux},
    ]
  return (
    <div className='flex flex-col items-center mt-8 pt-8 gap-16  px-8 lg:px-24'>
      <h1 className='md:text-4xl text-2xl  font-bold text-(--textLight) font-dm'>Why Choose Me?</h1>
      <div className='flex flex-col gap-8 lg:gap-24 '>
        {/* Service */}
        {
            services.map((s,idx) =>{
                let isOdd = s.id%2 === 0;
                return (
                     <div key={idx}  className={`flex  ${isOdd ?'flex-row-reverse ':''} lg:gap-24 gap-8 justify-between items-center lg:items-start `}>
        <div className='lg:w-[350px] w-[250px] h-[200px]  lg:h-[300px] object-cover  hidden md:block overflow-hidden rounded-md ' id="image">
            <img className='w-full h-full hover:grayscale-0 transition-all duration-200 grayscale-100' src={s.img} alt="" />
        </div>
        <div className='flex flex-col  gap-2 flex-1' id="text">
            <h1 className='md:text-2xl text-xl text-(--textLight) font-dm font-bold'>{s.title}</h1>
            <p className='text-(--textSec) text-sm xl:text-base font-inter'>{s.detail}</p>
        </div>
          </div>
                )
            })
        }

      </div>
    </div>
  )
}

export default Services
