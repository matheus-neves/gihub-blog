import { api } from '@src/lib/axios';

const username = 'matheus-neves';

interface GetProfileReturnType {
  name: string;
  bio: string;
  avatarUrl: string;
  htmlUrl: string;
  followers: number;
  company: string;
}

export const getProfile = async () => {
  const { data } = await api.get(`https://api.github.com/users/${username}`);

  const { avatar_url, bio, company, followers, html_url, name } = data;

  const formattedData = {
    avatarUrl: avatar_url,
    bio,
    company,
    followers,
    htmlUrl: html_url,
    name
  } as GetProfileReturnType;

  return formattedData;
};
