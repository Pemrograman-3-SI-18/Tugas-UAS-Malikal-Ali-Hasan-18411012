
const routes = [
  {
    path: '/',
    component: () => import('layouts/LoginRegistLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Users/Login.vue') },
      { path: 'auth/Registrasi', component: () => import('pages/Users/Registrasi.vue') }
    ]
  },
  {
    path: '/admin',
    component: () => import('layouts/MainLayout.vue'),
    meta: {
      autentikasi: true
    },
    children: [
      { path: '', component: () => import('pages/Admin/Home/DataDriver.vue') },
      { path: 'inputdata', component: () => import('pages/Admin/Home/InputData.vue') },
      { path: 'editdata/:idDriver', component: () => import('pages/Admin/Home/EditData.vue') },
      { path: 'datatransaksi', component: () => import('pages/Admin/Transaksi/DataTransaksi.vue') }
    ]
  },
  {
    path: '/customer',
    component: () => import('layouts/CustomerLayout.vue'),
    meta: {
      autentikasi: true
    },
    children: [
      { path: 'transaksi', component: () => import('pages/Customer/Transaksi/DataTransaksi.vue') },
      { path: '', component: () => import('pages/Customer/Order/Order.vue') }
    ]
  }
]

export default routes
