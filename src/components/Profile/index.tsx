import imgAvatar from '@assets/avatar.jpg';
import { ProfileContainer, ProfileContent } from '@components/Profile/styles';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function Profile() {
  return (
    <ProfileContainer>
      <img src={imgAvatar} alt="Avatar" />
      <ProfileContent>
        <h2>Cameron Williamson</h2>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            <span>cameronwll</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding} /> <span>Rocketseat</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} /> <span>32 followers</span>
          </li>
        </ul>
      </ProfileContent>
      <a href="/#">
        <span>Github</span>{' '}
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} fade />
      </a>
    </ProfileContainer>
  );
}
