export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    ME: '/auth/me',
    LOGOUT: '/auth/logout',
  },
  PRODUCTS: {
    LIST: '/products',
    DETAILS: (id) => `/products/${id}`,
    CATEGORIES: '/products/categories',
  },
  ARTISTS: {
    LIST: '/artists',
    DETAILS: (id) => `/artists/${id}`,
  },
  CART: {
    GET: '/cart',
    ADD: '/cart/add',
    REMOVE: (id) => `/cart/item/${id}`,
    UPDATE: '/cart/update',
    CLEAR: '/cart/clear',
  },
  WISHLIST: {
    GET: '/wishlist',
    TOGGLE: (id) => `/wishlist/toggle/${id}`,
  },
  CUSTOM_ARTWORK: {
    CREATE: '/custom-artwork',
    LIST: '/custom-artwork/my-requests',
    DETAILS: (id) => `/custom-artwork/${id}`,
  },
  ORDERS: {
    CREATE: '/orders',
    LIST: '/orders',
    DETAILS: (id) => `/orders/${id}`,
  },
  REVIEWS: {
    BY_PRODUCT: (id) => `/reviews/product/${id}`,
    CREATE: '/reviews',
  },
  ADMIN: {
    STATS: '/admin/stats',
    USERS: '/admin/users',
    ORDERS: '/admin/orders',
  },
};
