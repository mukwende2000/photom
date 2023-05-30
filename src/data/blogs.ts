import blog1 from '../assets/images/img57.jpg'
import blog2 from '../assets/images/img58.jpg'
import blog3 from '../assets/images/img60.jpg'
import blog4 from '../assets/images/img12.jpg'
import blog5 from '../assets/images/img19.jpg'
import blog6 from '../assets/images/img63.jpg'

interface Blogs {
    background: string,
    title: string 
    date: Date,
    comments: number
}

export const blogs: Blogs[][] = [
    [
        {
            background: blog1,
            title: 'SWR React Hooks With Next Increm Ental Static Registration',
            date: new Date(1, 5, 2020),
            comments: 0
        },
        {
            background: blog2,
            title: 'Decisions for building flexible componets DevTools Browser',
            date: new Date(1, 5, 2020),
            comments: 0
        },
        {
            background: blog3,
            title: 'Coffee with added milk provides all the macro nutrients in good amounts',
            date: new Date(1, 5, 2020),
            comments: 0
        },
        {
            background: blog4,
            title: 'For most people, moderate coffee consumption can be incorporated',
            date: new Date(1, 5, 2020),
            comments: 0
        },
        {
            background: blog5,
            title: 'SWR React Hooks With Next Increm Ental Static Registration',
            date: new Date(1, 5, 2020),
            comments: 0
        },
        {
            background: blog6,
            title: 'SWR React Hooks With Next Increm Ental Static Registration',
            date: new Date(1, 5, 2020),
            comments: 0
        },
    ],
    [
        {
            background: blog4,
            title: 'SWR React Hooks With Next Increm Ental Static Registration',
            date: new Date(1, 5, 2020),
            comments: 0
        },
        {
            background: blog6,
            title: 'SWR React Hooks With Next Increm Ental Static Registration',
            date: new Date(1, 5, 2020),
            comments: 0
        },
        {
            background: blog2,
            title: 'SWR React Hooks With Next Increm Ental Static Registration',
            date: new Date(1, 5, 2020),
            comments: 0
        }
    ]
]