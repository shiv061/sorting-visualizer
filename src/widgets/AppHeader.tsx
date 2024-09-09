export const AppHeader = () => {
  return (
    <div className="flex justify-between max-w-screen-xl mx-auto p-2">
      <div>
        <p>Sorting Visualizer</p>
      </div>
      <div>
        <ul className="flex gap-2">
          <li className="sortListItems">Merge Sort</li>
          <li className="sortListItems">Heap Sort</li>
        </ul>
      </div>
    </div>
  );
};
