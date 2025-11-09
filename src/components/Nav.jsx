export default function Nav() {
  const navItems = ["Store", "Mac", "iPad", "iPhone", "Watch", "AirPods", "TV & Home", "Entertainment", "Accessories", "Support"];
  
  return (
    <nav className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3 text-sm">
        <div className="text-white font-bold">  <img src="image.png"alt="apple"className="w-5 object-contain"></img></div>
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item} className="hover:text-white cursor-pointer">{item}</li>
          ))}
        </ul>
        <div className="flex space-x-4">
          <span>🔍</span>
          <span>🛒</span>
        </div>
      </div>
    </nav>
  );
}
