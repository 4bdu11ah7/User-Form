document.addEventListener("DOMContentLoaded", function () {
  loadUsers();

  document.getElementById("userForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(this);

    fetch("insert.php", {
      method: "POST",
      body: formData
    })
      .then(() => {
        this.reset();
        loadUsers();
      });
  });
});

function loadUsers() {
  fetch("fetch.php")
    .then(res => res.json())
    .then(data => {
      const tbody = document.querySelector("#userTable tbody");
      tbody.innerHTML = "";
      data.forEach(row => {
        tbody.innerHTML += `
          <tr>
            <td>${row.id}</td>
            <td>${row.name}</td>
            <td>${row.age}</td>
            <td>${row.status}</td>
            <td><button onclick="toggleStatus(${row.id})">Toggle</button></td>
          </tr>`;
      });
    });
}

function toggleStatus(id) {
  fetch("toggle.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: `id=${id}`
  }).then(() => loadUsers());
}
