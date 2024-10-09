// Airtable.js
// import axios from 'axios';

// const AIRTABLE_API_KEY = 'patREbJEXT15V0ern.fde59397204a1e1933454799f1e809f77fe00ed7712242ed2772384042319fda';
// const BASE_ID = 'appLn8M3TmXjO7rVg';  
// const TABLE_ID = 'tblslcHS79Q6jXVzX'; 

// function AirTableTest () {
//     return (
//         <div></div>
//     )
// }


// export default AirTableTest;


import axios from 'axios';

const AIRTABLE_API_KEY = 'patREbJEXT15V0ern.fde59397204a1e1933454799f1e809f77fe00ed7712242ed2772384042319fda';
const BASE_ID = 'appLn8M3TmXjO7rVg';  
const TABLE_ID = 'tblslcHS79Q6jXVzX'; 

export const fetchData = async () => {
  const url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID}`;
  const headers = { Authorization: `Bearer ${AIRTABLE_API_KEY}` };

  try {
    const response = await axios.get(url, { headers });
    return response.data.records.map(record => ({
      title: record.fields.Title,
      start: record.fields.Start,
      end: record.fields.End,
      description: record.fields.Description,
    }));
  } catch (error) {
    console.error('Error fetching data from Airtable', error);
    return [];
  }
};