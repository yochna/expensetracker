import { NavLink } from "react-router-dom";

const Sidebar = ({isOpen,closeSidebar}) => {
  const menuItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Transactions", path: "/transactions" },
    { name: "Budget Planner", path: "/budget-planner" },
    { name: "Analytics", path: "/analytics" },
    { name: "Settings", path: "/settings" },
  ];
  return (
   <>
   <div className={`sidebar-overlay ${isOpen?"show":""}` }
   onClick={closeSidebar}
   />
    <aside className={`sidebar ${isOpen?"open":""}`}>
      <h2 className="logo">SpendWise</h2>
      <nav>
        <ul>
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={closeSidebar}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
    </>
  );
};

export default Sidebar;
