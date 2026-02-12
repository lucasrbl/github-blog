/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import type { User, Issue } from "../types";
import { getUsers } from "../services/getUsers";
import { getIssues } from "../services/getIssues";

type UserContextType = {
    user: User | null;
    issues: Issue[];
    fetchUser: (username: string) => Promise<void>;
    fetchIssues: (query: string, username: string, repo: string) => Promise<void>;
}

export const userContext = createContext({} as UserContextType);


export function UserProvider({ children }: { children: React.ReactNode }) {
        const [user, setUser] = useState<User | null>(null);
        const [issues, setIssues] = useState<Issue[]>([]);
    
        const fetchUser = async (username: string) => {
            const userData = await getUsers(username);
            setUser(userData);
        }

        const fetchIssues = async (query: string, username: string, repo: string) => {
            const issuesData = await getIssues({ query, username, repo });
            setIssues(issuesData);
        }

        const data = {
            user,
            issues,
            fetchUser,
            fetchIssues
        }

    return <userContext.Provider value={data}>{children}</userContext.Provider>;
}

export const useUserContext = () => useContext(userContext);