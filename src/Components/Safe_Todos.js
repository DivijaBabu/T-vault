import React from "react";
import shield from "../assets/listsafe.png";
import Delete from "../assets/deleteimage.png";
import edit from "../assets/editimage.png";
class Safe_Todos extends React.Component {
    render() {
        return (
            <div>
                {this.props.tableItems.map((item, index) => {
                    return (
                        <div key={item.key}>
                            {/* <p>  {index + 1} </p> */}
                            <img src={shield} alt="shield"/>
                            <p>    {item.safename} </p>
                            <p>    {item.owner}</p>
                            <p> {item.type}</p>
                            <p>    {item.description}</p>
                            <img src={edit} alt="edit"/>
                            <img src={Delete} alt="delete"/>
                        </div>
                    );
                })}
            </div>
        );
    }
}
export default Safe_Todos;
