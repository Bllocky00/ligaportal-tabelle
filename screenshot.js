const { firefox } = require('playwright');

(async() => {

    const browser = await firefox.launch({
        headless: true
    });

    const page = await browser.newPage({
        viewport: {
            width: 1400,
            height: 2000
        }
    });

    await page.goto(
        'https://www.ligaportal.at/ooe/1-klasse/1-klasse-nord-ost/tabelle',
        {
            waitUntil: 'networkidle'
        }
    );

    await page.screenshot({
        path: 'tabelle.png',
        fullPage: true
    });

    await browser.close();

})();
