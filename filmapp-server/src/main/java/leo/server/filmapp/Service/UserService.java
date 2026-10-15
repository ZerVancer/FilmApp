package leo.server.filmapp.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import leo.server.filmapp.Entity.Account;
import leo.server.filmapp.Repository.UserRepository;

@Service 
public class UserService {
  
  @Autowired 
  private UserRepository userRepository;

  public Account addUser(Account user) {
    return userRepository.save(user);
  }

  public Account getUser(String name, String password)  {
    return userRepository.findFirstByNameAndPassword(name, password).orElse(null);
  }

  public Account getUserById(Integer id) {
    return userRepository.findById(id).orElse(null);
  }

  public List<Account> getAllUsers() {
    return userRepository.findAll();
  }

  public boolean existsUser(String name) {
    return userRepository.existsByName(name);
  }
}
