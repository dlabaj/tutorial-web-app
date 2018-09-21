import Axios from 'axios';
import serviceConfig from './config';

const getThread = (language: string, id: string) =>
  Axios(
    serviceConfig({
      url: `${process.env.REACT_APP_STEELTHREAD_JSON_PATH}${language}/thread-${id}.json`
    })
  );

export { getThread };
