import { useState, useEffect } from 'react';
import { Title } from './Home.styled';
import { getTrending } from '../../Api/apiService';
import { Loader } from 'components/Loader/Loader';
import { MovieLists } from './../../components/MovieLists/MovieLists';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getTrending().then(data => {
      setTrendMovies(data.results);
      setIsLoading(false);
    });
  }, []);

  return (
    <main>
      <Title>Top Movies for today</Title>
      <MovieLists list={trendMovies} />
      {isLoading && <Loader />}
    </main>
  );
};
export default Home;
