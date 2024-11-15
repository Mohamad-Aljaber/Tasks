import { produce } from "immer";
import { useState } from "react";


const FullExampleWithImmer = () => {
  const [items, setItems] = useState([
    { id: 1, name: "el 1" },
    { id: 3, name: "el 3" },
    { id: 2, name: "el 2" },
  ]);
  const [currentElement, setCurrentElement] = useState("");
  const [newElement, setNewElement] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const handleCreate = () => {
    if (!currentElement.trim()) {
      alert("Please enter a valid name.");
      return;
    }
    
    const newItem = { id: Date.now(), name: currentElement.trim() };
    setItems((prevItems) =>
      produce(prevItems, (draft) => {
        draft.push(newItem);
      })
    );
    setCurrentElement("");
  };

  const handleUpdate = () => {
    if (selectedId === null || !newElement.trim()) {
      alert("Please select an item and provide a valid name for update.");
      return;
    }
    setItems((prevItems) =>
      produce(prevItems, (draft) => {
        const item = draft.find((item) => item.id === selectedId);
        if (item) {
          item.name = newElement.trim();
        }
      })
    );
    resetInputs();
  };

  const handleDelete = () => {
    if (selectedId === null) {
      alert("Please select an item to delete.");
      return;
    }
    setItems((prevItems) =>
      produce(prevItems, (draft) => {
        const index = draft.findIndex((item) => item.id === selectedId);
        if (index !== -1) {
          draft.splice(index, 1);
        }
      })
    );
    resetInputs();
  };

  const handleSort = () => {
    setItems((prevItems) =>
      produce(prevItems, (draft) => {
        draft.sort((a, b) => a.id - b.id);
      })
    );
  };

  const handleSelectItem = (id, name) => {
    setSelectedId(id);
    setCurrentElement(name);
    setNewElement(name);
  };

  // Reset input fields
  const resetInputs = () => {
    setCurrentElement("");
    setNewElement("");
    setSelectedId(null);
  };

  return (
    <div className="container mt-4">
      <h2>Example with Immer</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Enter new item name"
          value={currentElement}
          onChange={(e) => setCurrentElement(e.target.value)}
        />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Edit selected item name"
          value={newElement}
          onChange={(e) => setNewElement(e.target.value)}
          disabled={selectedId === null}
        />
        <div>
          <button className="btn btn-primary mr-2" onClick={handleCreate}>
            Create
          </button>
          <button
            className="btn btn-warning mr-2"
            onClick={handleUpdate}
            disabled={selectedId === null}
          >
            Update
          </button>
          <button
            className="btn btn-danger mr-2"
            onClick={handleDelete}
            disabled={selectedId === null}
          >
            Delete
          </button>
          <button className="btn btn-secondary" onClick={handleSort}>
            Sort
          </button>
        </div>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Item Name</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr
              key={item.id}
              className={selectedId === item.id ? "table-primary" : ""}
              onClick={() => handleSelectItem(item.id, item.name)}
            >
              <td>{item.id}</td>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FullExampleWithImmer;
