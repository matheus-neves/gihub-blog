import { ProfileContainer, ProfileContent } from '@components/Profile/styles';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { api } from '@src/lib/axios';
import { useQuery } from 'react-query';
import { ProfileSkeleton } from './components/ProfileSkeleton';

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

export function Profile() {
  const { data, isLoading } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile
  });

  if (isLoading) {
    return (
      <ProfileContainer>
        <ProfileSkeleton />
      </ProfileContainer>
    );
  }

  return (
    <ProfileContainer>
      <img src={data?.avatarUrl} alt="Avatar" />
      <ProfileContent>
        <h2>{data?.name}</h2>
        <p>{data?.bio}</p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            <span>{data?.name}</span>
          </li>
          {data?.company && (
            <li>
              <FontAwesomeIcon icon={faBuilding} />
              <span>{data.company}</span>
            </li>
          )}
          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>{data?.followers} followers</span>
          </li>
        </ul>
      </ProfileContent>
      <a href={data?.htmlUrl} target="_blank" rel="noreferrer">
        <span>Github</span>
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} fade />
      </a>
    </ProfileContainer>
  );
}
