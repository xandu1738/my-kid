import React from "react";
import DrawerListItem from "./DrawerListItem";
import SelectItem from "./SelectItem";
import { BarChart2, Book, CreditCard, Calendar, Database } from "react-feather";

const DrawerContent = () => {
  return (
    <>
      <div>
        <div className="header">
          E R O S <span>suite</span>
        </div>
        <div className="items-list">
          <ul style={{ listStyle: "none" }}>
            <li>
              <DrawerListItem link="/" icon={<BarChart2 />} item="Dashboard" />
            </li>
            <li>
              <SelectItem icon={<CreditCard />} />
            </li>
            <li>
              <DrawerListItem icon={<Calendar />} item="Calender" />
            </li>
            <li>
              <DrawerListItem icon={<Book />} item="Curriculum" />
            </li>
            <li>
              <DrawerListItem icon={<Database />} item="Reports" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DrawerContent;
