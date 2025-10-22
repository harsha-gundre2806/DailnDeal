import { useRef } from "react";

export default function TabSwitcher({ tabs = [], activeTab, setActiveTab }) {
  const tabRefs = useRef([]);

  const handleKeyDown = (e, index) => {
    let newIndex = index;

    switch (e.key) {
      case "ArrowRight":
        newIndex = (index + 1) % tabs.length;
        break;
      case "ArrowLeft":
        newIndex = (index - 1 + tabs.length) % tabs.length;
        break;
      case "Home":
        newIndex = 0;
        break;
      case "End":
        newIndex = tabs.length - 1;
        break;
      default:
        return; // ignore other keys
    }

    e.preventDefault();
    setActiveTab(tabs[newIndex].key);
    tabRefs.current[newIndex].focus();
  };

  return (
    <div role="tablist" aria-label="Tabs" className="flex gap-4 mb-8 justify-center">
      {tabs.map((tab, index) => (
        <button
          key={tab.key}
          role="tab"
          aria-selected={activeTab === tab.key}
          tabIndex={activeTab === tab.key ? 0 : -1}
          ref={(el) => (tabRefs.current[index] = el)}
          className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 focus:outline-none ${
            activeTab === tab.key
              ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg"
              : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
          }`}
          onClick={() => setActiveTab(tab.key)}
          onKeyDown={(e) => handleKeyDown(e, index)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
