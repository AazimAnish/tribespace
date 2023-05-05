import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://devdiscourse.blob.core.windows.net/devnews/27_06_2019_18_31_55_7984236.jpg"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://www.pondylive.com/wp-content/uploads/2019/03/Fotor_155153963465516-1170x694.jpeg"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Lamps
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          {" "}
          <img
            src="https://www.artzolo.com/sites/default/files/uploads/multi/1516/largest/HOME%20DECOR_3.jpg"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              New Vessels
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://i.pinimg.com/236x/ba/86/19/ba8619d58ba31628f24040a0462c2343--coconut-products-tahiti-french-polynesia.jpg"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Coconut Crafts
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              {" "}
              <img
                src="https://www.designdekko.com/uploads/blog/1630900039-jeanvellakNsAF3gcyeYunsplash.jpg"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Clothing
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://images.yourstory.com/cs/5/98c65090592f11ea9f62339ce853ca75/Imagebocw-1589887995087.jpg"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Lanterns
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;