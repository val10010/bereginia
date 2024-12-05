export const TABLET_MOBILE_LINKS = {
    specialists: [
        {
            path: '/ivan',
            name: 'Иван Газин'
        },
        {
            path: '/irina',
            name: 'Ирина Газин'
        }
    ],
    products: [
        {
            path: '/course',
            name: 'Онлайн курс «Осанка и вальгус»'
        }
    ]
};

export const DESKTOP_LINKS = [
    ...TABLET_MOBILE_LINKS.specialists,
    ...TABLET_MOBILE_LINKS.products
];
