export interface Image {
  id: string;
  urls: {
    small: string;
    full: string;
  };
  alt_description?: string; // `?` означає, що це поле опціональне
}
