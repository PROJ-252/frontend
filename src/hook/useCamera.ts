import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { isClickState, isShowVidewState } from "../store/video";



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

  const [isClick, setIsClick] = useRecoilState(isClickState)

  const changeCameraViewState = () => {
    setIsClick(!isClick)
  }

  return {
    startCam,
    stopCam,
    changeCameraViewState
  }  
}

export default useCamera;