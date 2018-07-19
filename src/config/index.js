const ip = window.location.hostname
const protocol = window.location.protocol
export const apiServer = `${protocol}//${ip}:4000`
export const delay = 0
export const navigationTitle = {
  '/dashboard': 'Dashboard',
  '/login': 'Login',
  '/browser-food': 'Food browser', 
  '/password-forget': 'Retrieve password', 
  '/account-create': 'Create account' 
}