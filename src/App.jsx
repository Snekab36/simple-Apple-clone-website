import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans">
      <Nav />
      <Hero />
      <Section 
        title="MacBook Air"
        subtitle="Supercharged by M3 chip."
        image="https://www.apple.com/v/macbook-pro-14-and-16/e/images/overview/hero/hero_intro_endframe__e6khcva4hkeq_large.jpg"
        />
      
      
      <Section 
        title="Apple Watch Series 10"
        subtitle="Thinner, lighter, more powerful."
        image="https://www.apple.com/newsroom/images/2023/09/apple-introduces-the-advanced-new-apple-watch-series-9/article/Apple-Watch-S9-hero-230912_Full-Bleed-Image.jpg.large_2x.jpg"
        theme="dark"
      />
      <Footer />
    </div>
  );
}
