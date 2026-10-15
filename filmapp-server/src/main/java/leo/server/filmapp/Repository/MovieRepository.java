package leo.server.filmapp.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import leo.server.filmapp.Entity.Account;
import leo.server.filmapp.Entity.Movie;

@Repository 
public interface MovieRepository extends JpaRepository<Movie, Integer> {
  Optional<Account> findFirstByTitle(String title);
}
