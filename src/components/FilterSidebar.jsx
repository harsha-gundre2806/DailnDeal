function FilterSidebar() {
  return (
    <aside className="w-64 p-4 border rounded-xl bg-gray-50">
      <h3 className="text-lg font-bold mb-4">Filters</h3>
      <label className="block mb-2">
        <input type="checkbox" className="mr-2" /> In Stock
      </label>
      <label className="block mb-2">
        <input type="checkbox" className="mr-2" /> Under $100
      </label>
      <label className="block mb-2">
        <input type="checkbox" className="mr-2" /> Nearby Stores
      </label>
    </aside>
  );
}

export default FilterSidebar;
