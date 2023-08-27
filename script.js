$(document).ready(function () {
  const resultTable = $("#resultTable");
  const data = [];

  $("#hitungButton").click(function () {
    const nama = $("#nama").val();
    const mataKuliah = $("#mataKuliah").val();
    const grade = $("#grade").val();

    if (!nama || !mataKuliah || !grade) {
      alert("Semua field harus diisi!");
      return;
    }

    let nilai = 0;
    switch (grade) {
      case "A":
        nilai = 4;
        break;
      case "B":
        nilai = 3;
        break;
      case "C":
        nilai = 2;
        break;
      case "D":
        nilai = 1;
        break;
      case "E":
        nilai = 0;
        break;
    }

    const rataRata = nilai.toFixed(2);

    const newData = {
      nama: nama,
      mataKuliah: mataKuliah,
      grade: grade,
      rataRata: rataRata,
    };

    data.push(newData);

    renderTable();

    $("#nama").val("");
    $("#mataKuliah").val("");
    $("#grade").val("");
  });

  function renderTable() {
    resultTable.html(`
      <table class="table table-bordered border-dark">
        <thead>
          <tr>
            <th>Nama</th>
            <th>Mata Kuliah</th>
            <th>Grade</th>
            <th>Nilai Rata-rata</th>
          </tr>
        </thead>
        <tbody>
          ${data
            .map(
              (entry) => `
            <tr>
              <td>${entry.nama}</td>
              <td>${entry.mataKuliah}</td>
              <td>${entry.grade}</td>
              <td>${entry.rataRata}</td>
            </tr>
          `
            )
            .join("")}
        </tbody>
      </table>
    `);
  }
});
