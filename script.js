public class User {
  private int userId;
  private String username;
  private String password;
  private double weightInPounds;
  private double heightInInches;
  private String dietaryPreference;

  public User(int userId, String username, String password, double weightInPounds, double heightInInches, String dietaryPreference) {
      this.userId = userId;
      this.username = username;
      this.password = password;
      this.weightInPounds = weightInPounds;
      this.heightInInches = heightInInches;
      this.dietaryPreference = dietaryPreference;
  }

  // Getters and setters for the attributes (to access and modify them)

  public double calculateBMI() {
      if (heightInInches > 0) {
          return (weightInPounds / (heightInInches * heightInInches)) * 703;
      }
      return 0; // Or handle the case of zero height appropriately
  }

  public String getDietaryPreference() {
      return dietaryPreference;
  }

  public int getUserId() {
      return userId;
  }

  // ... more methods for updating preferences, etc.
}