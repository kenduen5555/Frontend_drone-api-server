const Header = ({ title,title1 }) => {
  return (
    <header className="bg-purple-600 text-white py-4 shadow-md mb-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <h1 className="text-2xl md:text-3xl font-bold">🚁 {title}</h1>
        <h2 className="text-lg md:text-xl mt-2 md:mt-0 font-medium">{title1}</h2>
      </div>
    </header>
  );
};

export default Header;
