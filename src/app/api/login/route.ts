type LoginData = {
  username: string;
  password: string;
};

type ResponseData = {
  message: string;
};

export async function POST(request: Request, res: Response) {
  const req = await request.json();
  const { username, password } = req as LoginData;

  if (username !== "" || password !== "") {
    return Response.json({
      data: { username, token: "123" },
    });
  } else
    return Response.json(
      { message: "invalid" },
      { status: 400, statusText: "invalid username or password" }
    );
}
