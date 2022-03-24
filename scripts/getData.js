const API_KEY = 'db5b2429fa90443f99bcf3ce0852cedb';

const getData = async (url) => {
  const resp = await fetch(url, {
    headers: {
      'X-Api-Key': API_KEY,
    }
  });

  const data = await resp.json();
  return data;
};

export default getData;
