import axios from 'axios';
import { useEffect } from 'react';
// limit, if 429 wait for 15 min and try again
const url = 'https://course-api.com/react-store-products';

const FirstRequest = () => {
  const fetchData = async () => {
    try {
      const response = await axios(url)
      const data = response.data
      console.log("🚀 ~ file: 1-first-request.js:11 ~ fetchData ~ data", data)
    } catch (error) {
      console.log(error.response)
    }
  }

  useEffect(() => {
    fetchData()
  }, []);

  return <h2 className='text-center'>first request</h2>;
};
export default FirstRequest;
