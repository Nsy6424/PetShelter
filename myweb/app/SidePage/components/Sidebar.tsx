// components/Sidebar.tsx

interface IPropsSidebar {
  setPermissionAdmin: React.Dispatch<React.SetStateAction<string>>;
}
const Sidebar = ({ setPermissionAdmin }: IPropsSidebar) => {
  return (
    <div className="bg-gray-800 text-white h-screen w-1/6 p-4 ">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      <ul className="menu menu-horizontal  items-center  text-xl ">
        <li className="mb-2 cursor-pointer hover:text-red-400">
          <a onClick={() => setPermissionAdmin("dashboard")}>Dashboard</a>
        </li>
        <li className="mb-2 cursor-pointer hover:text-red-400">
          <a onClick={() => setPermissionAdmin("users")}>Users</a>
        </li>
        <li className="mb-2 cursor-pointer hover:text-red-400">
          <a onClick={() => setPermissionAdmin("thongke")}>Thống kê</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
