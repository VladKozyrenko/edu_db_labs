import dao.UserDAO;
import model.User;

import java.util.List;

public class Main {
    public static void main(String[] args) {
        UserDAO userDAO = new UserDAO();

        // Додати нового користувача
        User user = new User(0, "Ivan Petrenko", "ivan@example.com");
        userDAO.insertUser(user);

        // Вивести всіх користувачів
        List<User> users = userDAO.getAllUsers();
        for (User u : users) {
            System.out.println(u.getId() + " | " + u.getName() + " | " + u.getEmail());
        }
    }
}

