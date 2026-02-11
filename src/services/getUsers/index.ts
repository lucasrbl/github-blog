import { api } from "../../config/api"
import type { User } from "../../types"

// Exibir: avatar, nome, bio, username, quantidade de seguidores e link para o GitHub.
export const getUsers = async (username: string): Promise<User> => {
    const response = await api.get(`/users/${username}`)

    if(response.status !== 200) {
        throw new Error("Erro ao buscar usuário")
    }

   return response.data as User
}