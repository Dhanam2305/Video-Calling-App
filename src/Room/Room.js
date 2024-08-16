import React from 'react'
import { useParams } from 'react-router-dom'
import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt";

const RoomPage = () => {

    const {roomId} = useParams();


    const myMeeting = async (element) =>{
        const appID =224024221 ;
        const serverSecret = "3ccf72931cf80d7e868e80b73a8490d3";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,roomId,
            Date.now().toString(),
    "DhanaLakshmi");
    const zc = ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
        container: element,
        sharedLinks:[
                  {
                    name:"Copy Link",
                    url:`http://localhost:3000/room/${roomId}`,
                  }    
        ],
        scenario: {
            mode:ZegoUIKitPrebuilt.OneONoneCall,
        },
        showScreenSharingButton:true,

    });
     };
  return (
    <div>
        <div ref={myMeeting}></div>
    </div>
  )
}

export default RoomPage
