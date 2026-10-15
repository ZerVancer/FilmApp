package leo.server.filmapp.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import leo.server.filmapp.Entity.Account;
import leo.server.filmapp.Service.UserService;

@RestController 
@RequestMapping("/user")
public class UserController {

  @Autowired 
  private UserService userService;

  @PostMapping("/register")
  public ResponseEntity<Account> addUser(@RequestBody Account user) {
    boolean exists = userService.existsUser(user.getName());

    if (exists) {
      return ResponseEntity.ok(null);
    }

    Account saved = userService.addUser(user);

    return ResponseEntity.ok(saved);
  }

  @GetMapping ("/getUser={name}&{password}")
  public ResponseEntity<Account> getUser(@PathVariable String name, @PathVariable String password) {
    Account saved = userService.getUser(name, password);

    return ResponseEntity.ok(saved);
  }

  @GetMapping("/getUserById={id}")
  public ResponseEntity<Account> getUserById(@PathVariable Integer id) {
    Account gotten = userService.getUserById(id);

    return ResponseEntity.ok(gotten);
  }

  @GetMapping("/all")
  public ResponseEntity<List<Account>> getAllUsers() {
    List<Account> list = userService.getAllUsers();

    return ResponseEntity.ok(list);
  }
}
