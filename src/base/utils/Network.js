import axios from "../../axios";


class Network {

    GET = (url,params) =>{
        return new Promise((resolve, reject) => {
            axios.get(url, params )
                .then((response)=>{
                    resolve(response.data.content);
                })
        });
    }
}


export default Network;