import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useQuery } from 'react-query';
import { ProfileSkeleton } from './components/ProfileSkeleton';
import { getProfile } from './utils';

export function Profile() {
  const { data, isLoading } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
    staleTime: 1000 * 60 * 60 * 24 // 24 hours
  });

  if (isLoading) return <ProfileSkeleton />;

  return (
    <div
      className="
      flex
      flex-col
      relative
      bg-primary-base-profile
      p-5
      mt-[-30px]
      rounded-[10px]

      md:flex-row
      md:py-8
      md:px-10
      md:mt-[-80px]
    "
    >
      <img
        src={data?.avatarUrl}
        alt="Avatar"
        className="rounded-lg w-[148px] h-[148px] mr-8"
      />
      <div className="flex flex-1 flex-col mt-2">
        <h2 className="text-2xl">{data?.name}</h2>
        <p className="mt-3 mb-4 line-clamp-2">{data?.bio}</p>
        <ul className="flex flex-wrap flex-1 gap-3 md:gap-6">
          <li className="flex items-center">
            <FontAwesomeIcon
              icon={faGithub}
              className=" text-primary-base-label"
              width={18}
              height={18}
            />
            <span className="text-primary-base-subtitle ml-2">
              {data?.name}
            </span>
          </li>
          {data?.company && (
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faBuilding}
                className=" text-primary-base-label"
                width={18}
                height={18}
              />
              <span className="text-primary-base-subtitle ml-2">
                {data.company}
              </span>
            </li>
          )}
          <li className="flex items-center">
            <FontAwesomeIcon
              icon={faUserGroup}
              className=" text-primary-base-label"
              width={18}
              height={18}
            />
            <span className="text-primary-base-subtitle ml-2">
              {data?.followers} followers
            </span>
          </li>
        </ul>
      </div>
      <a
        href={data?.htmlUrl}
        target="_blank"
        rel="noreferrer"
        className="
          flex
          absolute
          top-5
          right-5
          
          no-underline
          text-primary-blue
          border-b
          border-b-transparent
          
          md:top-8
          md:right-10

          transition
          hover:border-primary-blue
        "
      >
        <span className="uppercase mr-2 text-xs font-bold">Github</span>
        <FontAwesomeIcon
          icon={faArrowUpRightFromSquare}
          fade
          width={12}
          height={12}
        />
      </a>
    </div>
  );
}
