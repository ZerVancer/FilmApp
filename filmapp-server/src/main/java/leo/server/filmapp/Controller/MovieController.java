package leo.server.filmapp.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import leo.server.filmapp.Entity.Movie;
import leo.server.filmapp.Service.MovieService;

@RestController 
@RequestMapping("/movie")
public class MovieController {

  @Autowired 
  private MovieService movieService;
  
  @GetMapping("/all")
  public ResponseEntity<List<Movie>> getMovies() {
    List<Movie> list = movieService.getAllMovies();

    return ResponseEntity.ok(list);
  }
}
