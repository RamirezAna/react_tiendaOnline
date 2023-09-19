import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <ul>

                <li>
                <NavLink to="/">
                  Shopi
                </NavLink>
                </li>

                <li>
                <NavLink to="/">
                  All
                </NavLink>
                </li>

                <li>
                <NavLink to="/clothes">
                  Clothes
                </NavLink>
                </li>

                <li>
                <NavLink to="/furnitures">
                  Furnitures
                </NavLink>
                </li>

                <li>
                <NavLink to="/toys">
                  Toys
                </NavLink>
                </li>

                <li>
                <NavLink to="/others">
                  Others
                </NavLink>
                </li>

            </ul>
        </nav>
    )
}




