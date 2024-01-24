import Dashbord from "../../Pagees/Dashbord/Dashbord.jsx";
import User from "../../Pagees/User/User.jsx";
import Axios from "../../Pagees/Axios/Axios.jsx";

const routs = [
    {
        name: 'Dashbord',
        path: '/dashbord',
        component: <Dashbord/>,
        key: 'dasbord'
    },
    {
        name: 'user',
        path: '/user',
        component: <User/>,
        key: 'user'
    },
    {
        name: 'axios',
        path: '/axios',
        component: <Axios/>,
        key: 'axios'
    },
]
export default routs;