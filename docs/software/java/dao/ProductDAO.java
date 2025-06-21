package dao;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import model.Product;
import utils.DBConnection;

public class ProductDAO {

    public List<Product> getAllProducts() {
        List<Product> products = new ArrayList<>();
        String query = "SELECT * FROM products";

        try (Connection conn = DBConnection.getConnection();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(query)) {

            while (rs.next()) {
                products.add(new Product(
                    rs.getInt("id"),
                    rs.getString("name"),
                    rs.getDouble("price")
                ));
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return products;
    }
}


