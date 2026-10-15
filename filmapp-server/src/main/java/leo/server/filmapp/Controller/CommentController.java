package leo.server.filmapp.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import leo.server.filmapp.Service.CommentService;

@RestController 
@RequestMapping("/comment")
public class CommentController {

  @Autowired 
  private CommentService commentService;
  
}
