import React, {useState} from 'react';
import SplashScreen from './components/splash-screen';
import {Text} from 'react-native';
import Router from './navigation';
const App = () => {
  const [animationCompleted, setAnimationComplete] = useState<Boolean>(false);

  const changeAnimationStatus = (param: Boolean) => {
    setAnimationComplete(param);
  };
  return (
    <>
      {!animationCompleted ? (
        <SplashScreen onFinish={changeAnimationStatus} />
      ) : (
        <Router />
      )}
    </>
  );
};
export default App;
