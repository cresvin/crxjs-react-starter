import logo from "@/assets/imgs/logo.svg";

export default function NewTab() {
  return (
    <div className="flex items-center justify-center flex-col h-full">
      <img src={logo} alt="Extension logo" className="size-9" />
      <h1 className="text-2xl mt-5 mb-2 font-bold">New tab</h1>
      <p className="text-sm text-zinc-400">
        Start editing this file{" "}
        <code className="text-white">src/pages/new-tab/new-tab.tsx</code>
      </p>
    </div>
  );
}
