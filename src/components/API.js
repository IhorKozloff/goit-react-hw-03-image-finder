const KEY = "25226390-6524195878b00f535edfb636d";
const axios = require('axios').default;



export const searchByName = async (name) => {
       
    const response = await axios.get(
        `https://pixabay.com/api/?q=${name}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );  
    return response.data.hits;
        
}

