import apple from '../assets/apple.jpg';
import banana from '../assets/banana.jpg';
import kivi from '../assets/kivi.jpg';
import orange from '../assets/orange.jpg';
import honeydew from '../assets/honeydew.jpg';
import roseapple from '../assets/roseapple.jpg';
import pear from '../assets/pear.jpg';
import blackberry from '../assets/blackberry.jpg';
import blackcurrent from '../assets/blackcurrant.jpg';
import cranberry from '../assets/cranberry.jpg';

export const PRODUCTS = {
  apple: {
    title: 'Apple',
    desc: 'Sunt id fugiat tempor dolor ullamco culpa enim do quis officia esse ipsum ad. Dolore cupidatat veniam laboris commodo. Ea tempor velit duis duis id quis. Anim et occaecat id excepteur labore consectetur. Commodo veniam aute non laboris officia aliquip sint deserunt deserunt occaecat nostrud. Consequat Lorem sit nisi exercitation occaecat. Excepteur eiusmod reprehenderit excepteur aliquip et laborum do nulla veniam Lorem Lorem.',
    img: [apple],
    price: {
      amount: 100,
      unit: 'Kg',
    },
  },
  banana: {
    title: 'Banana',
    desc: 'Reprehenderit voluptate ad dolore veniam do non dolor. Ut labore ipsum aliquip sunt nostrud quis dolore amet ipsum do. Mollit quis incididunt consequat exercitation ex elit.',
    img: [banana],
    price: {
      amount: 40,
      unit: 'dozen',
    },
  },
  kiwi: {
    title: 'Kiwi',
    desc: 'Aute aute adipisicing aute mollit dolore aliqua velit eu id dolore. Occaecat ex ullamco eu esse ullamco. Sunt consectetur duis dolor proident incididunt consectetur cillum tempor. Laborum voluptate laboris magna duis adipisicing officia. Qui in ut consectetur culpa irure proident sit id. Consequat irure cupidatat qui qui quis excepteur esse.',
    img: [kivi],
    price: {
      amount: 250,
      unit: 'dozen',
    },
  },
  orange: {
    title: 'Orange',
    desc: 'Amet sunt eu ut deserunt non deserunt Lorem pariatur. Minim velit pariatur cupidatat nostrud incididunt. Enim nulla proident dolor voluptate nostrud Lorem nostrud nostrud cillum minim. Officia voluptate proident ut velit ipsum aliqua deserunt Lorem quis. Ipsum elit nisi enim deserunt.',
    img: [orange],
    price: {
      amount: 148,
      unit: 'dozen',
    },
  },
  pear: {
    title: 'Pear',
    desc: 'In excepteur ullamco aliquip labore exercitation do aliqua Lorem sit exercitation qui fugiat velit. Sit deserunt irure eu consequat sunt veniam. Cupidatat deserunt duis magna cillum amet ullamco id incididunt velit nostrud officia. Irure eu nulla nulla ea irure sint incididunt deserunt laborum commodo.',
    img: [pear],
    price: {
      amount: 128,
      unit: 'Kg',
    },
  },
  blackberry: {
    title: 'Black-Berry',
    desc: 'Officia sit veniam labore esse fugiat ullamco elit qui aliquip mollit sint exercitation. Tempor occaecat ut ea eu irure fugiat voluptate. Minim ut in proident culpa sit incididunt eu incididunt non dolore incididunt excepteur ea fugiat. Minim nisi esse aliqua ad. Magna in exercitation ullamco reprehenderit ea adipisicing eu ad consequat proident eiusmod incididunt enim officia.',
    img: [blackberry],
    price: {
      amount: 138,
      unit: 'Kg',
    },
  },
  roseapple: {
    title: 'Rose-Apple',
    desc: 'Culpa quis cupidatat labore commodo cupidatat. Do do ex dolor laborum dolor amet. Ullamco excepteur labore laboris nulla voluptate est adipisicing officia sunt voluptate id commodo cillum.',
    img: [roseapple],
    price: {
      amount: 500,
      unit: 'Kg',
    },
  },
  cranberry: {
    title: 'Cranberries',
    desc: 'Magna do pariatur culpa minim eu do in fugiat laboris excepteur. Esse voluptate dolore in anim ad proident incididunt aute exercitation. Ipsum eu aliquip nisi consequat nostrud.',
    img: [cranberry],
    price: {
      amount: 268,
      unit: 'dozen',
    },
  },
  honeydewmelon: {
    title: 'Honeydew Melon',
    desc: 'In ex dolor non aliqua ipsum. Ut incididunt cillum pariatur irure deserunt aliquip nisi ex incididunt pariatur ullamco. Proident do cillum et labore reprehenderit adipisicing. Incididunt aliqua sunt ad nulla ea mollit incididunt velit culpa. Elit commodo ut ullamco qui sunt consequat do quis ea id magna tempor. Nulla velit sunt sint in do excepteur fugiat ullamco enim adipisicing in. Sunt fugiat ex incididunt irure exercitation reprehenderit duis deserunt non culpa commodo culpa.',
    img: [honeydew],
    price: {
      amount: 432,
      unit: 'Kg',
    },
  },
  blackcurrent: {
    title: 'Blackcurrant',
    desc: 'Fugiat quis est culpa enim et id ullamco aliquip quis fugiat et ipsum. In officia culpa nisi consectetur aliqua non proident. Ea labore sint sint est magna labore minim do minim do deserunt. Ad quis exercitation ut consectetur ut consequat occaecat minim aliquip. Id commodo labore anim laboris officia dolor aute commodo sint sint.',
    img: [blackcurrent],
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
  },
  {
    title: 'Total',
    dataIndex: 'total',
    key: 'units',
  },
];
