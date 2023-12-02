'use client'
import axios from 'axios'
import NavbarComponent from '../navbar'
import CardComponent from './card'
import SidebarComponent from './sidebar'
import {useState, useEffect} from 'react'
import { Button } from 'flowbite-react'
import CarouselComponent from './carousel'
import TotalJob from './totalJob'

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchButtonClick = async () => {
    console.log('Searching for:', searchTerm);
    try {
      const response = await axios.get(`/api/job/search?term=${searchTerm}`);
      const jobs = response.data;
      setFilteredData(jobs);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  useEffect(() => {
    const getJob = async () => {
      try {
        const response = await axios('/api/job/read');
        const jobs = await response.data;
        setData(jobs);
        setFilteredData(jobs);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getJob();
  }, []);

  return (
    <div>
      <CarouselComponent />
      <form onSubmit={(e) => { e.preventDefault(); handleSearchButtonClick(); }}>
        <div className="relative mt-5 flex justify-end mr-5">
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
            Search
          </label>
          <div className="relative w-1/3 ml-8">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-00 dark:text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Search job keyword..."
              value={searchTerm}
              onChange={handleSearchInputChange}
              required
            />
            
            <Button outline gradientDuoTone="greenToBlue"
              type="submit"
              className="absolute end-2.5 bottom-1.5 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm"
              onClick={handleSearchButtonClick}
            >
              Search
            </Button>
          </div>
        </div>
      </form>

      <div className='pl-80 text-gray-500 italic -mb-14'>
        <TotalJob />
      </div>  

      <div className='flex'>
        <SidebarComponent />
        
        <div className='flex flex-wrap justify-center bg-gray-50 rounded-lg mt-16 py-5 mr-5'>
        {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <CardComponent key={item.id} data={item} />
            ))
          ) : (
            <p>No jobs found.</p>
          )}
        </div>
      </div>
    </div>
  )
}
