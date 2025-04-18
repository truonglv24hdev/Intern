import React, { useState } from "react";
 import "./TestimonialSection.css";
 import BrochureTab from "./BrochureTab";
 import RetirementPlansTab from "./RetirementPlansTab";
 import TestimoniesTab from "./TestimoniesTab";
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { faImage } from "@fortawesome/free-regular-svg-icons";
 
 const TestimonialSection = () => {
   const [activeTab, setActiveTab] = useState("brochures");
 
   const renderTabContent = () => {
     switch (activeTab) {
       case "brochures":
         return <BrochureTab />;
       case "retirement":
         return <RetirementPlansTab />;
       case "testimonies":
         return <TestimoniesTab />;
       default:
         return <BrochureTab />;
     }
   };
 
   return (
     <section className="testimonial-section" id="testimonial">
       <div className="testimonial-container">
         <div className="testimonial-header">
           <h2 className="testimonial-title">TESTIMONIAL</h2>
           <p className="testimonial-description">
             We provide a variety of products tailored to your financial needs.
           </p>
         </div>
 
         <div className="testimonial-tabs">
           <div className={`tab-item ${activeTab === "icon" ? "active" : ""}`}>
             <span className="tab-icon">
               <FontAwesomeIcon icon={faImage} />
             </span>
           </div>
           <div
             className={`tab-item ${activeTab === "brochures" ? "active" : ""}`}
             onClick={() => setActiveTab("brochures")}
           >
             Brochures
           </div>
           <div
             className={`tab-item ${activeTab === "retirement" ? "active" : ""}`}
             onClick={() => setActiveTab("retirement")}
           >
             Retirement Plans
           </div>
           <div
             className={`tab-item ${activeTab === "testimonies" ? "active" : ""}`}
             onClick={() => setActiveTab("testimonies")}
           >
             Testimonies
           </div>
         </div>
 
         <div className="tab-content">{renderTabContent()}</div>
       </div>
     </section>
   );
 };
 
 export default TestimonialSection;