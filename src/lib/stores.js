import { writable } from 'svelte/store';

export const bundle = writable(null);
export const apiStatus = writable(null);

export const orderTicketForm = writable({
  count: 1,
  email: '',
  tickets: [],
  paymentMethod: 'card',
  tipPercent: 10,
  tipCustom: '',
  __v: 2
});

export const userData = writable({
  favoriteEvents: [],
  hpTrack: 'top',
  orders: [],
  tickets: [],
});

export const userDataLocal = writable({
  tickets: [],
  orders: [],
})

export const layouts = writable({ test: null })

export const loadInfo = writable({ loaded: false })

export const schedulePref = writable({
  stage: null,
  track: null,
  time: '2',
  tracks: [],
  showDescriptions: false
});
