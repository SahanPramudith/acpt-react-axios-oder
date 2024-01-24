import {useEffect, useState} from "react";
import axios from "axios";
import {Button} from "@mui/material";
import {Box} from '@mui/material';
import PostCard from "../../Component/Post Card/PostCard.jsx";

export default function Axios() {
    useEffect(() => {
        GetAxios()
    }, []);
    const [data, setData] = useState([])

    const GetAxios = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) {
                // handle success
                // console.log(response);
                setData(response.data);
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

    const UpDate = () => {
        axios.put('https://jsonplaceholder.typicode.com/posts/1', {
            id: 1,
            title: 'foo',
            body: 'bar',
            userId: 1,
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <div>
            <h1>
                Axios
            </h1>
            <br/>
            <Button onClick={() => Post()} variant="contained">Contained</Button>
            <br/>
            <hr/>
            <h1>Up daate </h1>
            <Button onClick={() => UpDate()} variant="contained">Up Date </Button>
            <hr/>
            <h1></h1>
            <h1>Delet </h1>
            <Button onClick={() => UpDate()} variant="contained">Up Date </Button>
            <br/>
            <hr/>
            <hr/>
            <hr/>
            <Box>
                {data.map((val,index)=>(
                    <PostCard id={val.id} description={val.body} tital={val.tital} />
                ))}

            </Box>
        </div>
    )
}