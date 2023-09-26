 function saveLanguagePreference() {
            const languageSelect = document.getElementById('language');
            const selectedLanguage = languageSelect.value;

            // Store the selected language in Session Storage
            sessionStorage.setItem('userLanguage', selectedLanguage);

            alert('Language preference saved!');
        }

        // Check if there is a stored language preference on page load
        window.onload = function () {
            const storedLanguage = sessionStorage.getItem('userLanguage');
            if (storedLanguage) {
                const languageSelect = document.getElementById('language');
                languageSelect.value = storedLanguage;
            }
        };