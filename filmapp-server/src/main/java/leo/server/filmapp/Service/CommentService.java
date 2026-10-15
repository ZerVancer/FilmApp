package leo.server.filmapp.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import leo.server.filmapp.Repository.CommentRepository;

@Service 
public class CommentService {

  @Autowired 
  private CommentRepository commentRepository;
  
}
