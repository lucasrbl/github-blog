import { api } from "../../config/api";

type getIssuesProps = {
    query: string;
    username: string;
    repo: string;
}

export const getIssues = async ({ query, username, repo }: getIssuesProps) => {
  const response = await api.get(`/search/issues?q=${query}+repo:${username}/${repo}`);

  if (response.status !== 200) {
    throw new Error("Erro ao buscar issues");
  }

  console.log('issues:', response);
  
  return response.data;
}