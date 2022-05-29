import { createClient } from "@supabase/supabase-js";
import { REACT_APP_SUPABASE_URL, REACT_APP_SUPABASE_ANON_KEY } from "react-native-dotenv";

const supabase = createClient(REACT_APP_SUPABASE_URL, REACT_APP_SUPABASE_ANON_KEY);

const useFetchMenu = (): (() => Promise<DayMenu[] | null>) => {
    async function fetchMenu() {
        const { data } = await supabase.from<DayMenu>("menu").select("*").order("id");
        return data;
    }
    return fetchMenu;
};

export default useFetchMenu;
