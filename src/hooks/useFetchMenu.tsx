import { createClient } from "@supabase/supabase-js";
import { REACT_APP_SUPABASE_URL, REACT_APP_SUPABASE_ANON_KEY } from "react-native-dotenv"

const supabase = createClient(REACT_APP_SUPABASE_URL, REACT_APP_SUPABASE_ANON_KEY);

const parseMenu = (jsonMenu: DayMenu[] | null) => {
    const result = {};
    jsonMenu?.map((dayMenu) => {
        Object.assign(result, {
            [dayMenu.date]: {
                desjejum: dayMenu.desjejum,
                almoco: dayMenu.almoco,
                jantar: dayMenu.jantar,
            },
        });
    });
    return result;
};

const useFetchMenu = () => {
    async function fetchMenu() {
        const { data } = await supabase.from<DayMenu>("menu").select("*").order("date");
        return parseMenu(data);
    }
    return fetchMenu;
};

export default useFetchMenu;
