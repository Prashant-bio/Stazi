    import React, { useState } from 'react'
    import CarList from './CarList';
    import carData from "../cars.json"
    import Pagination from './Pagination';
    import { BiSearch } from "react-icons/bi"

    const itemsPerPage = 6;
    const CarPage = () => {
        const [currentPage, setCurrentPage] = useState(1);
        const [searchQuery, setSearchQuery] = useState("");
        const filteredCars = carData.filter((car) =>
            car.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        const totalPages = Math.ceil(filteredCars.length / itemsPerPage);
        console.log(filteredCars);
        const indexOfLastCar = currentPage * itemsPerPage;
        const indexOfFirstCar = indexOfLastCar - itemsPerPage;
        const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);

        const handlePageChange = (pageNumber) => {
            setCurrentPage(pageNumber);
        };
        const handleSearchChange = (e) => {
            setSearchQuery(e.target.value);
            setCurrentPage(1); // Reset to the first page when searching
        };

        return (

            <div className="h-[100%] flex w-screen overflow-y-scroll">

                <div className="h-[100%] w-[100%] bg-[#dbd9d9]">

                    <div className='w-[100%] h-[100%] '>
                        <div className=' w-[96%] h-[8%] bg-[#f8f4f480] mx-8 rounded-2xl flex items-center'>
                            <div className='flex justify-between items-center w-[20%] mx-8 py-2 px-4 bg-white rounded-xl '>
                                <input className='outline-none' type='text' placeholder='Search...'
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                />
                                <BiSearch />
                            </div>
                        </div>
                        <CarList cars={currentCars} filter={filteredCars} />
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={handlePageChange}
                            items={itemsPerPage}
                            totalItems={filteredCars.length}
                        />
                    </div>
                    {/* <div className="w-[100%] h-[7%] pb-6 bg-white flex items-center pr-6 justify-end">
                            <div className="">
                                <Stack spacing={2}>
                                    <Pagination
                                        color="secondary"
                                        defaultPage={page}
                                        onChange={(event, value) => {
                                            setPage(value);
                                        }}
                                        count={totalPages} // Use the totalPages calculated from filtered data
                                        variant="outlined"
                                        shape="rounded"
                                    />
                                </Stack>
                            </div>
                        </div> */}
                </div>
            </div>
        )
    }

    export default CarPage