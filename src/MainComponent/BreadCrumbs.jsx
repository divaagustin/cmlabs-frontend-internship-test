import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
export default function BreadCrumbs() {
  const location = useLocation();
  let lokasiTerkini = "";
  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      lokasiTerkini = +`/${crumb}`;

      return (
        <div className=" text-xl text-slate-400 py-12" key={crumb}>
          <Link to={lokasiTerkini}>{crumb}/</Link>
        </div>
      );
    });
  return <div className=" flex">{crumbs}</div>;
}
