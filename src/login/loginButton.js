import Swal from "sweetalert2";

export const loginBtnClicked = () => {
  Swal.fire({
    title: "아이디를 설정해주세요 ",
    text: "형식: 영어",
    input: "text",
    inputAttributes: {
      autocapitalize: "off",
    },
    showCancelButton: true,
    confirmButtonText: "Look up",
    showLoaderOnConfirm: true,
    preConfirm: (login) => {
      return fetch(`//api.github.com/users/${login}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response.json();
        })
        .catch((error) => {
          Swal.showValidationMessage(`Request failed: ${error}`);
        });
    },
    allowOutsideClick: () => !Swal.isLoading(),
  }).then((result) => {
    if (result.isConfirmed) {
      console.log("loginBtn clicked");
      Swal.fire({
        title: `아이디를 ${result.value.login}로 설정하시겠습니까`,
        text: "맞으면 다음 패스워드 지정을 진행합니다",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "네 맞습니다",
        cancelButtonText: "아닙니다",
      });
    }
  });
};
