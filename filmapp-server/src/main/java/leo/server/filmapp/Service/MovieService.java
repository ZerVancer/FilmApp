package leo.server.filmapp.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import leo.server.filmapp.Entity.Movie;
import leo.server.filmapp.Repository.MovieRepository;

@Service 
public class MovieService {

  @Autowired 
  private MovieRepository movieRepository;
  
  public List<Movie> getAllMovies() {
    return movieRepository.findAll();
  }
}
