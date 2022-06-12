import Swal from "sweetalert2";

export const LoginButton = async () => {
  Swal.fire({
    title: "이름을 알려주세요!",
    text: "형식: 영어",
    input: "text",
    inputAttributes: {
      autocapitalize: "off",
    },
    showCancelButton: true,
    confirmButtonText: "Look up",
    showLoaderOnConfirm: true,

    // 서버 통신
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
        title: `${result.value.login} 님이 맞으신지 확인합니다`,
        text: "다음으로 패스워드 확인을 진행합니다",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "네 맞습니다",
        cancelButtonText: "아닙니다",
      }).then((result) => {
        if (result.isConfirmed) {
          console.log("wefiojewofejw");
          const [password] = Swal.fire({
            title: "Enter your password",
            input: "password",
            inputLabel: "Password",
            inputPlaceholder: "Enter your password",
            inputAttributes: {
              maxlength: 10,
              autocapitalize: "off",
              autocorrect: "off",
            },
          }).then(() => {
            Swal.fire({
              title: "notice",
              text: "로그인되었습니다",
              icon: "info",
            });
          });
        }
      });
    }
  });
};
