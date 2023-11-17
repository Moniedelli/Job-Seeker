
'use client';

import { Sidebar, Checkbox, Label } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiShoppingBag, HiTable, HiUser } from 'react-icons/hi';

function SidebarComponent() {
  return (
    <Sidebar className='m-8 border-2 border-solid rounded-mdp-4' aria-label="Sidebar with multi-level dropdown example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Filter
          </Sidebar.Item>
          <Sidebar.Item>
            <div className='font-semibold py-2'>Job Category</div>
            <div className="flex items-center gap-2">
              <Checkbox id="promotion" />
              <Label htmlFor="promotion">Full Time</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="age" />
              <Label htmlFor="age">Part Time</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="promotion" />
              <Label htmlFor="promotion">Internship</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="age" />
              <Label htmlFor="age">Contract</Label>
            </div>
          </Sidebar.Item>
          <Sidebar.Item>
            <div className='font-semibold py-2'>Education</div>
            <div className="flex items-center gap-2">
              <Checkbox id="promotion" />
              <Label htmlFor="promotion">SMA</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="age" />
              <Label htmlFor="age">D3</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="promotion" />
              <Label htmlFor="promotion">S1</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="age" />
              <Label htmlFor="age">S2</Label>
            </div>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiArrowSmRight}>
            Logout
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default SidebarComponent;