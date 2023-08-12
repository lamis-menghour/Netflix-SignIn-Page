#Netflix Sign-In Page with User Data Validation

This repository contains the code for a sign-in page with user data validation for a mock Netflix login experience. Users can enter their email and password to sign in. The code ensures that the entered data is valid and corresponds to the stored user data.

Features:
- User data is provided in a mock database stored in localStorage.
- Email and password validation functions ensure that the user's input is accurate.
- Sign-in functionality compares user input to stored user data and provides appropriate feedback.

User Data: The user data is stored in the localStorage and is used for sign-in validation. The data includes:
- Username
- Email
- Password
  
Validation:
- Email Validation:
Email validation ensures that the entered email format is correct. An appropriate message is displayed if the format is incorrect.

- Password Validation:
Password validation checks the length of the entered password and ensures it falls within a specified range. An error message is displayed if the password length is not within the valid range.

Learn More:
Clicking on the "Learn more" link provides additional details about the security measures in place on the sign-in page.

Please note that this is a simplified mock implementation for educational purposes and does not provide actual user authentication. In a real-world scenario, more robust security measures would be required.
