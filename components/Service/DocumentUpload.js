import axios from 'axios';


    const  DocumentUpload = async (data, uploadFolder) =>{
        console.log(data, uploadFolder,'data, uploadFolder');
        let API_ENDPOINT = process.env.baseUrl;
        var user = JSON.parse(localStorage.getItem('userData'));
        let formData = new FormData();
        formData.append('file', data);
        formData.append('upload_folder', uploadFolder);
        var image = '';
        // image = result.data.data.image;

       image = await axios.post(API_ENDPOINT + '/image-upload',
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': 'Bearer ' + user[0].token
                }
            }
        )
        var newImage =  image.data.data;
     
        return newImage;
    }

export default DocumentUpload;