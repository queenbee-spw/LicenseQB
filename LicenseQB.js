function checkLicense() {
  // Dapatkan domain lisensi pengguna
  var userDomain = window.location.hostname;

  // Daftar domain yang diperbolehkan
  var allowedDomains = ['queenbee.biz.id', 'csa.biz.id', 'domain3.com'];

  // Periksa apakah domain lisensi pengguna ada dalam daftar domain yang diperbolehkan
  if (allowedDomains.indexOf(userDomain) === -1) {
    // Jika tidak cocok, arahkan pengguna ke website pemilik
    window.location.href = 'https://www.queenbee.biz.id';
  }
}
