import axios from 'axios';
import { useState } from 'react';

// fetcher function for swr

export const fetcher = (url) => {
  const [progress, emitProgress] = useState(0);

  return axios
    .request({
      method: 'GET',
      url,
      onDownloadProgress: (progressEvent) => {
        const percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        emitProgress(percentCompleted);
      },
    })
    .then((res) => res.data.data);
};

export default fetcher;
