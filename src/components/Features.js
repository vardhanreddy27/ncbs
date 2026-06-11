import React from 'react';
import { TbDevices2 } from "react-icons/tb";
import { AiOutlineDashboard, AiOutlineTeam, AiOutlineQuestionCircle, AiOutlineBook } from 'react-icons/ai';
import { CgNotes, CgSmileMouthOpen } from 'react-icons/cg';
import { TbChartLine } from 'react-icons/tb';

const Card = ({ icon: Icon, text, iconColor }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4 m-3 border bg-white border-gray-300 rounded-2xl shadow-xl">
      <div style={{ backgroundColor: `${iconColor}` }} className="rounded-full w-14 h-14 flex items-center justify-center mb-4">
        <Icon size={25} color="black" />
      </div>
      <p className="text-sm">{text}</p>
    </div>
  );
};

function Features() {
  return (
    <div id="features" className="text-black w-full p-5 bg-[#fcfaf2]">
      <div className="col">
        <p className="text-[var(--brand-primary)]">VAKSIDDHI SEED APPROACH</p>
        <h1 className="font-bold text-4xl ">Key Features</h1>
        <p className="pt-2">
          Vaksiddhi uses the SEED philosophy to connect Socratic questioning, experiential learning, excellence, and discipline with AI-powered learning methods.
        </p>

        <div className="flex flex-wrap justify-center pt-5">
          <Card
            icon={TbDevices2}
            text="AI Smart Classes: Visual, interactive, and student-friendly learning."
            iconColor="#dfff0726"
          />
          <Card
            icon={CgNotes}
            text="Socratic Thinking: Children ask why and learn to reason clearly."
            iconColor="#ff4d4f2b"
          />
          <Card
            icon={TbChartLine}
            text="JEE & NEET Foundation: Specialized coaching from VI Standard onward."
            iconColor="#1987542b"
          />
          <Card
            icon={CgSmileMouthOpen}
            text="Personal Care: Dedicated support for hesitant learners."
            iconColor="#c7d2fe75"
          />
        </div>
        <div className="flex flex-wrap justify-center pt-5">
          <Card
            icon={AiOutlineDashboard}
            text="State Syllabus: Strong school fundamentals with CBSE affiliation in process."
            iconColor="#ffecb3"
          />
          <Card
            icon={AiOutlineTeam}
            text="Residential Facilities: Separate premium hostel care for boys and girls."
            iconColor="#b2ebf2"
          />
          <Card
            icon={AiOutlineQuestionCircle}
            text="Sports & Culture: Holistic development beyond academics."
            iconColor="#ffcdd2"
          />
          <Card
            icon={AiOutlineBook}
            text="Social Responsibility: Free education support for orphan children."
            iconColor="#ffd700"
          />
        </div>
   
      </div>
    </div>
  );
}

export default Features;
