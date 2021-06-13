import useSWR from 'swr';
import { useState } from 'react';

const fetcher = (url) => {
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

export default function useSWRWithDownloadProgress(url) {
  useSWR(url, fetcher);
}
