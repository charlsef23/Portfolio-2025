import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (_jsx("nav", { className: "navbar", children: _jsxs("ul", { children: [_jsx("li", { children: _jsx(Link, { to: "/", children: "Home" }) }), _jsx("li", { children: _jsx(Link, { to: "/about", children: "About" }) }), _jsx("li", { children: _jsx(Link, { to: "/projects", children: "Projects" }) }), _jsx("li", { children: _jsx(Link, { to: "/contact", children: "Contact" }) })] }) }));
};
export default Navbar;
