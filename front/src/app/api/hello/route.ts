export const GET = () => {
  return Response.json("hello word");
};

export const POST = async (request: Request) => {
  console.log(await request.json());

  return Response.json("hello word");
};
