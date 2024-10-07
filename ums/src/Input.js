import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiBaseUrl } from "./apiBaseUrl";

function Input(){

    const [data, setData] = useState({
      image: '',
      title: '',
      description: '',
      price: ''
    });

    const [dataValidation, setDataValidation] = useState({
      image: false,
      title: false,
      description: false,
      price: false
    });

    const navigate = useNavigate();

    const onChange = (e) => {
      setData({
        ...data,
        [e.target.name]: e.target.value
      });
      setDataValidation({
        ...dataValidation,
        [e.target.name]: false
      })
    }

    const submit = (e) => {
      e.preventDefault();

      let invalid = {};

      let isEmpty = false;

      Object.entries(data).forEach(([key, value]) => {
          if (value === '') {
              invalid[key] = true;
              isEmpty = true; 
          }
      });

      setDataValidation({
          ...dataValidation,
          ...invalid
      });

      if( isEmpty ) return;
      
      // console.log(data, dataValidation);

      fetch(`${apiBaseUrl}/card/add`,{
        method: 'POST',
        body: JSON.stringify({
          ...data, 
          price: parseInt(data.price)
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(res => {
        navigate('/');
      })

    }

    return(
        <div>

        <form className="form-horizontal d-grid gap-2 col-10 mx-auto input">
        <fieldset>

        {/* <!-- Form Name --> */}
        <legend className="fw-bolder" >Add Card</legend>

          {/* <!-- Image input--> */}
          <div className="form-group m-2 mt-5">
            <div className="col-md-4">
              <label className="control-label ms-3">Image source</label>  
              <label className="control-label text-danger ms-3"> { dataValidation.image && 'Enter Image source' } </label>  
            </div>  
            <div className="col-md-4">

              <input 
                id="textinput" 
                name="image" 
                type="text" 
                placeholder="enter link to image" 
                className="form-control input-md m-2"
                onChange={ e => onChange(e) }
              />
              
            </div>
          </div>

          {/* <!-- Title input--> */}
          <div className="form-group m-2 mt-3">
            <div className="col-md-4">
              <label className="control-label ms-3">Title</label>  
              <label className="control-label text-danger ms-3"> { dataValidation.title && 'Enter Title' } </label> 
            </div> 
            <div className="col-md-4">

              <input 
                id="textinput" 
                name="title" 
                type="text" 
                placeholder="enter game name" 
                className="form-control input-md m-2"
                onChange={ e => onChange(e) }
              />
              
            </div>
          </div>

          {/* <!-- Description input--> */}
          <div className="form-group m-2 mt-3">
            <div className="col-md-4">
              <label className="control-label ms-3">Description</label>  
              <label className="control-label text-danger ms-3"> { dataValidation.description && 'Enter Description' } </label> 
            </div> 
            <div className="col-md-4">
              
              <input 
                id="textinput" 
                name="description" 
                type="text" 
                placeholder="enter description" 
                className="form-control input-md m-2"
                onChange={ e => onChange(e) }
              />
              
            </div>
          </div>

          {/* <!-- Price input--> */}
          <div className="form-group m-2 mt-3">
            <div className="col-md-4">
              <label className="control-label ms-3">Price</label> 
              <label className="control-label text-danger ms-3"> { dataValidation.price && 'Enter Price' } </label>  
            </div> 
            <div className="col-md-4">
              
              <input 
                id="textinput" 
                name="price" 
                type="number" 
                placeholder="enter price" 
                className="form-control input-md m-2"
                onChange={ e => onChange(e) }
              />
              
            </div>
          </div>

          {/* <!-- Button (Double) --> */}
          <div className="form-group m-2">
            <label className="col-md-4 control-label"></label>
            <div className="col-md-8">

              <button 
                className="btn btn-info m-2"
                name="submit"
                id="submit" 
                type="submit"
                onClick={ e => submit(e) }
              > Submit </button>

              <button 
                id="cancel" 
                name="cancel"
                className="btn btn-danger m-2"
                onClick={ (e) => {
                  e.preventDefault();
                  navigate('/');
                } }   
              > Cancel </button>

            </div>
          </div>

          </fieldset>
          </form>

        </div>
    )
}
export default Input;