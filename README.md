# Encrypt Decrypt Project
This is a JavaScript project from Codecademy involving methods in classes.

## Instructions
**Purpose:** Make a shift cipher that takes a plain text message and shifts each letter forward in the alphabet by a given number.
- Create a class **ShiftCipher** that takes the numerical value of the shift as a constructor parameter. The class should have two methods.
- Method **encrypt()**: takes a plain text string and returns a capitalized string with each letter shifted forward in the alphabet based on the set shift value.
- Method **decrypt**: takes an encrypted message and returns a lower case string with each letter shifted back in the alphabet based on the set shift value.
- In both methods, any character outside the alphabet should remain the same.
- If a character is shifted outside the alphabet in either direction it should be wrapped around to the other side. For example, encrypting a y with a shift of 4 results in C and decrypting an A with a shift of 1 result in z.

## Thoughts After the Project
- I struggled a bit working through how to make the alphabet loop around to the other side, but managed to increment a loop so it would catch when the index hit one end and loop it around.
- I had a feeling before I looked at the codecademy solution that theres would be much cleaner than mine.
    - Definitely disheartened when I see that I have overthought the code, or just had no concept of what it should look like.