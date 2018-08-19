import { Selector } from 'testcafe';
import util from 'util';

fixture('Getting Started')
  .page('http://localhost:3000');

test('My first test', async t => {
  await t
    .takeScreenshot('virtual-exchange-testcafe.png');
});

test('Page looks ok', async t => {
  await t
    .expect(Selector('title').innerText).eql('Wirtualny kantor')
    .expect(Selector('header h2').textContent).eql('Wirtualny kantor')
    .expect(Selector('button').nth(0).textContent).eql('anuluj')
    .expect(Selector('button').nth(1).textContent).eql('Wykonaj');
});

test('Extract element attributes', async t => {
  const table = Selector('table');
  const dump = await table();
  global.console.log(util.inspect(dump, 4));
});

test('check table data', async t => {
  const th = Selector('table thead th');
  const tr = Selector('table tbody tr');
  await t
    .expect(th.nth(0).textContent).eql('Waluta')
    .expect(th.nth(1).textContent).eql('Kupno')
    .expect(th.nth(2).textContent).eql('Sprzedaż')
    .expect(tr.count).eql(0, 'Table is empty');
});

test('Select buy currency', async t => {
  await t
    .takeScreenshot('select-1.png')
    .click(Selector('label[for="buy-currency"]').parent().find('[role="button"]'))
    .click(Selector('#menu-buy-currency li[data-value=USD]'))
    .expect(Selector('[name=buy-currency]').value).eql('USD')
    .takeScreenshot('select-2.png');
});

test.only('Select amount', async t => {
  await t
    .takeScreenshot('amount-1.png')
    .typeText('[name=amount]', '123.45')
    .expect(Selector('[name=amount]').value).eql('123.45')
    .takeScreenshot('amount-2.png');
});
