// components/Sidebar.tsx
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white h-screen w-1/4 p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      <ul>
        <li className="mb-2">
          <Link href="/">Dashboard</Link>
        </li>
        <li className="mb-2">
          <Link href="/adminuser">Users</Link>
        </li>
        <li className="mb-2">
          <Link href="/Chart/barchart">Thống kê</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
