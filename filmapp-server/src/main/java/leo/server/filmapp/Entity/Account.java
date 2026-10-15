package leo.server.filmapp.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity 
@Data
@Getter 
@Setter 
@NoArgsConstructor
public class Account {
    @Id 
    @GeneratedValue 
    private Integer id;
    private String name;
    private String password;
}