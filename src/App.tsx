import { AppControls } from "./widgets/AppControls";
import { AppHeader } from "./widgets/AppHeader";
import { SortingView } from "./widgets/SortingView";

function App() {
  return (
    <div className="flex flex-col w-full max-h-screen h-screen">
      <div className="bg-gray-200">
        <AppHeader />
      </div>
      <div className="bg-gray-100">
        <AppControls />
      </div>
      <div className="flex-1 bg-gray-50">
        <SortingView />
      </div>
    </div>
  );
}

export default App;
