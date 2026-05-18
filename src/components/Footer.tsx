export default function Footer() {
  return (
    <footer className="relative bg-white text-brutal-black dark:bg-[#050505] dark:text-white flex flex-col items-center justify-center transition-colors duration-700">
      <div className="w-full flex justify-center items-center px-8 py-6 z-10 font-sans text-[10px] opacity-50 uppercase tracking-[0.2em] font-medium">
        <span>&copy; {new Date().getFullYear()} FEVRAL</span>
      </div>
    </footer>
  );
}
