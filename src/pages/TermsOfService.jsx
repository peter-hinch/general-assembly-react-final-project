import React from 'react';

const TermsOfService = () => {
  return (
    <div>
      <h1>Terms of Service</h1>
      <p>
        RemoteSpot makes use of the Google Maps and Google Places APIs to obtain
        information about locations and businesses searched for in the web
        application and usage is subject to the{' '}
        <a href="https://cloud.google.com/maps-platform/terms/">
          Google Maps Platform Terms of Service
        </a>{' '}
        and{' '}
        <a href="https://maps.google.com/help/terms_maps/">
          Google Maps/Google Earth Additional Terms of Service
        </a>
      </p>
    </div>
  );
};

export default TermsOfService;
