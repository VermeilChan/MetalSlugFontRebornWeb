document.addEventListener("DOMContentLoaded", function () {
    const fontSelect = document.getElementById('font');
    const colorSelect = document.getElementById('color');

    if (fontSelect) {
        fontSelect.addEventListener('change', updateColorOptions);
    }

    const colorOptionsMap = {
        'Blue': 'Blue',
        'Orange-1': 'Orange 1',
        'Orange-2': 'Orange 2',
        'Yellow': 'Yellow'
    };

    function updateColorOptions() {
        const selectedFont = fontSelect.value;
        const colorMap = {
            '1': ['Blue', 'Orange-1', 'Orange-2'],
            '2': ['Blue', 'Orange-1', 'Orange-2'],
            '3': ['Blue', 'Orange-1'],
            '4': ['Blue', 'Orange-1', 'Yellow'],
            '5': ['Orange-1']
        };

        const availableColors = colorMap[selectedFont] || [];
        let colorOptionsHTML = '';

        availableColors.forEach(color => {
            if (colorOptionsMap.hasOwnProperty(color)) {
                colorOptionsHTML += `<option value="${color.toLowerCase()}">${colorOptionsMap[color]}</option>`;
            }
        });

        colorSelect.innerHTML = colorOptionsHTML;
    }

    if (performance.getEntriesByType("navigation")[0]?.type === "reload" && window.location.pathname === '/result') {
        window.location.href = "/";
    }
});
