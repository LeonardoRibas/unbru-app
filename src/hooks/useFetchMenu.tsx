import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://nmdqdamhxlilvwnqrexx.supabase.co/rest/v1/menu?select=*", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5tZHFkYW1oeGxpbHZ3bnFyZXh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTI3MzkxNDIsImV4cCI6MTk2ODMxNTE0Mn0.F-Acdprmm0rFqZY0A8_jaW1aGGA0xItzfL474hjQHI4");

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
