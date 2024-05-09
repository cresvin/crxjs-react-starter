import logo from "@/assets/imgs/logo.svg";

export default function Popup() {
  return (
    <div className="flex items-center justify-center flex-col h-full">
      <img src={logo} alt="Extension logo" className="size-9" />
      <h1 className="text-2xl mt-5 mb-2 font-bold">Extension Popup</h1>
      <p className="text-sm text-zinc-400">
        Start editing this file{" "}
        <code className="text-white">src/pages/popup/popup.tsx</code>
      </p>
    </div>
  );
}
