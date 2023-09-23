import { useLoaderData } from "react-router-dom";

export default function Github() {

    const data = useLoaderData();

  return (
    <div className="text-center m-4 bg-slate-500 text-white p-4 text-3xl">
      Github Bio: {data.bio}
      <img
        className="rounded-full mx-auto p-3"
        src={data.avatar_url}
        alt="git-picture"
        width={300}
      />
    </div>
  );
}


