import express from 'express';
import { Product } from './types';

const app = express();

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  res.setHeader('Access-Control-Allow-Credentials', 'true');

  next();
});

const port = 8800;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/products', (req, res) => {
  res.send(products);
});

app.get('/products/:id', (req, res) => {
  const id = req.params.id;
  const product = products.find((product) => product.id === id);

  if (!product) return res.status(404).send();

  res.send(product);
});

const products: Product[] = [
  {
    id: '1',
    company: {
      name: 'Apple',
      logo: 'apple.png',
    },
    title: 'iPhone 12',
    description: 'The iPhone 12 is a smartphone designed, developed, and marketed by Apple Inc.',
    price: {
      currency: 'USD',
      value: 799,
      discount: 0,
    },
    images: [
      {
        thumb: 'iphone-12-thumb.png',
        image: 'iphone-12.png',
      },
    ],
    stock: 100,
  },
  {
    id: '2',
    company: {
      name: 'Apple',
      logo: 'apple.png',
    },
    title: 'iPhone 12',
    description: 'The iPhone 12 is a smartphone designed, developed, and marketed by Apple Inc.',
    price: {
      currency: 'USD',
      value: 799,
      discount: 0,
    },
    images: [
      {
        thumb: 'iphone-12-thumb.png',
        image: 'iphone-12.png',
      },
    ],
    stock: 100,
  },
  {
    id: '3',
    company: {
      name: 'Apple',
      logo: 'apple.png',
    },
    title: 'iPhone 12',
    description: 'The iPhone 12 is a smartphone designed, developed, and marketed by Apple Inc.',
    price: {
      currency: 'USD',
      value: 799,
      discount: 0,
    },
    images: [
      {
        thumb: 'iphone-12-thumb.png',
        image: 'iphone-12.png',
      },
    ],
    stock: 100,
  },
  {
    id: '4',
    company: {
      name: 'Apple',
      logo: 'apple.png',
    },
    title: 'iPhone 12',
    description: 'The iPhone 12 is a smartphone designed, developed, and marketed by Apple Inc.',
    price: {
      currency: 'USD',
      value: 799,
      discount: 0,
    },
    images: [
      {
        thumb: 'iphone-12-thumb.png',
        image: 'iphone-12.png',
      },
    ],
    stock: 100,
  },
  {
    id: '5',
    company: {
      name: 'Apple',
      logo: 'apple.png',
    },
    title: 'iPhone 12',
    description: 'The iPhone 12 is a smartphone designed, developed, and marketed by Apple Inc.',
    price: {
      currency: 'USD',
      value: 799,
      discount: 0,
    },
    images: [
      {
        thumb: 'iphone-12-thumb.png',
        image: 'iphone-12.png',
      },
    ],
    stock: 100,
  },
  {
    id: '6',
    company: {
      name: 'Apple',
      logo: 'apple.png',
    },
    title: 'iPhone 12',
    description: 'The iPhone 12 is a smartphone designed, developed, and marketed by Apple Inc.',
    price: {
      currency: 'USD',
      value: 799,
      discount: 0,
    },
    images: [
      {
        thumb: 'iphone-12-thumb.png',
        image: 'iphone-12.png',
      },
    ],
    stock: 100,
  },
  {
    id: '17',
    company: {
      name: 'Apple',
      logo: 'apple.png',
    },
    title: 'iPhone 12',
    description: 'The iPhone 12 is a smartphone designed, developed, and marketed by Apple Inc.',
    price: {
      currency: 'USD',
      value: 799,
      discount: 0,
    },
    images: [
      {
        thumb: 'iphone-12-thumb.png',
        image: 'iphone-12.png',
      },
    ],
    stock: 100,
  },
  {
    id: '81',
    company: {
      name: 'Apple',
      logo: 'apple.png',
    },
    title: 'iPhone 12',
    description: 'The iPhone 12 is a smartphone designed, developed, and marketed by Apple Inc.',
    price: {
      currency: 'USD',
      value: 799,
      discount: 0,
    },
    images: [
      {
        thumb: 'iphone-12-thumb.png',
        image: 'iphone-12.png',
      },
    ],
    stock: 100,
  },
  {
    id: '9',
    company: {
      name: 'Apple',
      logo: 'apple.png',
    },
    title: 'iPhone 12',
    description: 'The iPhone 12 is a smartphone designed, developed, and marketed by Apple Inc.',
    price: {
      currency: 'USD',
      value: 799,
      discount: 0,
    },
    images: [
      {
        thumb: 'iphone-12-thumb.png',
        image: 'iphone-12.png',
      },
    ],
    stock: 100,
  },
  {
    id: '52',
    company: {
      name: 'Apple',
      logo: 'apple.png',
    },
    title: 'iPhone 12',
    description: 'The iPhone 12 is a smartphone designed, developed, and marketed by Apple Inc.',
    price: {
      currency: 'USD',
      value: 799,
      discount: 0,
    },
    images: [
      {
        thumb: 'iphone-12-thumb.png',
        image: 'iphone-12.png',
      },
    ],
    stock: 100,
  },
  {
    id: '45',
    company: {
      name: 'Apple',
      logo: 'apple.png',
    },
    title: 'iPhone 12',
    description: 'The iPhone 12 is a smartphone designed, developed, and marketed by Apple Inc.',
    price: {
      currency: 'USD',
      value: 799,
      discount: 0,
    },
    images: [
      {
        thumb: 'iphone-12-thumb.png',
        image: 'iphone-12.png',
      },
    ],
    stock: 100,
  },
];
