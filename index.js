// currentUser
const currentUser = 'Kerry Onguso';
// welcomeMessage
// 1) contains "Welcome to Flatbook, "
// 2) contains the value of the 'currentUser' variable
// 3) ends with an exclamation point!
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;
// excitedWelcomeMessage
// 4) contains "WELCOME TO FLATBOOK, "
// 5) contains the value of the 'currentUser' variable
// 6) ends with an exclamation point
const excitedWelcomeMessage = welcomeMessage.toUpperCase();
// shortGreeting
// 7) contains "Welcome, "
// 8) contains the first initial of the name stored in the 'currentUser' variable
// 9) ends with an exclamation point
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;