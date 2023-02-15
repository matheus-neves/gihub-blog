import { api } from '@src/lib/axios';
import { getRelativeTime } from '@src/utils/getRelativeTime';

interface FetchIssueReturnData {
  title: string;
  comments: number;
  updated_at: string;
  formattedUpdatedAt: string;
  html_url: string;
  body: string;
  name: string;
}

export const fetchIssue = async ({
  number
}: {
  number: string | undefined;
}) => {
  const response = await api.get(
    `https://api.github.com/repos/rocketseat-education/reactjs-github-blog-challenge/issues/${number}`
  );

  const { title, comments, updated_at, html_url, body, user } = response.data;

  const formattedData = {
    title,
    comments,
    formattedUpdatedAt: getRelativeTime(new Date(updated_at).getTime()),
    html_url,
    body,
    name: user.login
  } as FetchIssueReturnData;

  return formattedData;
};
