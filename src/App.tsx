import React, {useState} from 'react';
import SplashScreen from './components/splash-screen';
import {Text} from 'react-native';
const App = () => {
  const [animationCompleted, setAnimationComplete] = useState<Boolean>(false);

  const changeAnimationStatus = (param: Boolean) => {
    setAnimationComplete(param);
  };
  console.log(animationCompleted, 'animationCompleted---');
  return (
    <>
      {!animationCompleted ? (
        <SplashScreen onFinish={changeAnimationStatus} />
      ) : (
        <Text>Welcome to home page</Text>
      )}
    </>
  );
};
export default App;
