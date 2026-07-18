import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" title="About Me" reading>
      <div className="space-y-5 text-lg leading-relaxed text-foreground/90">
        <p className="text-muted-foreground italic">
          [About Me copy goes here — approximately 100–150 words focused on
          passion, business mindset, data-driven decision making, and career
          direction. Placeholder text will be replaced with your content.]
        </p>
        <p className="text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </Section>
  );
}
