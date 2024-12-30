// Select DOM elements
const bookForm = document.getElementById("bookForm");
const bookTableBody = document.querySelector("#bookTable tbody");

// Add book to the table
bookForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get book details
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;

  // Create a new row
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${title}</td>
    <td>${author}</td>
    <td><button class="delete-btn">Delete</button></td>
  `;

  // Append the row to the table
  bookTableBody.appendChild(row);

  // Reset the form
  bookForm.reset();

  // Add delete functionality
  row.querySelector(".delete-btn").addEventListener("click", function () {
    row.remove();
  });
});
