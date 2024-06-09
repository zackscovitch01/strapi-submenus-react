import { FaTimes } from "react-icons/fa";
import sublinks from "./data";
import { useGlobalContext } from "./context";
const Sidebar = () => {
  const { isSidebar, closeSidebar } = useGlobalContext();
  return (
    <aside className="sidebar">
      <div className="sidebar-container">
        <button className="close-btn">
          <FaTimes />
        </button>
      </div>
      <div className="sidebar-links">
        {sublinks.map((sublink) => {
          const { pageId, page, links } = sublink;
          return (
            <article key={pageId}>
              <h4>{page}</h4>
              <div className="sidebar-sublinks">
                {links.map((link) => {
                  const { url, icon, label, id } = link;
                  return (
                    <a key={id} href={url}>
                      {icon}
                      {label}
                    </a>
                  );
                })}
              </div>
            </article>
          );
        })}
      </div>
    </aside>
  );
};
export default Sidebar;
