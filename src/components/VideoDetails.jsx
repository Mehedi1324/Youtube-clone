import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { BsFillCheckCircleFill } from 'react-icons/bs';

import { AiOutlineLike, AiOutlineLink } from 'react-icons/ai';
import { abbreviateNumber } from 'js-abbreviation-number';
import { fetchDataFromApi } from '../utils/api';
import { Context } from '../context/contextApi';
import SuggestionVideo from './SuggestionVideo';

const VideoDetails = () => {
  const [video, setVideo] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState(null);
  const { id } = useParams();
  const { setLoading } = useContext(Context);

  useEffect(() => {
    document.getElementById('root').classList.add('custom-h');
    fetchVideoDetails();
    fetchRelatedVideos();
  }, [id]);

  // Fetch currently playing video ________________________

  const fetchVideoDetails = () => {
    setLoading(true);
    fetchDataFromApi(`video/details/?id=${id}`).then((res) => {
      console.log(res);
      setVideo(res);
      setLoading(false);
    });
  };

  // Fetch Suggestion video _______________________________________

  const fetchRelatedVideos = () => {
    setLoading(true);
    fetchDataFromApi(`video/related-contents/?id=${id}`).then((res) => {
      console.log(res);
      setRelatedVideos(res);
      setLoading(false);
    });
  };

  return (
    <div className="flex flex-row justify-center h-[calc(100%-56px)] bg-black ">
      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row">
        <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 overflow-y-auto">
          <div className="h-[200px] md:h-[400px] xl:h-[550px]  ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
              width="100%"
              height="100%"
              className="bg-white"
              playing={true}
            />
          </div>
          {/* Playing video title_______________ */}
          <div className="mt-4 text-sm font-bold text-white md:text-xl line-clamp-2">
            {video?.title}
          </div>
          {/* channel info__________________ */}

          <div className="flex flex-col justify-between mt-4 md:flex-row">
            <div className="flex">
              {/* channel Dp_______________ */}

              <div className="flex items-start">
                <div className="flex overflow-hidden rounded-full h-11 w-11">
                  <img src={video?.author?.avatar[0]?.url} alt="channel dp" />
                </div>
              </div>

              {/* channel name and varificatin status__________ */}
              <div className="flex flex-col ml-3">
                <div className="flex items-center font-semibold text-white text-md">
                  {video?.author?.title}
                  {video?.author?.badges[0]?.type === 'VERIFIED_CHANNEL' && (
                    <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
                  )}
                </div>

                {/* Subscription text___________ */}
                <div className="text-white/[0.7] text-sm">
                  {video?.author?.stats?.subscribersText}
                </div>
              </div>
            </div>
            <div className="flex mt-4 text-white md:mt-0">
              <div className="flex items-center justify-center px-6 bg-white/[0.15] h-11 rounded-3xl">
                <AiOutlineLike className="mr-2 text-xl text-white" />
                <span>{`${abbreviateNumber(
                  video?.stats?.likes,
                  2
                )} Likes`}</span>
              </div>
              <div className="flex items-center justify-center px-6 bg-white/[0.15] h-11 rounded-3xl ml-4">
                <span>{`${abbreviateNumber(
                  video?.stats?.views,
                  2
                )} Views`}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-4 py-6 overflow-y-auto lg:w-[350px] xl:w-[400px]">
          {relatedVideos?.contents?.map((item, index) =>
            item?.type !== 'video' ? (
              false
            ) : (
              <SuggestionVideo key={index} video={item.video} />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
