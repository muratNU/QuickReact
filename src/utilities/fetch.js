import { useQuery } from "@tanstack/react-query";

const fetchJson = async (url) => {
    const response = await fetch(url);
    if (!response.ok) throw response;
    console.log(response);
    return response.json();
};

export const useJsonQuery = (url) => {
    const { data, isLoading, error } = useQuery([url], () => fetchJson(url));
    console.log(data);
    return [ data, isLoading, error ];
};
