import React from 'react';
import LoginScreen from '@screens/LoginScreen/LoginScreen';
import ScreenWrapper from '@utility/hoc/ScreenWrapper';

const LoginWrapper = (props: any) => {
  return (
    <>
      <ScreenWrapper>
        <LoginScreen title={props.route.params} />
      </ScreenWrapper>
    </>
  );
};

export default LoginWrapper;
