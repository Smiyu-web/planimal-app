import React, { useState } from "react";
import Axios from "axios";
import Swal from "sweetalert2";

import Notice from "../UIkit/Notice";
import AddTags from "./AddTags";

const AddStyle = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [retailPrice, setRetailPrice] = useState();
  const [wholesalePrice, setWholesalePrice] = useState();
  const [qty, setQty] = useState();
  const [tags, setTags] = useState([{ id: "plant", text: "plant" }]);
  const [image, setImage] = useState();
  const [error, setError] = useState(undefined);

  const submit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("title", title);
      formData.append("description", description);
      formData.append("retailPrice", retailPrice);
      formData.append("wholesalePrice", wholesalePrice);
      formData.append("qty", qty);
      formData.append("tags", JSON.stringify(tags));
      formData.append("image", image);

      await Axios.post(
        `${process.env.REACT_APP_SERVER_URL}/items/add-item`,
        formData
      );
      Swal.fire(`Added "${title}"!`, "", "success");
    } catch (err) {
      setError(err.response?.data.msg);
      console.log(err.response?.data.msg);
    }
  };

  return (
    <div className="my-16 flex flex-col items-center">
      <h2 className="mt-10">Add item</h2>

      {error && <Notice message={error} clear={() => setError(undefined)} />}

      <div>
        <form onSubmit={submit} encType="multiple/form-data">
          <div className="input_wrapper">
            <label className="input_label">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          {/* description option */}
          <div className="input_wrapper">
            <label className="input_label">Description</label>
            <textarea
              name="description"
              id="description"
              cols="20"
              rows="2"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <AddTags tags={tags} setTags={setTags} />
          {/* price option */}
          <div className="flex justify-between px-2">
            <div className="input_price">
              <label className="input_label">Retail Price</label>
              <input
                type="number"
                id="retailPrice"
                name="retailPrice"
                style={{ textAlignLast: "center" }}
                onChange={(e) => setRetailPrice(e.target.value)}
              />
            </div>
            <div className="input_price">
              <label className="input_label">Wholesale Price</label>
              <input
                type="number"
                id="wholesalePrice"
                name="wholesalePrice"
                style={{ textAlignLast: "center" }}
                onChange={(e) => setWholesalePrice(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="input_qty">
              <label className="input_label">Qty</label>
              <input
                type="number"
                id="qty"
                name="qty"
                style={{ textAlignLast: "center" }}
                onChange={(e) => setQty(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col p-2 pb-1 mb-2 w-56">
            <label className="input_label mb-2">Image</label>
            <input
              type="file"
              name="image"
              id="image"
              filename="image"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <div className="text-center">
            <input className="input_btn" type="submit" value="Add" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStyle;
