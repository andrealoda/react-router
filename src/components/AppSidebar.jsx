export default function Sidebar() {
  return (
    <div className="sidebar-fixed glass-card">
      <h4 className="px-3 py-3">Categorie</h4>

      <ul className="sidebar-menu">
        <li><a href="#">Novità</a></li>
        <li><a href="#">Donna</a></li>
        <li><a href="#">Uomo</a></li>
        <li><a href="#">Bambini</a></li>
        <li><a href="#">Accessori</a></li>
        <li><a href="#">Casa</a></li>
        <li><a href="#">Saldi</a></li>
      </ul>
    </div>
  );
}