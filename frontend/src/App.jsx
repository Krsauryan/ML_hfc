import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const itemsToFill = [
    "Name of Item",
    "serving_size",
    "calories",
    "total_fat",
    "saturated_fat",
    "cholesterol",
    "sodium",
    "choline",
    "folate",
    "folic_acid",
    "niacin",
    "pantothenic_acid",
    "riboflavin",
    "thiamin",
    "vitamin_a",
    "vitamin_a_rae",
    "carotene_alpha",
    "carotene_beta",
    "cryptoxanthin_beta",
    "lutein_zeaxanthin",
    "lucopene",
    "vitamin_b12",
    "vitamin_b6",
    "vitamin_c",
    "vitamin_d",
    "vitamin_e",
    "tocopherol_alpha",
    "vitamin_k",
    "calcium",
    "copper",
    "irom",
    "magnesium",
    "manganese",
    "phosphorous",
    "potassium",
    "selenium",
    "zink",
    "protein",
    "alanine",
    "arginine",
    "aspartic_acid",
    "cystine",
    "glutamic_acid",
    "glycine",
    "histidine",
    "hydroxyproline",
    "isoleucine",
    "leucine",
    "lysine",
    "methionine",
    "phenylalanine",
    "proline",
    "serine",
    "threonine",
    "tryptophan",
    "tyrosine",
    "valine",
    "carbohydrate",
    "fiber",
    "sugars",
    "fructose",
    "galactose",
    "glucose",
    "lactose",
    "maltose",
    "sucrose",
    "fat",
    "saturated_fatty_acids",
    "monounsaturated_fatty_acids",
    "polyunsaturated_fatty_acids",
    "fatty_acids_total_trans",
    "alcohol",
    "ash",
    "caffeine",
    "theobromine",
    "water",
  ];


  const [data, setData] = useState();

  const [inputValues, setInputValues] = useState(new Array(75).fill(""));
  const [finalval, setFinalVal] = useState(null);

  // Function to handle input changes
  const handleInputChange = (index, event) => {
    const newValues = [...inputValues];
    newValues[index] = event.target.value;
    setInputValues(newValues);
  };

  const handleSubmit = async(e) => {
    e.preventDefault(); // Add parentheses to call preventDefault()
    const arr = inputValues.map((item) => (item.trim() === "" ? 0 : Number(item)));
    setFinalVal(arr.slice(1));
    console.log("arr", arr.slice(1));

    const dataArr = arr.slice(1);

    const newarr = [...dataArr,0,0]


console.log(dataArr.length,">>>",dataArr)
console.log( [
  90,
  20,
  0,
  0,
  0,
  0,
  10,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0
].length);

console.log("newarr",newarr.length,newarr);

    let headersList = {
      "Accept": "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/json"
     }
     
     let bodyContent = JSON.stringify({
      "data": [newarr] // Wrap dataArr in an array to match the expected structure
   });
  
     
     let response = await fetch("https://ml-hfc.onrender.com/api", { 
       method: "POST",
       body: bodyContent,
       headers: headersList
     });
     
     let data = await response.text();
     let jsonData = JSON.parse(data);
     console.log("line 223",jsonData);
     setData(jsonData?.status)
     alert(jsonData?.status)

    //  alert(data?.status)
     

  };

  return (
    <main className="h-full w-full ">
      {/* {JSON.stringify(Array.from(Array(75).fill(0)))} */}
      {JSON.stringify(data)}

      <section className="mx-[20%]  flex flex-col items-center">
        <h1 className="text-3xl font-bold underline my-5">
          Healthy Food Classfier
        </h1>



        {/* <div className="grid grid-cols-4  flex">
          {Array.from(Array(76), (item, index) => (
            <input
              key={index}
              className="h-40 w-32 bg-pink-100 border border-black flex justify-center items-center"
            
            />
          ))}
        </div> */}

        <main className=" h-11 w-full">

          <form onSubmit={handleSubmit}>
            {itemsToFill.map((item, index) => (
              <div className="flex items-center justify-between">
                <div className="w-1/2 h-auto  px-3 py-2 ">{item} </div>
                <div className="w-1/2 h-auto  px-3 py-2 ">
                  <input
                    required={index == 0 ? true : false}
                    type={index == 0 ? "text" : "number"}
                    className="w-full h-full"
                    value={inputValues[index] || ""}
                    onChange={(event) => handleInputChange(index, event)}
                    placeholder={`Enter value of ${item}`}
                  />
                </div>
              </div>
            ))}

            <div className="flex justify-center items-center w-full h-auto py-10 bb">
              <button className="px-2 py-1 rounded-2xl bb text-3xl font-extrabold">
                Submit
              </button>
            </div>
          </form>
        </main>
      </section>
    </main>
  );
}

export default App;
