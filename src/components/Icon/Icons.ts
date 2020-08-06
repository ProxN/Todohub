import { ReactComponent as DocIcon } from '../../assets/icons/doc.svg';
import { ReactComponent as HomeIcon } from '../../assets/icons/home.svg';
import { ReactComponent as SettingsIcon } from '../../assets/icons/settings.svg';
import { ReactComponent as CloudyIcon } from '../../assets/icons/cloudy.svg';
import { ReactComponent as ArrowNext } from '../../assets/icons/arrowNext.svg';
import { ReactComponent as ArrowBack } from '../../assets/icons/arrowBack.svg';
import { ReactComponent as Close } from '../../assets/icons/close.svg';
import { ReactComponent as PlusIcon } from '../../assets/icons/plus.svg';

const icons: { [key: string]: React.FC } = {
  document: DocIcon,
  home: HomeIcon,
  settings: SettingsIcon,
  cloudy: CloudyIcon,
  arrowNext: ArrowNext,
  arrowBack: ArrowBack,
  close: Close,
  plus: PlusIcon,
};

export default icons;
