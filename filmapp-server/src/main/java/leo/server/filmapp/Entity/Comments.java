package leo.server.filmapp.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity 
@Data
@Getter 
@Setter 
@NoArgsConstructor
public class Comments {
    @Id 
    @GeneratedValue 
    private Integer id;
    // @ManyToOne
    // @JoinColumn(name = "movieId", referencedColumnName = "id")
    // private Movie movie;
}