import { useState } from "react";
import NavLink from "../components/atoms/NavLink";
import SkillCard from "../components/atoms/SkillCard";
import TimelineItem from "../components/atoms/TimelineItem";
import Icon from "../components/atoms/Icon";

export default function TestAtoms() {
  const [activeTab, setActiveTab] = useState("nav");

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Atom Components Test
      </h1>

      <div className="flex justify-center gap-6 mb-10">
        <NavLink
          isActive={activeTab === "nav"}
          onClick={() => setActiveTab("nav")}
        >
          NavLink
        </NavLink>
        <NavLink
          isActive={activeTab === "skill"}
          onClick={() => setActiveTab("skill")}
        >
          SkillCard
        </NavLink>
        <NavLink
          isActive={activeTab === "timeline"}
          onClick={() => setActiveTab("timeline")}
        >
          TimelineItem
        </NavLink>
        <NavLink
          isActive={activeTab === "icon"}
          onClick={() => setActiveTab("icon")}
        >
          Icon
        </NavLink>
      </div>

      <div className="max-w-3xl mx-auto">
        {activeTab === "nav" && (
          <div className="bg-slate-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">NavLink Component</h2>
            <p className="mb-6 text-slate-300">
              A navigation link that shows an active state.
            </p>

            <div className="flex gap-4 p-4 bg-slate-700 rounded-lg">
              <NavLink isActive={true}>Active Link</NavLink>
              <NavLink isActive={false}>Inactive Link</NavLink>
            </div>
          </div>
        )}

        {activeTab === "skill" && (
          <div className="bg-slate-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">SkillCard Component</h2>
            <p className="mb-6 text-slate-300">
              A card that displays a group of skills.
            </p>

            <SkillCard
              title="Frontend"
              skills={[
                "React",
                "Next.js",
                "Tailwind CSS",
                "JavaScript",
                "TypeScript",
              ]}
            />
          </div>
        )}

        {activeTab === "timeline" && (
          <div className="bg-slate-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">TimelineItem Component</h2>
            <p className="mb-6 text-slate-300">
              An item in a timeline showing an event.
            </p>

            <div className="space-y-8">
              <TimelineItem
                date="2021 - Present"
                title="Senior Developer"
                subtitle="Tech Company"
                isLast={false}
              >
                <p>
                  Led development of key features and mentored junior
                  developers.
                </p>
              </TimelineItem>

              <TimelineItem
                date="2018 - 2021"
                title="Developer"
                subtitle="Startup Inc."
                isLast={true}
              >
                <p>
                  Built scalable web applications using modern technologies.
                </p>
              </TimelineItem>
            </div>
          </div>
        )}

        {activeTab === "icon" && (
          <div className="bg-slate-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Icon Component</h2>
            <p className="mb-6 text-slate-300">A wrapper for icon elements.</p>

            <div className="flex gap-4">
              <Icon className="bg-slate-700 hover:bg-indigo-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </Icon>
              <Icon className="bg-slate-700 hover:bg-indigo-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </Icon>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
