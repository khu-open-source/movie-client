import { atom } from 'recoil';

const enteredTitleAtom = atom({
  key: 'enteredTitle',
  default: '',
});

export { enteredTitleAtom };
