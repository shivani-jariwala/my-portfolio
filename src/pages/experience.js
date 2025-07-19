import TimelineItem from "../components/atoms/TimelineItem";
import data from "../data/data.json";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";

const ExperiencePage = () => {
  const [experiences, setExperiences] = useState([]);
  const { isDark } = useTheme();

  useEffect(() => {
    // Set experiences data after component mounts
    setExperiences(data.experience || []);
  }, []);

  return (
    <>
      <Head>
        <title>{`Experience | ${data.personalInfo.name}`}</title>
        <meta
          name="description"
          content={`Professional experience of ${data.personalInfo.name}`}
        />
      </Head>
      <section className={`h-full py-10 px-6 overflow-auto backdrop-blur-sm font-mono tracking-tight ${
        isDark ? 'bg-dark-100/20' : 'bg-slate-100/20'
      }`}>
        <div className="container mx-auto">
          <h2 className={`text-3xl font-bold text-center mb-8 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Work <span className="text-accent-400">Experience</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {experiences.length > 0 ? (
              experiences.map((exp, index) => (
                <TimelineItem
                  key={index}
                  date={exp.date}
                  title={exp.title}
                  subtitle={exp.company}
                  isLast={index === experiences.length - 1}
                >
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </TimelineItem>
              ))
            ) : (
              <div className={`text-center ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}>
                Loading experience data...
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ExperiencePage;
