import { MovieList, MovieLink } from './MovieLists.styled';

import { useLocation } from 'react-router-dom';

export const MovieLists = ({ list }) => {
  const location = useLocation();
  return (
    <MovieList>
      {list.map(movie => (
        <li key={movie.id}>
          <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.original_title || movie.name}
          </MovieLink>
        </li>
      ))}
    </MovieList>
  );
};
