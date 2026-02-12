export interface User {
    id: number
    avatar_url: string
    name: string
    bio: string
    followers: number
    blog: string
    company: string
}

export interface Issue {
    id: number;
    title: string;
    createdAt: string;
    body: string;
}