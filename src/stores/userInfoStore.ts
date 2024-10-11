import { writable, type Writable } from 'svelte/store';

import { type UserInfo } from '../types/user.type';

export const userInfo: Writable<UserInfo> = writable({
	user_id: undefined,
	access_token: undefined,
	refresh_token: undefined
});

userInfo.subscribe((value) => sessionStorage.setItem('user', JSON.stringify(value)));
