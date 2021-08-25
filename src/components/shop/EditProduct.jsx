import React, { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import Notice from "../UIkit/Notice";
import AddTags from "./AddTags";
import { selectCurrentItem } from "../../features/itemSlice";

const EditStyle = () => {
  const history = useHistory();
  const currentItem = useSelector(selectCurrentItem);
  const itemId = currentItem._id;

  const [title, setTitle] = useState(currentItem.title);
  const [description, setDescription] = useState(currentItem.description);
  const [retailPrice, setRetailPrice] = useState(currentItem.retailPrice);
  const [wholesalePrice, setWholesalePrice] = useState(
    currentItem.wholesalePrice
  );
  const [qty, setQty] = useState(currentItem.qty);
  const [tags, setTags] = useState(currentItem.tags);
  const [image, setImage] = useState(currentItem.image);
  const [error, setError] = useState(undefined);

  const submit = async (e) => {
    e.preventDefault();

    try {
      const updatedData = {
        title,
        description,
        retailPrice,
        wholesalePrice,
        qty,
        tags,
        image,
      };

      await Axios.patch(
        `${process.env.REACT_APP_SERVER_URL}/items/${itemId}`,
        updatedData
      );
      history.push(`/product/${itemId}`);
    } catch (err) {
      setError(err.response.data.msg);
      console.log(err.response?.data.msg);
    }
  };

  const handleDelete = async () => {
    await Axios.delete(`${process.env.REACT_APP_SERVER_URL}/items/${itemId}`);
    history.push("/");
  };

  return (
    <div className="my-16 flex flex-col items-center">
      <h2 className="mb-10">Edit item</h2>

      {error && <Notice message={error} clear={() => setError(undefined)} />}

      <div>
        <form onSubmit={submit} encType="multiple/form-data">
          <div className="input_wrapper">
            <label className="input_label">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          {/* description option */}
          <div className="input_wrapper">
            <label className="input_label">Description</label>
            <textarea
              name="description"
              id="description"
              value={description}
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
                value={retailPrice}
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
                value={wholesalePrice}
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
                value={qty}
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
            <div>{image}</div>
          </div>
          <div className="text-center">
            <input className="input_btn" type="submit" value="Edit" />
          </div>
        </form>
      </div>
      <div onClick={handleDelete}>DELETE THIS PRODUCT</div>
    </div>
  );
};

export default EditStyle;
