import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

interface PostData {
  title: string;
  comments: number;
  formattedUpdatedAt: string;
  html_url: string;
  name: string;
}

interface PostHeaderProps {
  data: PostData;
}

export function PostHeader({ data }: PostHeaderProps) {
  return (
    <header
      className="
        flex
        flex-col
        bg-primary-base-profile
        p-5
        mt-[-30px]
        rounded-[10px]

        md:py-8
        md:px-10
        md:mt-[-80px]
      "
    >
      <div className="flex items-center justify-between w-full mb-5">
        <Link
          to="/"
          className="
            flex
            no-underline
            text-primary-blue
            border-b
            border-b-transparent
          "
        >
          <FontAwesomeIcon icon={faChevronLeft} width={10} height={10} />
          <span className="uppercase ml-2 text-xs font-bold">Back</span>
        </Link>
        <a
          href={data.html_url}
          target="_blank"
          rel="noreferrer"
          className="
            flex
            
            no-underline
            text-primary-blue
            border-b
            border-b-transparent

            transition
            hover:border-primary-blue
          "
        >
          <span className="uppercase mr-2 text-xs font-bold">
            See on github
          </span>
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            fade
            width={12}
            height={12}
          />
        </a>
      </div>
      <div>
        <h1 className="text-2xl mb-2">{data.title}</h1>
        <ul className="flex flex-wrap flex-1 gap-3 md:gap-8">
          <li className="flex items-center">
            <FontAwesomeIcon
              icon={faGithub}
              className=" text-primary-base-label min-h-[18px]"
              width={18}
              height={18}
            />
            <span className="text-primary-base-span ml-2">{data.name}</span>
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon
              icon={faCalendarDay}
              className=" text-primary-base-label min-h-[18px]"
              width={18}
              height={18}
            />
            <span className="text-primary-base-span ml-2">
              {data.formattedUpdatedAt}
            </span>
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon
              icon={faComment}
              className=" text-primary-base-label min-h-[18px]"
            />
            <span className="text-primary-base-span ml-2">
              {data.comments} comments
            </span>
          </li>
        </ul>
      </div>
    </header>
  );
}
