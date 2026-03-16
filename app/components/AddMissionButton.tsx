// "use client";
// import {v4 as uuidV4 } from "uuid"

// import React, { useEffect, useState, useRef } from 'react'

// type Task = {
//   id: string;
//   title: string;
//   completed: boolean;
//   createdAt: Date;
// }

// const list = document.querySelector<HTMLUListElement>("#list");
// const form = document.getElementById("new-task-form") as HTMLFormElement | null
// const input = document.querySelector<HTMLInputElement>("#new-task-title");

// form?.addEventListener("click", e => {
//   e.preventDefault()
//   if (!input?.value) return
// const newTask: Task = {
//   id: uuidV4(),
//   title: input.value,
//   completed: false,
//   createdAt: new Date()
// }
// addListItem(newTask)

// })

// function addListItem(task: Task ) {
//  const item = document.createElement("li")
//  const label = document.createElement("label")
//  const checkbox = document.createElement("input")
//  checkbox.type = "checkbox"
//  label.append(checkbox, task.title)
//  item.append(label)
//  list?.append(item)
// }



// // function DynamicList() {
// //   // State for the list of items
// //   const [items, setItems] = useState<string[]>([]);
// //   // State for the current input value
// //   const [inputValue, setInputValue] = useState('');

// //   // Handler for input changes
// //   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
// //     setInputValue(event.target.value);
// //   };

// //   // Handler for adding a new item
// //   const handleAddItem = (event: React.ChangeEvent<HTMLInputElement>) => {
// //     event.preventDefault(); // Prevent default form submission behavior

// //     // Ensure the input is not empty or just whitespace
// //     if (inputValue.trim() === '') {
// //       return;
// //     }

// //     // Update the items list by creating a new array
// //     // It's important to return a *new* object/array when updating state in React to trigger a re-render
// //     setItems([...items, inputValue.trim()]);

// //     // Clear the input field for the next entry
// //     setInputValue('');
// //   };

// //   return (
// //     <div>
// //       <input onChange={handleAddItem}>
// //         <input
// //           type="text"
// //           value={inputValue}
// //           onChange={handleInputChange}
// //           placeholder="Enter a new item"
// //         />
// //         <button type="submit">Add Item</button>
// //       </input>

// //       {/* Render the list dynamically */}
// //       <ul>
// //         {items.map((item, index) => (
// //           // Use a unique key for each item, like an index or a unique ID
// //           <li key={index}>{item}</li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }


// const AddMissionButton = () => {
// //     // 1. variable that holds the value 2. setter function updates the state of the and triggers a re-render 3. useState(0) gives it the default initial value
// // return (
// //     <div>
// //     <img src="/assets/add-icon-free-vector-removebg-preview.png" onClick={() => {
// //             DynamicList()
// //     }} width="35"/>
// //     </div>
// //   )

// //     //useState tell specific parts of the website (and ONLY those parts of the website) to reload
// }


// // console.log(counter);
// // setCountState(countState + 1);
// // console.log("state: ", countState)

// //useEffect triggers once on initial render, one being to fetch data on initial load or a popup on load

// //     console.log("Use Effect Triggered");

// //     console.log("state effect: ", countState)

// // }, [countState]
// //when a dependency changes, the use effect is triggered


// //useState holds variables and data, useEffect acts as a trigger




// export default AddMissionButton
