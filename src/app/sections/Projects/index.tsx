import ChessHelper from "./ChessHelper";
import CopilotExtension from "./CopilotExtension";
import GenderEmotionDetection from "./GenderEmotionDetection";
import LinkedInSentiment from "./LinkedInSentiment";
import RealEstatePrice from "./RealEstatePrice";

export default function Projects() {
  return (
    <section id="projects" style={{ marginBottom: 64 }}>
      <h2 style={{ color: '#b38b00' }}>Projects</h2>
      <div style={{ display: 'grid', gap: 32, gridTemplateColumns: '1fr' }}>
        <ChessHelper />
        <CopilotExtension />
        <GenderEmotionDetection />
        <LinkedInSentiment />
        <RealEstatePrice />
      </div>
    </section>
  );
} 