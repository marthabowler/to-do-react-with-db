import { toDoOneItem } from "./toDoOneItem";

interface ItemProps {
  oneItem: toDoOneItem;
  deleteToDo: (id: number) => void;
  updateToDo: (arg: toDoOneItem) => void;
}

export default function ToDoItem(props: ItemProps): JSX.Element {
  return (
    <>
      <div className="item">
        <p>{props.oneItem.description}</p>
        <p>{props.oneItem.dueDate}</p>
        <p
          className={props.oneItem.isComplete ? "complete" : "notcomplete"}
          onClick={() => {
            props.updateToDo(props.oneItem);
          }}
        >
          {props.oneItem.isComplete ? "Complete" : "To be completed"}
        </p>
        <button
          onClick={() => {
            props.deleteToDo(props.oneItem.id);
          }}
        >
          {" "}
          Delete{" "}
        </button>
      </div>
      <br />
    </>
  );
}
