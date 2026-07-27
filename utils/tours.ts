

interface ToursProps {
    id: number;
    title: string;
    description: string,
    img: string;
    duration: number;
    price: number
}

export const tours: ToursProps[] = [
    {
        id: 1,
        title: 'Marrakech',
        description: 'Explore the vibrant red city.',
        img: '/images/marrakech.jpg',
        duration: 1,
        price: 60,
    },
    {
        id: 2,
        title: 'Chefchaoun',
        description: 'Discover the blue pearl of Morocco.',
        img: '/images/chefchaoun.jpg',
        duration: 2,
        price: 75,
    },
    {
        id: 3,
        title: 'Essaouira Coastal Escape',
        description: 'Relax by the sea in Essaouira.',
        img: '/images/essaouira.jpg',
        duration: 1,
        price: 55,
    },
    {
        id: 4,
        title: 'Sahara Desert Adventure',
        description: '2-day trip to the magical desert.',
        img: '/images/merzouga.jpg',
        duration: 2,
        price: 80,
    },
]



