import useLocalStorage from "@/hooks/useLocalStorage";

export default function Home() {
  const [valueStorage, setValueStorage, getValueStorage] = useLocalStorage(
    "welcome",
    "This item was get in Local Storage"
  );

  return (
    <>
      Home
      {/* <h1>{valueStorage}</h1>
          <button className='bg-green-dark text-white mr-3 p-2 mt-3' onClick={() => setValueStorage("You are here again")}>Click me</button>
          <button className='bg-green-light' onClick={() => alert(getValueStorage())}>Ler direto do localStorage</button> */}
    </>
  );
}
