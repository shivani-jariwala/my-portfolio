import TimelineItem from "../components/atoms/TimelineItem";
import data from "../data/data.json";
import Head from "next/head";
import { useEffect, useState } from "react";

const EducationPage = () => {
  const [educations, setEducations] = useState([]);

  useEffect(() => {
    // Set education data after component mounts
    setEducations(data.education || []);
  }, []);

  return (
    <>
      <Head>
        <title>{`Education | ${data.personalInfo.name}`}</title>
        <meta
          name="description"
          content={`Educational background of ${data.personalInfo.name}`}
        />
      </Head>
      <section className="h-full py-10 px-6 overflow-auto font-mono tracking-tight">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            My <span className="text-accent-400">Education</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {educations.length > 0 ? (
              educations.map((edu, index) => (
                <TimelineItem
                  key={index}
                  date={edu.date}
                  title={edu.degree}
                  subtitle={edu.institution}
                  isLast={index === educations.length - 1}
                >
                  <p className="text-sm">{edu.details}</p>
                </TimelineItem>
              ))
            ) : (
              <div className="text-center text-slate-400">
                Loading education data...
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default EducationPage;
