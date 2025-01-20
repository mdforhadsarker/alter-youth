import React from "react";
import TeacherCard from "../../src/components/TeacherCard";

const Teachers = () => {
  return (
    <div className="mt-16 max-w-screen-xl mx-auto px-4 ">
      {/* Responsive grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <TeacherCard
          image="/images/headteacher.jpg"
          title="Are you a teacher? Get your students listed on the platform."
          subtitle="Download the school app"
          footer="Only for Government Primary Schools in Bangladesh"
        />
        <TeacherCard
          image="/images/person.jpg"
          title="You can be anywhere in the world"
          subtitle="See all scholarship"
          footer=""
        />
        <TeacherCard
          image="/images/applicant.jpg"
          title="While students get closer to their dreams"
          subtitle="See all graduates"
          footer=""
        />
      </div>
    </div>
  );
};

export default Teachers;
