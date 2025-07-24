import Languages from "./Languages";
import DataScience from "./DataScience";
import DataViz from "./DataViz";
import WebCloud from "./WebCloud";
import APIs from "./APIs";
import Tools from "./Tools";
import SoftSkills from "./SoftSkills";
import LanguagesSpoken from "./LanguagesSpoken";

export default function Skills() {
  return (
    <section id="skills" style={{ marginBottom: 64 }}>
      <h2 style={{ color: '#b38b00' }}>Skills</h2>
      <div style={{ display: 'grid', gap: 32, gridTemplateColumns: '1fr' }}>
        <Languages />
        <DataScience />
        <DataViz />
        <WebCloud />
        <APIs />
        <Tools />
        <SoftSkills />
        <LanguagesSpoken />
      </div>
    </section>
  );
} 