import { useNavigate } from 'react-router-dom';

const Titlebar = () => {
     const navigate = useNavigate();

     const handleClick = () => {
        navigate('/home');
     }

     return(
        <div>
            <button onClick={handleClick}>  Home</button>
        </div>
     )
}

export default Titlebar;