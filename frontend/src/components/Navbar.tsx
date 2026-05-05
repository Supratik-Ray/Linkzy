function Navbar() {
  return (
    <nav className="navbar border-b px-8 py-4 flex items-center justify-between">
      <span className="text-neon-glow font-bold text-xl font-mono">Linkzy</span>
      <div className="flex items-center gap-4">
        {/* <a className="text-gray-muted hover:text-white-soft transition-colors">
          Home
        </a> */}
        <button className="btn-outline">Login</button>
        <button className="btn-neon">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;
