export interface Model {
  data: (DataEntity)[];
  name: string;
  paging?: Paging | null;
}

export interface DataEntity {
  tags?: (TagsEntity | null)[] | null;
  play_count?: number | null;
  user?: User | null;
  key: string;
  created_time?: string | null;
  audio_length?: number | null;
  slug: string;
  favorite_count?: number | null;
  listener_count?: number | null;
  name: string;
  url: string;
  pictures?: Pictures | null;
  repost_count?: number | null;
  updated_time?: string | null;
  comment_count?: number | null;
  owner?: Owner | null;
}

export interface TagsEntity {
  url: string;
  name: string;
  key: string;
}

export interface User {
  url: string;
  username: string;
  name: string;
  key: string;
  pictures: Pictures;
}

export interface Pictures {
  medium: string;
  i768wx768h?: string | null;
  i320wx320h: string;
  extra_large: string;
  large: string;
  i640wx640h: string;
  medium_mobile: string;
  small: string;
  i1024wx1024h?: string | null;
  thumbnail: string;
}


export interface Paging {
  previous: string;
}

export interface Owner {
  url: string;
  username: string;
  name: string;
  key: string;
  pictures: Pictures;
}


