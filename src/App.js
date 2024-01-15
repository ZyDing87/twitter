import './css/App.css';
import Sidebar from './component/Sidebar'
import Feed from './scripts/Feed'
import Widgets from './component/Widgets'

function App() {
  return (
    <div className="app">
      
      {/* Sidebar */}
      <Sidebar />
      {/* Feed */}
      <Feed />
      {/* Widget */}
      <Widgets />
    </div>
  );
}

export default App;
