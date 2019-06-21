export interface Playlists {
  paging: Paging;
  data?: (DataEntity)[] | null;
  name: string;
}
export interface Paging {
  previous: string;
}
export interface DataEntity {
  url: string;
  owner: Owner;
  name: string;
  key: string;
  slug: string;
}
export interface Owner {
  url: string;
  username: string;
  name: string;
  key: string;
  pictures: Pictures;
}
export interface Pictures {
  medium: string;
  i320wx320h: string;
  extra_large: string;
  large: string;
  i640wx640h: string;
  medium_mobile: string;
  small: string;
  thumbnail: string;
}

