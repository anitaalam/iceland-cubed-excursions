const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

let package_id = params.pid;
let package_select = document.querySelector(".package-select");

if (package_select) {
  package_select.value = package_id;
  document.querySelector("#quote").scrollIntoView();
}
