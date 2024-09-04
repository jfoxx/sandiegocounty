export default function decorate(block) {

    // Create the outer div with id "home-translate"
    var homeTranslateDiv = document.createElement('div');
    homeTranslateDiv.id = 'home-translate';

    // Create the inner div with class "translate-home googletranslator"
    var translateHomeDiv = document.createElement('div');
    translateHomeDiv.className = 'translate-home googletranslator';

    // Create the conditional comment for IE 9 and above
    var conditionalCommentStart = document.createComment('[if gt IE 9 ]>');
    var conditionalCommentEnd = document.createComment('<![endif]');

    // Create the div with id "google_translator" and class "boxshadow"
    var googleTranslatorDiv = document.createElement('div');
    googleTranslatorDiv.id = 'google_translator';
    googleTranslatorDiv.className = 'boxshadow';

    // Create the inner div for Google Translate with id "google_translate_element"
    var googleTranslateElementDiv = document.createElement('div');
    googleTranslateElementDiv.id = 'google_translate_element';

    // Append the googleTranslateElementDiv to googleTranslatorDiv
    googleTranslatorDiv.appendChild(googleTranslateElementDiv);

    // Create the paragraph element for the script tag
    var scriptParagraph = document.createElement('p');

    // Create the script tag for Google Translate initialization function
    var scriptTranslateElementInit = document.createElement('script');
    scriptTranslateElementInit.type = 'text/javascript';
    scriptTranslateElementInit.innerHTML = `
    function googleTranslateElementInit() {
        new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
    }
    `;

    // Create the script tag to load the Google Translate API
    var scriptGoogleTranslate = document.createElement('script');
    scriptGoogleTranslate.type = 'text/javascript';
    scriptGoogleTranslate.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';

    // Append the script tags to the paragraph element
    scriptParagraph.appendChild(scriptTranslateElementInit);
    scriptParagraph.appendChild(scriptGoogleTranslate);

    // Append the paragraph to googleTranslatorDiv
    googleTranslatorDiv.appendChild(scriptParagraph);

    // Append the conditional comments and googleTranslatorDiv to translateHomeDiv
    translateHomeDiv.appendChild(conditionalCommentStart);
    translateHomeDiv.appendChild(googleTranslatorDiv);
    translateHomeDiv.appendChild(conditionalCommentEnd);

    // Append the translateHomeDiv to homeTranslateDiv
    homeTranslateDiv.appendChild(translateHomeDiv);

    block.textContent = '';
    block.append(homeTranslateDiv);
}


