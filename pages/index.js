import Link from "../components/Link";
import Section from "../components/Section";
import Title from "../components/Title";
import About from "../partials/home/About";

export default function HomePage() {
  return (
    <Section>
      <Title as="h5" textColor="pink"> Alura Cases - Home</Title>
      <About />
    </Section>
  );
}
