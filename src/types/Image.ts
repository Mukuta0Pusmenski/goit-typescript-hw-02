export interface Image {
  id: string;
  urls: {
    small: string;
    full: string;
  };
  alt_description?: string; // Додай `?`, щоб вказати, що це поле може бути відсутнім
}
