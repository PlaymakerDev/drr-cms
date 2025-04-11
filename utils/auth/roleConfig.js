export const ROLE = {
  'ADMIN': 'Admin',
  'STAFF': 'Staff'
}
const ROLE_CONFIG = {
  [ROLE.ADMIN]: {
    "index_page": "/admin/dashboard"
  },
  [ROLE.STAFF]: {
    "index_page": "/admin/dashboard"
  },
}

export default ROLE_CONFIG
