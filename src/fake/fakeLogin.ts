export const fakeLogin = (username: string, password: string) => {
  console.log(username, password);
  if (username === "6338145221" && password === "1234") {
    return { token: "6338145221", name: "Pochara Youcharoen", status: 200 };
  } else if (username === "" || password === "") {
    return {
      error: true,
      message: "plase input username or password",
      status: 400,
    };
  } else {
    return {
      error: true,
      message: "Username or password is incorrect",
      status: 400,
    };
  }
};
