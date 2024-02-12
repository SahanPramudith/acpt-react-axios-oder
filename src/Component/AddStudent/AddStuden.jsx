import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import {Button, TextField} from "@mui/material";
import {useState} from "react";

export default function AddStuden({saveStudent}) {
    const [name, setName] = useState('');
    const [age, setAge] = useState('')
    const [address, setAddress] = useState('');
    const [school, setSchool] = useState('');


    const save = () => {

        if(name !== '' && address !== '' && age !== '' && school !== ''){
            saveStudent({name: name, address: address, age: age, school: school});
            clear();
        } else {
            alert('fill this details..!');
        }

    }
    const clear = () => {
        setName('');
        setAge('');
        setAddress('');
        setSchool('')

    }


    return(
        <div>
            <h1>stusent</h1>

                <Card sx={{maxWidth: 345, padding: 2}}>
                <TextField sx={{marginY: 2}}
                               onChange={(val)=>setName(val.target.value)}
                               value={name}
                               id="filled-basic"
                               fullWidth label="Name"
                               variant="filled"
                    />
                    <TextField sx={{marginY: 2}}
                               onChange={(val)=>setAge(val.target.value)}
                               value={age}
                               id="filled-basic"
                               fullWidth label="Age"
                               variant="filled"
                    />
                    <TextField sx={{marginY: 2}}
                               onChange={(val)=>setAddress(val.target.value)}
                               value={address}
                               id="filled-basic"
                               fullWidth label="Address"
                               variant="filled"
                    />
                    <TextField sx={{marginY: 2}}
                               onChange={(val)=>setSchool(val.target.value)}
                               value={school}
                               id="filled-basic"
                               fullWidth label="School"
                               variant="filled"
                    />
                    <Button onClick={() => save()} variant="contained">Save</Button>
                </Card>
        </div>
    )
}