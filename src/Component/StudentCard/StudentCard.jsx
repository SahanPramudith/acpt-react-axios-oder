import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';

export default function StudentCard( {name,address,age,school,deletestudent}) {
    return(
        <div>

            <Card sx={{maxWidth: 345, padding: 2, margin:1}}>
                <Box sx={{margin:1}}>Name : {name}</Box>
                <Box sx={{margin:1}}>Address :{address} </Box>
                <Box sx={{margin:1}}>Age : {age}</Box>
                <Box sx={{margin:1}}>School : {school}</Box>
                <Box sx={{display:'flex', justifyContent:'end'}}>
                    <IconButton aria-label="delete" size="small" onClick={()=>deletestudent()}>
                        <DeleteIcon fontSize="small" />
                    </IconButton>
                </Box>
            </Card>
        </div>
    )
}