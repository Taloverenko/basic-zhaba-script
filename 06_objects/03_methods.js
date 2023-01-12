let me = {
  birthDate: { year: 1989, month: 5, day: 18 },
  getAge() {
    let now = new Date();
    let born = new Date(
      this.birthDate.year,
      this.birthDate.month + 1,
      this.birthDate.day
    );
    let diffInMilliseconds = now.getTime() - born.getTime();
    return Math.floor(diffInMilliseconds / 1000 / 60 / 60 / 24 / 365.25);
  }
  // and other properties..
}

console.log('Мне сейчас', me.getAge());