import { Film } from '../entities/someApi';

export const converter = (data) => (
  data.map((dataItem) => new Film({
    id: dataItem.id,
    title: dataItem.title,
    description: dataItem.overview,
    image: dataItem.poster_path,
  }))
);
