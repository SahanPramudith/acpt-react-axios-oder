import Dashbord from "../../Pagees/Dashbord/Dashbord.jsx";
import User from "../../Pagees/User/User.jsx";
import Studen from "../../Pagees/Sutdent/Studen.jsx";

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
        name: 'student',
        path: '/student',
        component: <Studen/>,
        key: 'student'
    },
]
export default routs;