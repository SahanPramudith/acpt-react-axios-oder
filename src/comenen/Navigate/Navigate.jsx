import Dashbord from "../../Pagees/Dashbord/Dashbord.jsx";
import User from "../../Pagees/User/User.jsx";

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
]
export default routs;