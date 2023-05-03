import React, { useContext, useEffect } from 'react';
import { Context } from '../context/contextApi';
import VideoCard from './VideoCard';
import LeftNav from './LeftNav';
const Feed = () => {
  const { loading, searchResults } = useContext(Context);

  useEffect(() => {
    document.getElementById('root').classList.remove('custom-h');
  }, []);
  return (
    <div className="flex flex-row  h-[calc(100vh-56px)] overflow-hidden">
      <LeftNav />
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-scroll bg-black">
        <div className="grid grid-cols-1 gap-5 p-7 md:grid-cols-2-col lg:grid-cols-3 xl:grid-cols-4">
          {!loading &&
            searchResults &&
            searchResults?.map((item) =>
              item?.type !== 'video' ? (
                false
              ) : (
                <VideoCard key={item?.video?.videoId} video={item?.video} />
              )
            )}
        </div>
      </div>
    </div>
  );
};

export default Feed;
