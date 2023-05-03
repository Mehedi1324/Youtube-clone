import { AppContext } from './context/contextApi';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Feed from './components/Feed';
import SearchResult from './components/SearchResult';
import VideoDetails from './components/VideoDetails';
function App() {
  return (
    <div className="App">
      <AppContext>
        <BrowserRouter>
          <div className="flex flex-col h-full">
            <Header />
            <Routes>
              <Route path="/" element={<Feed />} />
              <Route
                path="/searchResult/:searchQuery"
                element={<SearchResult />}
              />
              <Route path="/video/:id" element={<VideoDetails />} />
            </Routes>
          </div>
        </BrowserRouter>
      </AppContext>
    </div>
  );
}

export default App;
