

import { test, expect } from '@playwright/test';

test('sample API test', async ({ request }) => {
    const response = await request.get('https://api.github.com');
    expect(response.status()).toBe(200);



});

