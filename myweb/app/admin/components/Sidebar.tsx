// components/Sidebar.tsx

interface IPropsSidebar {
  setPermissionAdmin: React.Dispatch<React.SetStateAction<string>>;
}
const Sidebar = ({ setPermissionAdmin }: IPropsSidebar) => {
  return (
    <div className="bg-gray-800 text-white h-screen-full w-1/6 p-6 flex flex-col ">
      <h1 className="text-xl font-bold mb-4">Trang chủ Admin</h1>
      <ul className="menu menu-horizontal  items-center  text-xl ">
        <li className="mb-2 cursor-pointer hover:text-red-400">
          <a onClick={() => setPermissionAdmin("dashboard")}>Thống Kê</a>
        </li>

        <li className="mb-2 cursor-pointer hover:text-red-400">
          <a onClick={() => setPermissionAdmin("pet")}>Pets</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
