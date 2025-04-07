"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { initialPets } from "@/data/initialPets";
import Banner from "@/app/components/Banner";

interface Pet {
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

interface Filters {
  gender: string;
  age: string;
  vaccination: string;
  color: string;
}

const TimPet: React.FC = () => {
  const [pets, setPets] = useState<Pet[]>(initialPets);
  const [activeButton, setActiveButton] = useState("all");
  const [filters, setFilters] = useState<Filters>({
    gender: "",
    age: "",
    vaccination: "",
    color: "",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const petsPerPage = 6;

  useEffect(() => {
    const fetchPets = async () => {
      const response = await fetch("/api/pets");
      const data = await response.json();
      setPets(data);
    };

    fetchPets();
  }, []);

  const applyFilters = (petsToFilter: Pet[]) => {
    return petsToFilter.filter((pet) => {
      return (
        (filters.gender === "" || pet.gender === filters.gender) &&
        (filters.age === "" || pet.age === filters.age) &&
        (filters.vaccination === "" ||
          pet.vaccination === filters.vaccination) &&
        (filters.color === "" || pet.color === filters.color) &&
        (searchTerm === "" ||
          pet.name.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    });
  };

  const handleButtonClick = (button: string) => {
    setActiveButton(button);
    if (button === "all") {
      setPets(initialPets);
    } else {
      const filteredPets = initialPets.filter((pet) => {
        const matchesBreed = pet.breed
          .toLowerCase()
          .includes(button.toLowerCase());
        const matchesGender =
          filters.gender === "" || pet.gender === filters.gender;
        const matchesAge = filters.age === "" || pet.age === filters.age;
        const matchesVaccination =
          filters.vaccination === "" || pet.vaccination === filters.vaccination;
        const matchesColor =
          filters.color === "" || pet.color === filters.color;
        return (
          matchesBreed &&
          matchesGender &&
          matchesAge &&
          matchesVaccination &&
          matchesColor
        );
      });
      setPets(filteredPets);
    }
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    setPets(applyFilters(initialPets));
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastPet = currentPage * petsPerPage;
  const indexOfFirstPet = indexOfLastPet - petsPerPage;
  const currentPets = Array.isArray(pets)
    ? pets.slice(indexOfFirstPet, indexOfLastPet)
    : [];

  const totalPages = Math.ceil(pets.length / petsPerPage);

  return (
    <div className="bg-green-50 text-black py-16 px-8">
      <h2 className="text-4xl font-bold text-green-900 text-center mb-8">
        <span role="img" aria-label="paw">
          🐾
        </span>{" "}
        Tìm Thú Cưng{" "}
        <span role="img" aria-label="paw">
          🐾
        </span>
      </h2>

      <div className="flex justify-center space-x-10 mb-8">
        {["all", "Chó", "Mèo", "Khác"].map((button) => (
          <button
            key={button}
            className={`px-6 py-2 ${
              activeButton === button
                ? "bg-green-700 text-white"
                : "border border-green-700 text-green-700"
            } rounded-full`}
            onClick={() => handleButtonClick(button)}
          >
            {button === "all" ? "Tất cả" : button}
          </button>
        ))}
      </div>

      <div className="bg-green-50 py-10">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries({
              gender: "Giới tính",
              age: "Độ tuổi",
              vaccination: "Tiêm Phòng",
              color: "Màu",
            }).map(([key, label]) => (
              <div key={key} className="flex flex-col">
                <label className="text-green-800 font-semibold mb-2">
                  {label}
                </label>
                <select
                  name={key}
                  className="border border-green-800 rounded-md p-2 text-black"
                  onChange={handleFilterChange}
                  value={filters[key as keyof Filters]}
                >
                  <option value="">Tất cả</option>
                  {key === "gender" && (
                    <>
                      <option value="Đực">Đực</option>
                      <option value="Cái">Cái</option>
                    </>
                  )}
                  {key === "age" && (
                    <>
                      <option value="Trẻ">Trẻ</option>
                      <option value="Trưởng thành">Trưởng thành</option>
                    </>
                  )}
                  {key === "vaccination" && (
                    <>
                      <option value="Đã">Đã Tiêm</option>
                      <option value="Chưa">Chưa Tiêm</option>
                      <option value="Chưa rõ">Chưa Rõ</option>
                    </>
                  )}
                  {key === "color" && (
                    <>
                      <option value="Trắng">Trắng</option>
                      <option value="Đen">Đen</option>
                      <option value="Nâu">Nâu</option>
                    </>
                  )}
                </select>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <input
              type="text"
              placeholder="Tìm kiếm theo tên"
              className="border border-green-800 rounded-md p-2 text-black mr-4"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button
              className="px-6 py-2 bg-green-700 text-white rounded-full"
              onClick={handleSearchClick}
            >
              Tìm kiếm
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.isArray(currentPets) &&
            currentPets.map((pet, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={pet.image}
                    alt={pet.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-800 to-transparent p-4">
                    <h3 className="text-lg font-bold text-white">{pet.name}</h3>
                    <p className="text-sm text-gray-300">Tuổi: {pet.age}</p>
                    <p className="text-sm text-gray-300">
                      Giới tính: {pet.gender}
                    </p>
                    <p className="text-sm text-gray-300">
                      Tiêm phòng: {pet.vaccination}
                    </p>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <Link
                    href={{
                      pathname: "/NhanNuoi",
                      query: { ...pet },
                    }}
                    className="inline-block mt-4 px-6 py-2 bg-green-700 text-white rounded-full"
                  >
                    Nhận nuôi
                  </Link>
                </div>
              </div>
            ))}
        </div>
        <div className="flex justify-center mt-8">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`px-4 py-2 mx-1 ${
                currentPage === index + 1
                  ? "bg-green-700 text-white"
                  : "bg-white border border-green-700 text-green-700"
              } rounded-full`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimPet;
