import dao.ProductDAO;
import dao.UserDAO;
import java.util.List;
import model.Product;
import model.User;

public class Main {
    public static void main(String[] args) {
        UserDAO userDAO = new UserDAO();
        ProductDAO productDAO = new ProductDAO();

        System.out.println("Users:");
        List<User> users = userDAO.getAllUsers();
        for (User u : users) {
            System.out.println(u.getId() + ": " + u.getName());
        }

        System.out.println("\nProducts:");
        List<Product> products = productDAO.getAllProducts();
        for (Product p : products) {
            System.out.println(p.getId() + ": " + p.getName() + " - " + p.getPrice());
        }
    }
}

