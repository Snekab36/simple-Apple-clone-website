export default function Hero() {
  return (
    <section className="bg-zinc-900 text-white h-[90vh] flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl font-semibold mb-4">iPhone 17 Pro</h1>
      <p className="text-xl mb-6">Titanium. So strong. So light. So Pro.</p>
      <div className="flex gap-4">
        <a href="#" className="text-blue-500 hover:underline">Learn more</a>
        <a href="#" className="text-blue-500 hover:underline">Buy</a>
      </div>
      <img src="pic-1.jpg" 
           alt="iPhone 17 Pro" 
           className="mt-6 w-3/4 object-contain"/>
    </section>
  );
}
