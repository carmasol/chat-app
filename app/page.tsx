import { FcGoogle } from "react-icons/fc";

export default function Home() {
  return (
    <section className="w-full h-screen flex items-center justify-center p-3">

      <div className="max-w-[1000px] m-auto flex items-center justify-center flex-col gap-5 text-center">
        <h1 className="text-6xl uppercase font-black">CHAT<span className="text-blue-600">APP</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde soluta, laborum qui incidunt nostrum, debitis, ipsum distinctio voluptas nam eos quae. Tempora repellat obcaecati qui voluptate illum ab facere ex officia optio, cupiditate vero laboriosam iure est unde inventore nihil! Itaque officiis, dolorum corporis id fugiat nostrum totam praesentium provident nobis qui, velit, ducimus blanditiis unde necessitatibus sunt iure perferendis. Totam optio obcaecati perferendis eaque atque nisi distinctio repellendus commodi unde et, assumenda autem cupiditate sit quidem deserunt? At sint delectus numquam consectetur corporis ab illum cupiditate fugit impedit, rerum libero necessitatibus labore, facilis velit culpa! Fugiat minima facilis recusandae.</p>
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-90 rounded-md p-2 flex items-center gap-2">
          <FcGoogle />
          <span>Se connecter avec Google</span>
        </button>
      </div>

    </section>
  )
}
