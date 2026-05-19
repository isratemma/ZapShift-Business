import { MdOutlineMenu } from 'react-icons/md';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center">
      <h1 className="text-lg font-bold text-gray-900">CS — Ticket System</h1>

      <div className="md:flex hidden items-center gap-6">
        <a href="#" className="text-gray-600 text-sm hover:text-gray-900">Home</a>
        <a href="#" className="text-gray-600 text-sm hover:text-gray-900">FAQ</a>
        <a href="#" className="text-gray-600 text-sm hover:text-gray-900">Changelog</a>
        <a href="#" className="text-gray-600 text-sm hover:text-gray-900">Blog</a>
        <a href="#" className="text-gray-600 text-sm hover:text-gray-900">Download</a>
        <a href="#" className="text-gray-600 text-sm hover:text-gray-900">Contact</a>
        <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm px-4 py-2 rounded-lg font-medium">
          + New Ticket
        </button>
      </div>

      <div className="block md:hidden text-2xl">
        <MdOutlineMenu />
      </div>
    </nav>
  );
};

export default Navbar;
