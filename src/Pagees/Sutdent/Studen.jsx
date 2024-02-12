import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import {Button, TextField} from "@mui/material";
import StudentCard from "../../Component/StudentCard/StudentCard.jsx";
import AddStuden from "../../Component/AddStudent/AddStuden.jsx";
import {useState} from "react";


export default function () {

    const [data, setData] = useState([])
    function savestudent(val) {
        const arr=[...data];
        arr.push(val)
        setData(arr)

    }
    const deletestu = (index) => {
        const arr=[...data]
        arr.splice(index,1)
        setData(arr)
    }

    return (
        <div>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <AddStuden saveStudent={(val)=>savestudent(val)}/>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'around', borderRadius: 2 ,backgroundColor:'#998a8a',padding:2}}>
                {data.map((val,index)=>(
                    <StudentCard
                        key={index}
                        name={val.name}
                        school={val.school}
                        age={val.age}
                        address={val.address}
                      deletestudent={()=>deletestu(index)}
                    />
                ))}

            </Box>
        </div>
    )
}