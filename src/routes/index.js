import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Projects from '../pages/Projects/Projects';
import Contact from '../pages/Contact/Contact';
import NewProject from '../pages/NewProject/NewProject';
import Project from '../pages/Project/Project';
import useAuth from '../hooks/useAuth';
import Service from '../pages/Service/Service';

const Private = ({Item}) => {
    const {signed} = useAuth();

    return signed > 0 ? <Item></Item> : <Signin></Signin>;
}

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/home" element={<Private Item={Home} />} />
                    <Route path="/" element={<Signin></Signin>}/>
                    <Route exact path="/signup" element={<Signup></Signup>} />
                    <Route path="/projects" element={<Projects></Projects>}></Route>
                    <Route path="/contact" element={<Contact></Contact>}></Route>
                    <Route path="/newproject" element={<NewProject></NewProject>}></Route>
                    <Route path="/project/:id" element={<Project></Project>}></Route>
                    <Route path="/project/:projectID/service/:serviceID" element={<Service></Service>}></Route>
                    <Route path="*" element={<Signin></Signin>}/>
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
};

export default RoutesApp;