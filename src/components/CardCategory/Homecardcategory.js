import "./homecardcategory.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import category, {
  setCategory,
  setCategoryId,
} from "../../redux/reducers/category";
//---------------- AddCategory ----------------
const HomeCardCategory = () => {
  const dispatch = useDispatch();
  //useSelector
  const { newCategory } = useSelector((state) => {
    return {
      newCategory: state.category.category,
    };
  });
  const { CategoryId } = useSelector((state) => {
    return {
      CategoryId: state.category.categoryId,
    };
  });
  //---------------- setCategory ----------------
  useEffect(() => {
    axios
      .get(`https://fetratinsandonationnewl.onrender.com/categories`)
      .then((result) => {
        console.log("result", result.data.result);
        dispatch(setCategory(result.data.result));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const navigate = useNavigate();
  //---------------- return ----------------
  return (
    <div className="body-body-body">
      <div className="home-card-category-container">
        {newCategory.length > 0 &&
          newCategory.map((item) => (
            <div className="card-category-wrapper">
              <img
                src={item.imgepath}
                alt={item.title}
                className="card-category-image"
              />
              <div className="card-category-intro">
                <h1 className="card-category-intro-title">{item.title}</h1>
                <p
                  className="card-category-intro-p"
                  onClick={() => {
                    dispatch(setCategoryId(item.id));
                    // navigate(`/AddNeedy2/${item.id}`);
                  }}
                >
                  here are our donations in the <br></br>
                  <span>'{item.title}'</span>
                  section .<br></br>
                  <br></br>it's a tender service.to get <br />and feel with each other. 
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default HomeCardCategory;
