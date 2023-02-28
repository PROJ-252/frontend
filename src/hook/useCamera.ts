import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { isShowVidewState } from "../store/video";



const useCamera = () => {

  const setIsShowVideo = useSetRecoilState(isShowVidewState)

  const startCam = () => {
    setIsShowVideo(true);
  }

  const stopCam = () => {
    setIsShowVideo(false);
        // let stream = HTMLVideoElement.current.stream;
        // const tracks = stream.getTracks();
        // tracks.forEach((track: { stop: () => any; }): any => track.stop());
  }

  return {
    startCam,
    stopCam
  }  
}

export default useCamera;