import React from 'react';
import * as s from './PrivacyPolicy.styles';

const PrivacyPolicy = () => {
  return (
    <div>
      <h1>Privacy Policy</h1>
      <p>
        RemoteSpot makes use of the Google Maps and Google Places APIs to obtain
        information about locations and businesses searched for in the web
        application. More information on how Google manages privacy can be read
        about in the{' '}
        <a href="https://policies.google.com/privacy">Google Privacy Policy</a>
      </p>
    </div>
  );
};

export default PrivacyPolicy;
