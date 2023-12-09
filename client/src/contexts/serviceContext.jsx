import { createContext, useEffect, useState } from "react";

import * as adoptAnimalService from '../services/adoptAnimalService';
import { useNavigate } from "react-router-dom";


const ServiceContext = createContext();

export const ServiceProvider = ({children,}) => {
     const navigate = useNavigate();
    const [services, setServices] = useState([]);

    useEffect(() => {
        adoptAnimalService.getAllServices()
            .then((data) => setServices(data))
            .catch(err => {
                return err;
            });
    }, []);


    const values = {
        services,
    };

    return (
       
    <ServiceContext.Provider value={values}>
           {children}
     </ServiceContext.Provider>
    );
};

ServiceContext.displayName = 'ServiceContext';

export default ServiceContext;