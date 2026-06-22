export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-8">

      <h2 className="font-bold text-xl">
        METRO
      </h2>

      <div className="flex gap-8">

        <a href="#">Services</a>

        <a href="#">About</a>

        <a href="#">Contact</a>

      </div>

    </nav>
  );
}