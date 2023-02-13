import { api } from '@src/lib/axios';
import { getRelativeTime } from '@src/utils/getRelativeTime';
import { ResponseData } from './types';

export const fetchIssues = async ({ query }: { query: string }) => {
  const response = await api.get<ResponseData>(
    `https://api.github.com/search/issues?q=${query}repo:rocketseat-education/reactjs-github-blog-challenge`
  );

  return response.data.items.map((item) => ({
    ...item,
    formattedRelativeTime: getRelativeTime(new Date(item.created_at).getTime()),
    formattedBody: item.body.substr(0, 200)
  }));
};
