// Get modal elements
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");
const closeButton = document.querySelector(".close-btn"); // Select the close button

// Variable to track if the modal is open
let modalOpen = false;
let currentImage = null;  // To store the current image element

// Function to toggle modal visibility
function toggleInfo(element) {
    // If modal is already open and the same image is clicked, close the modal
    if (modalOpen && currentImage === element) {
        closeModal();
    } else {
        // Otherwise, open the modal with new content
        showInfo(element);
    }
}

// Function to show the modal with image and content
function showInfo(element) {
    // Clear previous content
    modalBody.innerHTML = "";

    // Create an image element for the modal
    const img = document.createElement("img");
    img.src = element.src;  // Set the image source from the clicked element
    img.alt = element.alt;  // Set the image alt from the clicked element
    img.style.width = "100%";  // Set the image to fit the modal width
    img.style.borderRadius = "8px";  // Optional: Style to add border-radius

    // Try to get the data-info attribute
    let content = element.getAttribute("data-info");

    // If there's no data-info, fallback to the textContent
    if (!content) {
        content = element.textContent;
    }

    // If content exists, process it
    if (content) {
        // Split the content by <br><br> (to handle multiple paragraphs)
        const formattedInfo = content.split('<br><br>').map(paragraph => {
            const p = document.createElement("p");
            p.innerHTML = paragraph; // Use innerHTML to preserve the line breaks
            return p;
        });

        // Append each paragraph to the modal body
        formattedInfo.forEach(p => modalBody.appendChild(p));
    }

    // Add the image to the modal body
    modalBody.insertBefore(img, modalBody.firstChild);

    // Display the modal with a fade-in effect
    modal.style.display = "block";
    modal.style.opacity = "0";
    setTimeout(() => {
        modal.style.opacity = "1";
    }, 10);

    // Update the modal open state and store the current image
    modalOpen = true;
    currentImage = element;
}

// Function to close the modal
function closeModal() {
    // Hide the modal with a smooth fade-out effect
    modal.style.opacity = "0";
    setTimeout(() => {
        modal.style.display = "none";
    }, 300); // Match the fade-out duration

    // Update the modal open state and reset current image
    modalOpen = false;
    currentImage = null;
}

// Attach the closeModal function directly to the close button
closeButton.addEventListener("click", closeModal);

// Close the modal if the user clicks outside of it
window.onclick = function (event) {
    if (event.target === modal) {
        closeModal();
    }
}
