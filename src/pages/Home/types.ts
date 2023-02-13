export interface Item {
  number: number;
  url: string;
  title: string;
  created_at: string;
  body: string;
  formattedBody: string;
  formattedRelativeTime: string;
}

export interface ResponseData {
  items: Item[];
}
