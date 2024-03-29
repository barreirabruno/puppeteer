const puppeteer = require('puppeteer');

(async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto('https://www.google.com/');
	page.on('dialog', async dialog => {
		console.log(dialog.message());
		await dialog.dismiss();
	});
	await page.evaluate(() => alert('This message is inside an alert box'));
	await browser.close();

})();
