import React from 'react';
import { AddToCart } from '../common';

export const PRODUCTS = {
  apple: {
    title: 'Apple',
    desc: 'Sunt id fugiat tempor dolor ullamco culpa enim do quis officia esse ipsum ad. Dolore cupidatat veniam laboris commodo. Ea tempor velit duis duis id quis. Anim et occaecat id excepteur labore consectetur. Commodo veniam aute non laboris officia aliquip sint deserunt deserunt occaecat nostrud. Consequat Lorem sit nisi exercitation occaecat. Excepteur eiusmod reprehenderit excepteur aliquip et laborum do nulla veniam Lorem Lorem.',
    img: ['https://image.freepik.com/free-vector/apple-fruit_7814-312.jpg'],
    price: {
      amount: 100,
      unit: 'Kg',
    },
  },
  banana: {
    title: 'Banana',
    desc: 'Reprehenderit voluptate ad dolore veniam do non dolor. Ut labore ipsum aliquip sunt nostrud quis dolore amet ipsum do. Mollit quis incididunt consequat exercitation ex elit.',
    img: ['https://image.freepik.com/free-vector/banana-vector-bananas-vector-illustration_75817-914.jpg'],
    price: {
      amount: 40,
      unit: 'dozen',
    },
  },
  kiwi: {
    title: 'Kiwi',
    desc: 'Aute aute adipisicing aute mollit dolore aliqua velit eu id dolore. Occaecat ex ullamco eu esse ullamco. Sunt consectetur duis dolor proident incididunt consectetur cillum tempor. Laborum voluptate laboris magna duis adipisicing officia. Qui in ut consectetur culpa irure proident sit id. Consequat irure cupidatat qui qui quis excepteur esse.',
    img: ['https://image.freepik.com/free-vector/kiwifruit-kiwi-slices_161751-301.jpg'],
    price: {
      amount: 250,
      unit: 'dozen',
    },
  },
  orange: {
    title: 'Orange',
    desc: 'Amet sunt eu ut deserunt non deserunt Lorem pariatur. Minim velit pariatur cupidatat nostrud incididunt. Enim nulla proident dolor voluptate nostrud Lorem nostrud nostrud cillum minim. Officia voluptate proident ut velit ipsum aliqua deserunt Lorem quis. Ipsum elit nisi enim deserunt.',
    img: ['https://img.freepik.com/free-vector/hand-drawn-colorful-orange-illustration_53876-2977.jpg?size=626&ext=jpg'],
    price: {
      amount: 148,
      unit: 'dozen',
    },
  },
  pear: {
    title: 'Pear',
    desc: 'In excepteur ullamco aliquip labore exercitation do aliqua Lorem sit exercitation qui fugiat velit. Sit deserunt irure eu consequat sunt veniam. Cupidatat deserunt duis magna cillum amet ullamco id incididunt velit nostrud officia. Irure eu nulla nulla ea irure sint incididunt deserunt laborum commodo.',
    img: ['https://image.freepik.com/free-vector/pear-vector-illustration_8855-175.jpg'],
    price: {
      amount: 128,
      unit: 'Kg',
    },
  },
  blackberry: {
    title: 'Black-Berry',
    desc: 'Officia sit veniam labore esse fugiat ullamco elit qui aliquip mollit sint exercitation. Tempor occaecat ut ea eu irure fugiat voluptate. Minim ut in proident culpa sit incididunt eu incididunt non dolore incididunt excepteur ea fugiat. Minim nisi esse aliqua ad. Magna in exercitation ullamco reprehenderit ea adipisicing eu ad consequat proident eiusmod incididunt enim officia.',
    img: ['https://image.freepik.com/free-photo/blackberry-isolated-white-background_88281-1745.jpg'],
    price: {
      amount: 138,
      unit: 'Kg',
    },
  },
  roseapple: {
    title: 'Rose-Apple',
    desc: 'Culpa quis cupidatat labore commodo cupidatat. Do do ex dolor laborum dolor amet. Ullamco excepteur labore laboris nulla voluptate est adipisicing officia sunt voluptate id commodo cillum.',
    img: ['https://images.assetsdelivery.com/compings_v2/romenticit/romenticit1810/romenticit181000004.jpg'],
    price: {
      amount: 500,
      unit: 'Kg',
    },
  },
  cranberry: {
    title: 'Cranberries',
    desc: 'Magna do pariatur culpa minim eu do in fugiat laboris excepteur. Esse voluptate dolore in anim ad proident incididunt aute exercitation. Ipsum eu aliquip nisi consequat nostrud.',
    img: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV0t8aAZ4XC6W_hLdKMfrvvPPyU7HRtlMUzQ&usqp=CAU'],
    price: {
      amount: 268,
      unit: 'dozen',
    },
  },
  honeydewmelon: {
    title: 'Honeydew Melon',
    desc: 'In ex dolor non aliqua ipsum. Ut incididunt cillum pariatur irure deserunt aliquip nisi ex incididunt pariatur ullamco. Proident do cillum et labore reprehenderit adipisicing. Incididunt aliqua sunt ad nulla ea mollit incididunt velit culpa. Elit commodo ut ullamco qui sunt consequat do quis ea id magna tempor. Nulla velit sunt sint in do excepteur fugiat ullamco enim adipisicing in. Sunt fugiat ex incididunt irure exercitation reprehenderit duis deserunt non culpa commodo culpa.',
    img: ['https://cdn3.vectorstock.com/i/thumb-large/03/32/honeydew-melon-whole-fresh-vector-21590332.jpg'],
    price: {
      amount: 432,
      unit: 'Kg',
    },
  },
  blackcurrent: {
    title: 'Blackcurrant',
    desc: 'Fugiat quis est culpa enim et id ullamco aliquip quis fugiat et ipsum. In officia culpa nisi consectetur aliqua non proident. Ea labore sint sint est magna labore minim do minim do deserunt. Ad quis exercitation ut consectetur ut consequat occaecat minim aliquip. Id commodo labore anim laboris officia dolor aute commodo sint sint.',
    img: ['https://media.istockphoto.com/vectors/black-currant-vector-illustration-isolated-on-white-vector-id488981069?b=1&k=6&m=488981069&s=612x612&w=0&h=uaCm-7mIdptJF-gd1XNkfjueLHCjCOseqbSsAcLMS0c='],
    price: {
      amount: 332,
      unit: 'Kg',
    },
  },
};

export const COLUMNS = [
  {
    title: 'No',
    dataIndex: 'index',
    key: 'no',
  },
  {
    title: 'Name',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Price',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Units',
    dataIndex: 'count',
    key: 'units',
    render: (p, { key, unit })=> key ? <AddToCart id={key} /> : <b>{unit}</b>
  },
  {
    title: 'Total',
    dataIndex: 'total',
    key: 'units',
  },
];
