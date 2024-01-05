$(document).ready(function() {
  var today = new Date();
  var birthdayDate = new Date("January 7, 2024 00:00:00");

  if (today > birthdayDate) {
      // Jika sudah setelah tanggal ulang tahun
      showBirthdayContent();
  } else {
      // Jika belum mencapai tanggal ulang tahun
      setClock(birthdayDate);
  }

  function setClock(endtime) {
      var timeinterval = setInterval(function() {
          var t = timeLeft(endtime);
          updateClockDisplay(t);

          if (t.total <= 0) {
              clearInterval(timeinterval);
              showBirthdayContent();
          }
      }, 1000);
  }

  function updateClockDisplay(time) {
      // Fungsi untuk memperbarui tampilan countdown
      $('#countdown-days').text(time.days);
      $('#countdown-hours').text(('0' + time.hours).slice(-2));
      $('#countdown-minutes').text(('0' + time.minutes).slice(-2));
      $('#countdown-seconds').text(('0' + time.seconds).slice(-2));
  }

  function timeLeft(endtime) {
      var t = Date.parse(endtime) - Date.parse(new Date());
      var seconds = Math.floor((t / 1000) % 60);
      var minutes = Math.floor((t / 1000 / 60) % 60);
      var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      var days = Math.floor(t / (1000 * 60 * 60 * 24));

      return {
          'total': t,
          'days': days,
          'hours': hours,
          'minutes': minutes,
          'seconds': seconds
      };
  }

  function showBirthdayContent() {
      // Menampilkan konten ulang tahun setelah countdown selesai
      $("#countdown-message").hide();
      //$("#greeting").show(); // Tidak perlu ini lagi
      // Arahkan ke halaman greeting.html
      window.location.href = "greeting.html";
  }
});
