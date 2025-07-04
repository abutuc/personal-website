import React from "react";
import { Laptop, Users } from "lucide-react";

type Tab = {
  label: string;
  icon: React.ReactNode;
  value: string;
};

type TabsProps = {
  activeTab: string;
  setActiveTab: (value: string) => void;
};

const tabs: Tab[] = [
  {
    label: "Academic & Industry Journey",
    icon: <Laptop size={20} />,
    value: "developer",
  },
  {
    label: "Organizational Journey",
    icon: <Users size={20} />,
    value: "extra-curricular",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Tabs: React.FC<TabsProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex justify-center my-6">
      <div className="inline-flex rounded-xl border border-gray-300 bg-white shadow-sm overflow-hidden">
        {tabs.map(({ label, icon, value }) => {
          const isActive = activeTab === value;
          return (
            <button
              key={value}
              onClick={() => setActiveTab(value)}
              aria-pressed={isActive}
              className={classNames(
                "flex items-center gap-2 px-6 py-3 text-sm font-medium transition-colors duration-200 ease-in-out",
                "rounded-xl border-2",
                isActive
                  ? "border-blue-500 text-blue-600 bg-blue-50"
                  : "border-transparent text-gray-700 bg-white hover:border-gray-300 hover:bg-gray-50"
              )}
              style={{ minWidth: 120 }}
            >
              {icon}
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
