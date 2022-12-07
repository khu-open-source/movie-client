import { atom } from 'recoil';

export const Account = atom({
  key: 'account',
  default: [
    {
      id: 'master',
      email: 'master@master.com',
      password: 'master',
    },
  ],
});

export const isLogined = atom({
  key: 'isLogined',
  default: false,
});
