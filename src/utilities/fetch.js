import { useQuery } from "@tanstack/react-query";
import { database } from "./firebase";
import { ref, set } from 'firebase/database';

const fetchJson = async (url) => {
    const response = await fetch(url);
    if (!response.ok) throw response;
    return response.json();
};

const saveDateToFirebase = async (data) => {
    const dbRef = ref(database);
    try{
        await set(dbRef, data);
        console.log("Data saved successfully");
    }catch(err){
        console.error("Failed to add data:", err.message);
    }
}   

export const useJsonQuery = (url) => {
    const { data, isLoading, error } = useQuery([url], () => fetchJson(url));

    if (data && !isLoading && !error)
        saveDateToFirebase(data);        

    return [ data, isLoading, error ];
};

