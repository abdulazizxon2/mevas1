import img1 from "./Icons/305295 1.png";
import img2 from "./Icons/shopping-cart 1.png";
import img3 from "./Icons/milk 1.png";
import img4 from "./Icons/groceries 1.png";
import img5 from "./Icons/305305 1.png";
import img6 from "./Icons/house 1.png";
let images = [img1, img2, img3, img4, img5, img6];
function Categories({ massiv }) {
  //   let { massiv, categories } = prop;
  //   console.log(prop);
  return (
    <section className="Categories_section">
      <div className="header_in_categories">
        <p>Shop By</p>
        <h1>Categories</h1>
      </div>
      <div className="Category_item">
        {massiv.map((item, index) => {
          return (
            <div className="Category_card">
              <div className="img_in_category_card">
                <figure>
                  <img src={images[index]} alt="Apple" />
                </figure>
              </div>

              <h1>{item.name}</h1>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Categories;
