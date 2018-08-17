import { Selector } from 'testcafe';

fixture `Getting Started`
  .page `https://www.google.com`;

test('My first test', async t => {
  await t
    .typeText('[name=q]', 'TestCafe')
    .click('[name=btnK]')
    .takeScreenshot('google-testcafe.png');
});
