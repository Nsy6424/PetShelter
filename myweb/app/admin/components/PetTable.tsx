import { useEffect, useState } from "react";

interface Pet {
  id: number;
  name: string;
  breed: string;
  color: string;
  age: string;
  gender: string;
  code: string;
  vaccination: string;
  personality: string;
  image: string;
}

const PetTable = () => {
  const [pets, setPets] = useState<Pet[]>([]);
  const [formData, setFormData] = useState<Pet>({
    id: 0,
    name: "",
    breed: "",
    color: "",
    age: "",
    gender: "",
    code: "",
    vaccination: "",
    personality: "",
    image: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [showForm, setShowForm] = useState(false); // Quản lý việc hiển thị modal

  useEffect(() => {
    fetchPets();
  }, []);

  const fetchPets = async () => {
    try {
      const response = await fetch("/api/pets");
      if (!response.ok) {
        throw new Error("Failed to fetch pets");
      }

      const data = await response.json();
      setPets(data.pets || []);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/pets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorDetails = await response.text();
        throw new Error(
          `Failed to add pet. Status: ${response.status} - ${errorDetails}`
        );
      }

      const data = await response.json();
      console.log("Pet added successfully:", data);

      // Close the modal and reset the form
      setShowForm(false);
      setFormData({
        id: 0,
        name: "",
        breed: "",
        color: "",
        age: "",
        gender: "",
        code: "",
        vaccination: "",
        personality: "",
        image: "",
      });

      fetchPets(); // Reload the pets list
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  return (
    <div className="w-full">
      <div className="flex-1 p-4">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold text-sky-950">Quản lý thú cưng</h1>
          <button
            className="btn mb-5"
            onClick={() => setShowForm(true)} // Mở modal khi nhấn vào nút
          >
            Thêm mới thú cưng
          </button>

          {/* Modal */}
          {showForm && (
            <dialog open className="modal">
              <div className="modal-box">
                <form onSubmit={handleSubmit}>
                  <button
                    type="button"
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    onClick={() => setShowForm(false)} // Đóng modal
                  >
                    ✕
                  </button>

                  <h2 className="text-3xl mb-4 font-bold text-red-600">
                    Thêm thú cưng mới
                  </h2>

                  {/* Form fields */}
                  <div className="mb-4">
                    <label htmlFor="name">Tên:</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="input border border-gray-950 ml-16 "
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="breed">Giống:</label>
                    <input
                      type="text"
                      id="breed"
                      name="breed"
                      value={formData.breed}
                      onChange={handleChange}
                      className="input border border-gray-950 ml-14"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="color">Màu sắc:</label>
                    <select
                      id="color"
                      name="color"
                      value={formData.color}
                      onChange={handleChange}
                      className="input border border-gray-950 ml-11"
                      required
                    >
                      <option value="">Chọn màu sắc</option>
                      <option value="Red">Đỏ</option>
                      <option value="Blue">Xanh dương</option>
                      <option value="Green">Xanh lá</option>
                      <option value="Yellow">Vàng</option>
                      <option value="Black">Đen</option>
                      <option value="White">Trắng</option>
                      {/* Add more colors here if needed */}
                    </select>
                  </div>
                  {/* <div className="mb-4">
                    <label htmlFor="age">Tuổi:</label>
                    <input
                      type="text"
                      id="age"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      className="input border border-gray-950 ml-15"
                    />
                  </div> */}
                  <div className="mb-4">
                    <label htmlFor="gender">Giới tính:</label>
                    <input
                      type="text"
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="input border border-gray-950 ml-11"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="personality">Tính cách:</label>
                    <input
                      type="text"
                      id="personality"
                      name="personality"
                      value={formData.personality}
                      onChange={handleChange}
                      className="input border border-gray-950 ml-9"
                    />
                  </div>
                  {/* <div className="mb-4">
                    <label htmlFor="code">Code:</label>
                    <input
                      type="text"
                      id="code"
                      name="code"
                      value={formData.code}
                      onChange={handleChange}
                      className="input border border-gray-950 ml-18"
                    />
                  </div> */}
                  <div className="mb-4">
                    <label htmlFor="vaccination">Vaccination:</label>
                    <input
                      type="text"
                      id="vaccination"
                      name="vaccination"
                      value={formData.vaccination}
                      onChange={handleChange}
                      className="input border border-gray-950 ml-6"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="image">URL Hình ảnh:</label>
                    <input
                      type="text"
                      id="image"
                      name="image"
                      value={formData.image}
                      onChange={handleChange}
                      className="input border border-gray-950 ml-1"
                    />
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Thêm
                  </button>
                </form>
              </div>
            </dialog>
          )}
        </div>

        {/* Table */}
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Giống</th>
              <th className="border border-gray-300 p-2">Giới Tính</th>
              <th className="border border-gray-300 p-2">Tính Cách</th>
              <th className="border border-gray-300 p-2">Hình Ảnh</th>
            </tr>
          </thead>
          <tbody>
            {pets.map((pet) => (
              <tr key={pet.id}>
                <td className="border border-gray-300 p-2">{pet.name}</td>
                <td className="border border-gray-300 p-2">{pet.breed}</td>
                <td className="border border-gray-300 p-2">{pet.gender}</td>
                <td className="border border-gray-300 p-2">
                  {pet.personality}
                </td>
                <td className="border border-gray-300 p-2">
                  <div className="flex items-center">
                    <img src={pet.image} alt={pet.name} width="100" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PetTable;
