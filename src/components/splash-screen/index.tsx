import React, {FunctionComponent} from 'react';
import LottieView from 'lottie-react-native';

interface Props {
  onFinish: (param: Boolean) => void;
}

const SplashScreen: FunctionComponent<Props> = ({onFinish}) => {
  const isLoading = false;
  return (
    <LottieView
      source={require('../../assets/images/splash.json')}
      style={{width: '100%', height: '100%'}}
      autoPlay
      duration={10000}
      loop={isLoading}
      onAnimationFinish={() => onFinish(true)}
    />
  );
};

export default SplashScreen;
