let capitalize = require('../scripts/capitalize');

test ('check if strings first letter is capitalized', () => {
    expect(capitalize('dsjfdlkjfdsla')).toMatch(/^[A-Z][a-z0-9_-]/);
})