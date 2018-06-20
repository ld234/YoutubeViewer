import React from 'react';
 
const VideoDetail = ({video}) => {
    if (!video){
        return <div>Loading...</div>;
    }
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    const date = new Date(video.snippet.publishedAt).toString();
    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9"> 
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>

            <div className="detail">
                <div className="video-title"> 
                    {video.snippet.title}
                </div>
                <div className="channel-title">
                    Uploaded by {video.snippet.channelTitle} on {date}
                </div>
                <div>
                    {video.snippet.description}   
                </div>
            </div>
        </div>
    );
}

export default VideoDetail;