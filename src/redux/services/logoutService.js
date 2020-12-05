export function doLogout() {
  sessionStorage.setItem("token", null);
  sessionStorage.setItem("username", null);
  window.location.reload();
}
