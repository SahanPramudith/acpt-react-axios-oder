import {useEffect} from "react";
import axios from "axios";
import {Button} from "@mui/material";

export default function Axios() {
    useEffect(() => {
        GetAxios()
    }, []);

    const GetAxios = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }
    
    const Post = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: 'foo',
            body: 'bar',
            userId: 1,
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    
    return(
        <div>
            <h1>
                Axios
            </h1>
            <br/>
            <Button onClick={()=>Post()} variant="contained">Contained</Button>
        </div>
    )
}