export function doLogout() {
  sessionStorage.setItem("token", null);
  window.location.reload();
}
