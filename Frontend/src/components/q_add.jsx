import React from "react";
import "../components_style/q_add.css";
import { Link } from "react-router-dom";

function q_add() {
  return (
    <div className="container q_add_body">
      {/* QUESTION   */}
      <div className="  question ">
        <div className="question_input ">
          <input type="text" placeholder="Question" />
        </div>
        <div className="Points_selection ">
          <select className="form-select" id="validationDefault04" required>
            <option selected disabled value="">
              Points
            </option>
            <option>
              <p>5</p>
            </option>
            <option>
              <p>10</p>
            </option>
            <option>
              <p>15</p>
            </option>
            <option>
              <p>20</p>
            </option>
          </select>
        </div>
      </div>

      {/* Answers */}

      {/* ANS-1 */}
      <div className="ans">
        <div className="ans_input">
          <input type="text" placeholder="Answer-1" />
        </div>
        <div className="check_mark">
          <input type="checkbox" class="ui-checkbox" />
        </div>
      </div>

      {/* ANS-2 */}
      <div className="ans">
        <div className="ans_input">
          <input type="text" placeholder="Answer-2" />
        </div>
        <div className="check_mark">
          <input type="checkbox" class="ui-checkbox" />
        </div>
      </div>

      {/* ANS-3 */}
      <div className="ans">
        <div className="ans_input">
          <input type="text" placeholder="Answer-3" />
        </div>
        <div className="check_mark">
          <input type="checkbox" class="ui-checkbox" />
        </div>
      </div>

      {/* ANS-4 */}
      <div className="ans">
        <div className="ans_input">
          <input type="text" placeholder="Answer-4" />
        </div>
        <div className="check_mark">
          <input type="checkbox" class="ui-checkbox" />
        </div>
      </div>

      {/* Changing Section */}
      <div className="chanaging_section">
        <div className="pre-next-cont">
          <div className="btn prev-btn">
            <i class="fa-solid fa-chevron-left"></i> Prev
          </div>
          <div className="btn next-btn">
            Next <i class="fa-solid fa-chevron-right"></i>
          </div>
        </div>
        <div className="done-cont">
          <Link className="done-btn btn btn-success" to="/share_code">
            <i class="fa-regular fa-circle-check"></i> Done
          </Link>
        </div>
      </div>
    </div>
  );
}

export default q_add;
