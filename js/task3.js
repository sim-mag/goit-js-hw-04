// Zadanie 3. Profil gracza

const profile = {
  username: "Jacob",
  playTime: 300,

  // metoda zmieniająca username
  changeUsername(newName) {
    this.username = newName;
  },

  // metoda aktualizująca play time
  updatePlayTime(hours) {
    this.playTime += hours;
  },

  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
  },
};

console.log("These are the results of Task 3");
console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
