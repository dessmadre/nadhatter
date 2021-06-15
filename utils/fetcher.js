import { useState } from 'react';
import axios from 'axios';

// fetcher function for swr

export const fetcher = (url) => {
  return axios
    .get(url, {
      headers: {
        'Access-Control-Allow-Headers': 'Content-Length',
      },
      onDownloadProgress: (progressEvent) => {
        console.log(progressEvent);
      },
    })
    .then((res) => {
      return res.data.data;
    });
};

export default fetcher;
