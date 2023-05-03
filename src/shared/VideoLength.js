import React from 'react';
import moment from 'moment';
const VideoLength = ({ time }) => {
  const videoLength = moment().startOf('day').seconds(time).format('H:mm:ss');
  return (
    <div className="absolute px-2 py-1 text-xs text-white bg-black rounded-md bottom-2 right-2">
      {videoLength}
    </div>
  );
};

export default VideoLength;
