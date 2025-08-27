// Wait for the HTML document to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // DOM element references
    const memeContent = document.getElementById('meme-content');
    const loadingState = document.getElementById('loading-state');
    const historyList = document.getElementById('history-list');
    const historyLoadingState = document.getElementById('history-loading-state');

    /**
     * Updates the main display area with the data of a specific meme.
     * @param {object} memeData - The meme object from meme_history.json.
     */
    function updateMemeDisplay(memeData) {
        // Update image
        document.getElementById('meme-image').src = memeData.imageUrl;

        // Update text content
        const caption = memeData.caption.text0 + (memeData.caption.text1 ? ` | ${memeData.caption.text1}` : '');
        document.getElementById('meme-caption').textContent = caption;
        document.getElementById('commit-author').textContent = memeData.author;
        document.getElementById('commit-id').textContent = memeData.commitId.substring(0, 7); // Display short SHA
        document.getElementById('commit-message').textContent = memeData.commitMessage;
        document.getElementById('template-id').textContent = memeData.templateId;

        // Update link
        document.getElementById('imgflip-link').href = memeData.pageUrl;

        // Show the content and hide the loading spinner
        loadingState.classList.add('hidden');
        memeContent.classList.remove('hidden');
    }

    /**
     * Fetches meme history from the JSON file and populates the page.
     */
    async function loadMemeHistory() {
        try {
            // Add a cache-busting query parameter to ensure we always get the latest file
            const response = await fetch(`meme_history.json?t=${new Date().getTime()}`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const memes = await response.json();

            // Clear the loading state from the history list
            historyList.innerHTML = '';

            if (memes.length > 0) {
                // Display the latest meme (the first one in the array) by default
                updateMemeDisplay(memes[0]);

                // Populate the history list
                memes.forEach((meme, index) => {
                    const listItem = document.createElement('li');
                    listItem.className = 'p-3 rounded-md cursor-pointer transition-colors duration-200 hover:bg-gray-700';
                    listItem.innerHTML = `
                        <p class="font-semibold truncate">${meme.commitMessage}</p>
                        <p class="text-xs text-gray-400">by ${meme.author} - ${new Date(meme.timestamp).toLocaleString()}</p>
                    `;

                    // Add a click event listener to load this meme into the main display
                    listItem.addEventListener('click', () => {
                        // Optional: Add an 'active' class to the clicked item
                        document.querySelectorAll('#history-list li').forEach(li => li.classList.remove('bg-indigo-600'));
                        listItem.classList.add('bg-indigo-600');
                        updateMemeDisplay(meme);
                    });

                    // Highlight the first item by default
                    if (index === 0) {
                        listItem.classList.add('bg-indigo-600');
                    }

                    historyList.appendChild(listItem);
                });
            } else {
                throw new Error('Meme history is empty.');
            }

        } catch (error) {
            console.error("Error loading meme data:", error);
            // Display an error message on the page
            loadingState.innerHTML = `<p class="text-red-400">Error: Could not load meme history. <br> ${error.message}</p>`;
            historyLoadingState.textContent = 'Failed to load.';
        }
    }

    // Initial call to load the data when the page loads
    loadMemeHistory();
});