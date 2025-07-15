import SkillCard from "../components/atoms/SkillCard";
import data from "../data/data.json";
import Head from "next/head";

const SkillsPage = () => {
  const skillsData = data.skills;

  return (
    <>
      <Head>
        <title>{`Skills | ${data.personalInfo.name}`}</title>
        <meta
          name="description"
          content={`Skills and expertise of ${data.personalInfo.name}`}
        />
      </Head>
      <section className="h-full py-10 px-6 overflow-auto font-mono tracking-tight">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            My Technical <span className="text-accent-400">Skills</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skillsData).map(([category, skills]) => (
              <SkillCard key={category} title={category} skills={skills} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillsPage;
