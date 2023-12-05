// app.post("/api/login", (req, res) => {
//   // 로그인 로직을 여기에 작성합니다.
//   // req.body에는 클라이언트에서 보낸 데이터가 들어있습니다.
//   // 예: const { email, password } = req.body;
// });

const signIn = (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (!user) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  // 로그인 성공. 실제 애플리케이션에서는 JWT 등을 사용하여 세션을 관리해야 합니다.
  res.json({ message: "Logged in successfully" });
};


module.exports = signIn