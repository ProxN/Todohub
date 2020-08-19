import { ReactComponent as DocIcon } from '../../assets/icons/doc.svg';
import { ReactComponent as HomeIcon } from '../../assets/icons/home.svg';
import { ReactComponent as SettingsIcon } from '../../assets/icons/settings.svg';
import { ReactComponent as CloudyIcon } from '../../assets/icons/cloudy.svg';
import { ReactComponent as ArrowNext } from '../../assets/icons/arrowNext.svg';
import { ReactComponent as ArrowBack } from '../../assets/icons/arrowBack.svg';
import { ReactComponent as Close } from '../../assets/icons/close.svg';
import { ReactComponent as PlusIcon } from '../../assets/icons/plus.svg';
import { ReactComponent as ClockIcon } from '../../assets/icons/clock.svg';
import { ReactComponent as PlayIcon } from '../../assets/icons/play.svg';
import { ReactComponent as VolumeIcon } from '../../assets/icons/volume.svg';
import { ReactComponent as PauseIcon } from '../../assets/icons/pause.svg';
import { ReactComponent as MuteIcon } from '../../assets/icons/mute.svg';

const icons: { [key: string]: React.FC } = {
  document: DocIcon,
  home: HomeIcon,
  settings: SettingsIcon,
  cloudy: CloudyIcon,
  arrowNext: ArrowNext,
  arrowBack: ArrowBack,
  close: Close,
  plus: PlusIcon,
  clock: ClockIcon,
  play: PlayIcon,
  pause: PauseIcon,
  volume: VolumeIcon,
  mute: MuteIcon,
};

export default icons;
