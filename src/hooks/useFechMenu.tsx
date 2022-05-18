import { useState, useEffect } from "react";
import api from "../services/api";

const useFechMenu = () => {
    const [menu, setMenu] = useState<WeekMenu>();

    useEffect(() => {
        api.get("/menu")
            .then((res) => {
                setMenu(res.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);

    return menu;
};

export default useFechMenu;
