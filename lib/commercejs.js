import Commerce from '@chec/commerce.js';

// Init Commerce.js SDK

const commerce = new Commerce(`${process.env.CHEC_EXAMPLE_PUBLIC_API}`);

export default commerce;
