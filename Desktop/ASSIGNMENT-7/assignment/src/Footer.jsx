const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 px-8 py-12">
      <div className="grid md:grid-cols-5 gap-8 mb-8">
        <div className="md:col-span-1">
          <h3 className="text-white font-semibold mb-3 text-sm">CS — Ticket System</h3>
          <p className="text-xs leading-relaxed">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem
            ipsum has been the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3 text-sm">Company</h4>
          <ul className="space-y-2 text-xs">
            <li>About Us</li>
            <li>Our Mission</li>
            <li>Contact Sales</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3 text-sm">Services</h4>
          <ul className="space-y-2 text-xs">
            <li>Products &amp; Services</li>
            <li>Customer Stories</li>
            <li>Download Apps</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3 text-sm">Information</h4>
          <ul className="space-y-2 text-xs">
            <li>Privacy Policy</li>
            <li>Terms &amp; Conditions</li>
            <li>Join Us</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3 text-sm">Social Links</h4>
          <ul className="space-y-2 text-xs">
            <li>✕ @CS — Ticket System</li>
            <li>@CS — Ticket System</li>
            <li>support@cst.com</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
        © 2025 CS — Ticket System. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
