// import React from "react";
// class Safe_TodoList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       ArrayItems: props.items,
//       editItems: true,
//     };
//   }
//   static getDerivedStateFromProps(props, state) {
//     if (state.editItems) {
//       return {
//         ArrayItems: state.ArrayItems,
//         editItems: false,
//       };
//     }
//     else if (props.items !== state.ArrayItems) {
//       return {
//         ArrayItems: props.items,
//       };
//     }
//     return null;
//   }
//   setEdit(element, key) {
//     let newArray = [...this.state.ArrayItems];
//     const index = newArray.findIndex((i) => i.key === key);
//     const newObj = {
//       safename: newArray[index].safename,
//       owner: newArray[index].owner,
//       type:newArray[index].type,
//       description:newArray[index].description,
//       key: key,
//     };
//     if (element.target.name === "safename") {
//       newObj.safename = element.target.value;
//     }
//     if (element.target.name === "owner") {
//       newObj.owner = element.target.value;
//     }
//     if (element.target.name === "type") {
//         newObj.type = element.target.value;
//       }
//       if (element.target.name === "description") {
//         newObj.description = element.target.value;
//       }
//     newArray.splice(index, 1, newObj);
//     this.setState({
//       ArrayItems: newArray,
//       editItems: true,
//     });
//   }
//   updateItem(element, key) {
//     this.props.updateItem(this.state.ArrayItems);
//   }
//   render() {
//     return (
//       <div>
//         {this.state.ArrayItems.map((item, index) => {
//           return (
//             <div key={item.key}>
//               <p>
//                 <input type="text" value={item.safename} name="safename" onChange={(event) => { this.setEdit(event, item.key); }} />
//                 <input type="text" value={item.owner} id={item} name="owner" onChange={(event) => { this.setEdit(event, item.key); }} />
//                 <input type="text" value={item.type} id={item} name="type" onChange={(event) => { this.setEdit(event, item.key); }} />
//                 <input type="text" value={item.description} id={item} name="description" onChange={(event) => { this.setEdit(event, item.key); }} />
//                 <button id="buttons" onClick={() => this.props.removeItem(item.key)}>Delete</button>
//                 <button id="buttons" disabled={item.safename === "" || item.owner === "" ||item.type === "" || item.description === ""} onClick={() => this.updateItem(item.key)}>Edit</button>
//               </p>
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
// }
// export default Safe_TodoList;
