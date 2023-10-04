import { DefaultPlayer as Video } from "react-html5video";
import 'react-html5video/dist/styles.css'

export default function PlayVideo ( {videoFile} ) {

    return (
        <Video>
            <source src={videoFile} type="video/webm" />
        </Video>
    )
}