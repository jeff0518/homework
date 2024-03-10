import Swal from "sweetalert2";

export const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  width: 300,
  timer: 2000,
});

export const Alert = Swal.mixin({
  showConfirmButton: false,
  width: 600,
  timer: 3000,
});
