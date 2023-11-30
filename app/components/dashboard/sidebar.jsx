
'use client';

import { Sidebar, Checkbox, Label } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiShoppingBag, HiTable, HiUser } from 'react-icons/hi';

function SidebarComponent() {
  return (
    <Sidebar className='m-8 border-2 border-solid rounded-md p-4 bg-white' aria-label="Sidebar with multi-level dropdown example" style={{ borderRadius: '15px' }}>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie} className="text-gray-600 hover:text-blue-500">
            Filter
          </Sidebar.Item>
          <Sidebar.Item>
            <div className='font-semibold py-2 text-gray-800'>Job Category</div>
            <div className="flex items-center gap-2">
              <Checkbox id="fullTime" />
              <Label htmlFor="fullTime" className="text-gray-600">Full Time</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="partTime" />
              <Label htmlFor="partTime" className="text-gray-600">Part Time</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="internship" />
              <Label htmlFor="internship" className="text-gray-600">Internship</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="contract" />
              <Label htmlFor="contract" className="text-gray-600">Contract</Label>
            </div>
          </Sidebar.Item>
          <Sidebar.Item>
            <div className='font-semibold py-2 text-gray-800'>Skill</div>
            <div className="flex items-center gap-2">
              <Checkbox id="frontend" />
              <Label htmlFor="frontend" className="text-gray-600">Frontend Developer</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="backend" />
              <Label htmlFor="backend" className="text-gray-600">Backend Developer</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="android" />
              <Label htmlFor="android" className="text-gray-600">Android Developer</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="IOS" />
              <Label htmlFor="IOS" className="text-gray-600">IOS Developer</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="UI/UX" />
              <Label htmlFor="UI/UX" className="text-gray-600">UI/UX</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="others" />
              <Label htmlFor="others" className="text-gray-600">Others</Label>
            </div>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default SidebarComponent;