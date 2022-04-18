const KEY = "25226390-6524195878b00f535edfb636d";
const axios = require('axios').default;

let index = 1;

export const searchByName = async (name) => {
    index = 1;
    const response = await axios.get(
        `https://pixabay.com/api/?q=${name}&page=${index}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );  
    return response.data.hits;
        
}

export const searchMore = async (name) => {
    index += 1;   
    const response = await axios.get(
        `https://pixabay.com/api/?q=${name}&page=${index}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );  
    console.log(response)
    return response.data.hits;
        
}
