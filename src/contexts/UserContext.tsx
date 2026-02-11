/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import type { User } from "../types";
import { getUsers } from "../services/getUsers";

type UserContextType = {
    user: User | null;
    fetchUser: (username: string) => Promise<void>;
}

export const userContext = createContext({} as UserContextType);


export function UserProvider({ children }: { children: React.ReactNode }) {
        const [user, setUser] = useState<User | null>(null);
    
        const fetchUser = async (username: string) => {
            const userData = await getUsers(username);
            setUser(userData);
        }

        const data = {
            user,
            fetchUser
        }

    return <userContext.Provider value={data}>{children}</userContext.Provider>;
}

export const useUserContext = () => useContext(userContext);