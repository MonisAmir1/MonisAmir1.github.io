import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" title="About Me" reading>
      <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
        <p>
          👋🏻 Hi, I'm Muhammad Monis! I am a Data Analyst and Business
          Intelligence Analyst who enjoys transforming complex data into
          actionable business insights that help organizations make smarter
          decisions.
        </p>
        <p>
          I believe that great analytics goes beyond building dashboards or
          reporting numbers, it's about understanding the business behind the
          data, asking the right questions, uncovering meaningful patterns, and
          turning those insights into practical recommendations that create real
          value.
        </p>
        <p>
          I also enjoy solving business challenges by ⚡ <strong>automating</strong> ⚡ manual
          processes, reducing repetitive effort, and helping organizations save
          time and money.
        </p>
      </div>
    </Section>
  );
}
