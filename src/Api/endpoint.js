export const baseURL = 'https://wtsacademy.dedicateddevelopers.us/api';

export const endpoint={
    auth:{
        signup:'/user/signup',
        signin:'/user/signin',
        profiledetails:'user/profile-details'
    },
    crud:{
        create:'/product/create',
        details:'/product/detail/:id',
        list:'/product/list',
        remove:'/product/remove',
        update:'/product/update',
    }
}