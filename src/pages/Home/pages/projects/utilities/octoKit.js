import axios from "axios";

const API = process.env.REACT_APP_BACKEND_URL;

export default class OctoKitRest {
    async getOtherProjectsFiles(){
        try {
            return (await axios.get(`${API}/api/github/files`)).data;
        }catch(e){
            return [];
        }
    }

    async getOtherProjectFile(path){
        return (await axios.get(`${API}/api/github/file`, { params: { path } })).data;
    }
}
