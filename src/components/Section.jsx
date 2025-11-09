export default function Section({ title, subtitle, image, theme = "light" }) {
  const textColor = theme === "dark" ? "text-white" : "text-black";
  const bgColor = theme === "dark" ? "bg-black" : "bg-white";

  return (
    <section className={`${bgColor} ${textColor} py-20 flex flex-col items-center text-center`}>
      <h2 className="text-4xl font-semibold mb-3">{title}</h2>
      <p className="text-lg mb-8">{subtitle}</p>
      <img src={image} alt={title} className="w-3/4 object-cover" />
    </section>
  );
}
