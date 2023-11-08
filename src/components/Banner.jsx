import { Section } from "./common";

export default function Banner({
  height = 100,
  image,
  children,
  className = "",
}) {
  const styles = {
    backgroundImage: `url('${image}')`,
    minHeight: `${height}vh`,
  };

  return (
    <Section className={`hero `.concat(className).trim()} style={styles}>
      <div className="hero-overlay bg-opacity-70 bg-base-content"></div>
      <Section.Content className="hero-content text-center text-base-100">
        {children}
      </Section.Content>
    </Section>
  );
}
