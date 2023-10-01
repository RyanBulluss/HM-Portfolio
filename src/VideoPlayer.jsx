import YouTube from 'react-youtube';

export default function VideoPlayer( {videoId} ) {
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // You can add additional player parameters here (e.g., autoplay, controls, etc.)
          autoplay: 0, // 0 or 1
        },
      };
    
      return (
        <div>
          <YouTube videoId={videoId} opts={opts} />
        </div>
      );
}